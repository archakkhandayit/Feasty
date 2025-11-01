import React from "react";

const FoodCard = ({
  foodItem,
  cartQuantity,
  onAddToCart,
  onUpdateQuantity,
}) => {
  // Destructure all details from the foodItem prop
  const {
    title,
    foodTypeVeg,
    price,
    rating,
    reviewCount,
    description,
    imageUrl,
  } = foodItem;

  // --- Event Handlers ---
  // These now call functions passed down from the hook

  const handleIncrement = () => {
    if (cartQuantity === 0) {
      // If item is not in cart, add it
      onAddToCart(foodItem);
    } else {
      // If item is already in cart, update its quantity
      onUpdateQuantity(foodItem.id, cartQuantity + 1);
    }
  };

  const handleDecrement = () => {
    // Only decrease if quantity is already 1 or more
    // The hook's update function will handle removal if quantity reaches 0
    if (cartQuantity > 0) {
      onUpdateQuantity(foodItem.id, cartQuantity - 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 py-6 border-b border-gray-200 bg-white flex justify-between items-start rounded-lg shadow-sm">
      {/* Text Content */}
      <div className="flex flex-col pr-4 grow">
        {/* Veg/Non-Veg Icon */}
        <div className="mb-1 text-lg leading-none">
          {foodTypeVeg ? (
            <span
              title="Veg"
              className="inline-block w-5 h-5 border-2 border-green-600 bg-white p-0.5 rounded-sm"
            >
              <span className="block w-full h-full bg-green-600 rounded-full"></span>
            </span>
          ) : (
            <span
              title="Non-Veg"
              className="inline-block w-5 h-5 border-2 border-red-600 bg-white p-0.5 rounded-sm"
            >
              <span className="block w-full h-full bg-red-600 rounded-sm" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></span>
            </span>
          )}
        </div>

        {/* Title and Price */}
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-lg font-bold text-gray-900 mb-2">₹{price}</p>

        {/* Rating and Reviews */}
        {rating && (
          <div className="flex items-center text-sm text-yellow-600 mb-2">
            <span role="img" aria-label="star" className="mr-1">
              ⭐
            </span>
            <span className="font-medium">{rating}</span>
            <span className="text-gray-500 ml-1">({reviewCount})</span>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Image and Quantity Control */}
      <div className="relative shrink-0 ml-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-32 h-32 object-cover rounded-lg shadow-md"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/128x128/CCCCCC/FFFFFF?text=Image';
          }}
        />

        {/* Quantity Control Overlay */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white border border-green-500 rounded-lg shadow-lg flex items-center justify-center w-28 h-10">
          <button
            onClick={handleDecrement}
            className={`flex-1 text-2xl font-bold ${
              cartQuantity === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            } rounded-l-lg h-full transition duration-150 ease-in-out`}
            aria-label="Decrease quantity"
            disabled={cartQuantity === 0}
          >
            -
          </button>
          
          <span className="px-2 text-lg font-bold text-green-600 w-10 text-center">
            {cartQuantity}
          </span>

          <button
            onClick={handleIncrement}
            className="flex-1 text-2xl font-bold text-green-500 hover:bg-green-50 rounded-r-lg h-full transition duration-150 ease-in-out"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;