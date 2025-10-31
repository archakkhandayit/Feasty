import React, { useState } from "react";
import { Loader2, AlertTriangle } from 'lucide-react';
import DeliveryAddressForm from "../components/DeliveryAddressForm.jsx"; // Corrected import path
import { useMockData } from "../hooks/useMockData.js"; // Corrected import path

// --- OrderItem Component (Updated) ---
// Now directly uses functions passed from Cart
const OrderItem = ({ item, onQuantityChange, onRemoveItem }) => {
  // Use 'title' from foodItem object, fallback to 'name'
  const displayName = item.title || item.name;

  return (
    <div className="flex items-center justify-between py-2 border-b last:border-b-0">
      <div className="flex items-center">
        <img
          src={item.imageUrl}
          alt={displayName}
          className="w-12 h-12 object-cover rounded-md mr-4"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/48x48/CCCCCC/FFFFFF?text=Img';
          }}
        />
        <div>
          <h4 className="font-medium  text-gray-800">{displayName}</h4>
          <div className="flex items-center mt-1">
            <button
              onClick={() => onQuantityChange(item.id, item.quantity - 1)}
              className="text-gray-600 hover:text-gray-800 text-lg p-1 rounded-full w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
              disabled={item.quantity <= 1} // Disable at 1 (hook handles removal at 0)
              aria-label={`Decrease quantity of ${displayName}`}
            >
              −
            </button>
            <span className="mx-3 text-gray-700 font-medium w-6 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => onQuantityChange(item.id, item.quantity + 1)}
              className="text-gray-600 hover:text-gray-800 text-lg p-1 rounded-full w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
              aria-label={`Increase quantity of ${displayName}`}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <span className="font-medium text-gray-800 mr-4">
          ₹{(item.price * item.quantity).toFixed(2)}
        </span>
        <button
          onClick={() => onRemoveItem(item.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
          aria-label={`Remove ${displayName}`}
        >
          {/* Simple trash icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 11-2 0v6a1 1 0 112 0V8z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// --- OrderSummaryCard (Updated) ---
// Now stateless, receives all data and functions as props.
const OrderSummaryCard = ({ cart, onQuantityChange, onRemoveItem }) => {
  // const [discountCode, setDiscountCode] = useState("");

  const { foodItems: items, salesTaxRate } = cart;
  let { shippingFee } = cart;
  if(items.length === 0){
    shippingFee = 0;
  }

  const handleProceedToPay = () => {
    if (items.length === 0) {
      // Use a custom alert/modal in a real app
      console.warn("Your cart is empty. Please add items before proceeding.");
      return;
    }
    // In real app: navigate to payment page
    console.log(`Proceeding to payment of ₹${totalDue.toFixed(2)}`);
  };

  const handleDiscountCode = (e) => {
    // Use a custom alert/modal in a real app
    console.log("Invalid Coupon Code");
    setDiscountCode("");
  }

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const salesTax = subtotal * salesTaxRate;
  const totalDue = subtotal + salesTax + shippingFee;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 md:p-8 border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-3">Order Summary</h2>

      {/* Order Items */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        {items.length === 0 ? (
          <p className="text-gray-500 italic text-center py-4">
            No items in your cart.
          </p>
        ) : (
          items.map((item) => (
            <OrderItem
              key={item.id}
              item={item}
              onQuantityChange={onQuantityChange} // Pass prop down
              onRemoveItem={onRemoveItem}       // Pass prop down
            />
          ))
        )}
      </div>

      {/* Gift Card / Discount */}
      {/* <div className="mb-6">
        <label
          htmlFor="discountCode"
          className="block text-md font-semibold text-gray-700 mb-2"
        >
          Gift Card / Discount code
        </label>
        <div className="flex">
          <input
            type="text"
            id="discountCode"
            className="grow border border-gray-300 rounded-l-lg p-3 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all duration-200"
            placeholder="Enter code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <button
            className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-r-lg hover:bg-indigo-700 transition-colors duration-200"
            aria-label="Apply discount code"
            onClick={handleDiscountCode}
          >
            Apply
          </button>
        </div>
      </div> */}

      {/* Totals */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-700">
          <span>Item Total</span>
          <span className="font-medium">₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>GST & Other Charges ({(salesTaxRate * 100).toFixed(1)}%)</span>
          <span className="font-medium">₹{salesTax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Delivery Fee</span>
          <span className="font-medium text-green-600">
            {shippingFee === 0 ? "FREE" : `₹${shippingFee.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between items-baseline pt-3 border-t border-gray-200">
          <span className="text-xl font-bold text-gray-800">To Pay</span>
          <span className="text-2xl font-extrabold text-indigo-600">
            ₹{totalDue.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Proceed to Pay Button */}
      <button
        onClick={handleProceedToPay}
        disabled={items.length === 0}
        className={`w-full py-3 rounded-lg font-semibold text-white text-lg shadow-md transition-colors duration-300 ${
          items.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400"
        }`}
      >
        Proceed with Cash on Delivery
      </button>
    </div>
  );
};

// --- Main Cart Component (Updated) ---
const Cart = () => {
  // Get all required state and functions from the hook
  const {
    cart,
    deliveryAddress,
    setDeliveryAddress,
    updateCartItemQuantity,
    removeCartItem,
    loading,
    error
  } = useMockData();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
        <span className="text-xl ml-4 text-gray-700">Loading Cart...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[80vh] text-red-600">
        <AlertTriangle className="w-16 h-16" />
        <h2 className="text-2xl font-semibold mt-4">Oops! Something went wrong.</h2>
        <p className="text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 flex items-start justify-center pt-24">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Side — Delivery Form */}
        <div className="bg-white flex justify-center h-min rounded-xl shadow-md p-6">
          <DeliveryAddressForm 
            savedAddress={deliveryAddress} // Pass the saved address down
            onSaveAddress={setDeliveryAddress} // Pass the save function down
          />
        </div>

        {/* Right Side — Order Summary */}
        <div className="bg-white rounded-xl shadow-md p-6 sticky top-24 h-fit">
          <OrderSummaryCard 
            cart={cart} // Pass the entire cart object
            onQuantityChange={updateCartItemQuantity} // Pass the update function
            onRemoveItem={removeCartItem} // Pass the remove function
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;