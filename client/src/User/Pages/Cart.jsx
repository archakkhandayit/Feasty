import React, { useState } from "react";
import DeliveryAddressForm from "../Components/DeliveryAddressForm.jsx";

import foodItems from "../../Data/cartItems.js";

// Individual item component within the order summary
const OrderItem = ({ item, onQuantityChange, onRemoveItem }) => {
  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex items-center">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-12 h-12 object-cover rounded-md mr-4"
        />
        <div>
          <h4 className="font-medium  text-gray-800">{item.name}</h4>
          <div className="flex items-center mt-1">
            <button
              onClick={() => onQuantityChange(item.id, item.quantity - 1)}
              className="text-gray-600 hover:text-gray-800 text-lg p-1"
              disabled={item.quantity <= 1}
              aria-label={`Decrease quantity of ${item.name}`}
            >
              −
            </button>
            <span className="mx-2 text-gray-700 font-medium">
              {item.quantity}
            </span>
            <button
              onClick={() => onQuantityChange(item.id, item.quantity + 1)}
              className="text-gray-600 hover:text-gray-800 text-lg p-1"
              aria-label={`Increase quantity of ${item.name}`}
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
          aria-label={`Remove ${item.name}`}
        >
          {/* Simple trash icon using an SVG or Font Awesome if you have it */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 11-2 0v6a1 1 0 112 0V8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const OrderSummaryCard = ({ initialItems = [] }) => {
  const [items, setItems] = useState(initialItems);
  const [discountCode, setDiscountCode] = useState("");

  const salesTaxRate = 0.18; // 18.0%
  const shippingFee = 35; // 0 = FREE

  const handleQuantityChange = (id, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleProceedToPay = () => {
    if (items.length === 0) {
      alert("Your cart is empty. Please add items before proceeding.");
      return;
    }
    // In real app: navigate to payment page or trigger Razorpay checkout
    alert(`Proceeding to payment of ₹${totalDue.toFixed(2)}`);
  };

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
              onQuantityChange={handleQuantityChange}
              onRemoveItem={handleRemoveItem}
            />
          ))
        )}
      </div>

      {/* Gift Card / Discount */}
      <div className="mb-6">
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
          >
            Apply
          </button>
        </div>
      </div>

      {/* Totals */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal</span>
          <span className="font-medium">₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Sales tax ({(salesTaxRate * 100).toFixed(1)}%)</span>
          <span className="font-medium">₹{salesTax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Shipping Fee</span>
          <span className="font-medium text-green-600">
            {shippingFee === 0 ? "FREE" : `₹${shippingFee.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between items-baseline pt-3 border-t border-gray-200">
          <span className="text-xl font-bold text-gray-800">Total due</span>
          <span className="text-2xl font-extrabold text-indigo-600">
            ₹{totalDue.toFixed(2)}
          </span>
        </div>
      </div>

      {/* ✅ Proceed to Pay Button */}
      <button
        onClick={handleProceedToPay}
        disabled={items.length === 0}
        className={`w-full py-3 rounded-lg font-semibold text-white text-lg shadow-md transition-colors duration-300 ${
          items.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400"
        }`}
      >
        Proceed to Pay
      </button>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex items-start justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side — Delivery Form */}
        <div className="bg-white flex justify-center h-min rounded-xl shadow-md p-6">
          <DeliveryAddressForm />
        </div>

        {/* Right Side — Order Summary */}
        <div className="bg-white rounded-xl shadow-md p-6 sticky top-8 h-fit">
          <OrderSummaryCard initialItems={foodItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
