import React from 'react';
import { useParams } from "react-router-dom";
import { Loader2, AlertTriangle } from 'lucide-react';
import FoodCard from "../components/FoodCard.jsx"; // Corrected import path
import { useMockData } from "../hooks/useMockData.js"; // Corrected import path

const RestaurantMenu = () => {
  const { id } = useParams(); // restaurant name from URL
  
  // Get all data and functions from the hook
  const { 
    foodItems, 
    cart, 
    addFoodToCart, 
    updateCartItemQuantity, 
    loading, 
    error 
  } = useMockData();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
        <span className="text-xl ml-4 text-gray-700">Loading Menu...</span>
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

  // Filter food items based on the restaurant name in the URL
  const filteredItems = foodItems.filter((item) => item.restaurantName === id);

  return (
    <div className="p-6 pt-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">{id}</h1>

      <div className="space-y-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            // Find this item in the cart to get its current quantity
            const cartItem = cart.foodItems.find(ci => ci.id === item.id);
            const cartQuantity = cartItem ? cartItem.quantity : 0;

            return (
              <FoodCard
                key={item.id}
                foodItem={item} // Pass the whole item object
                cartQuantity={cartQuantity} // Pass the calculated cart quantity
                onAddToCart={addFoodToCart}
                onUpdateQuantity={updateCartItemQuantity}
              />
            );
          })
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No menu items found for this restaurant.
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;