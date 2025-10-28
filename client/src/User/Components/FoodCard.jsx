import React, { useState } from 'react';

const FoodCard = ({
  title,
  price,
  rating,
  reviewCount,
  description,
  imageUrl,
  initialQuantity = 0,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="max-w-3xl mx-auto p-4 py-6 border-b-gray-300 border-b bg-white flex justify-between items-start">
      {/* Text Content */}
      <div className="flex flex-col pr-4 grow">
        {/* Recommended Tag (Simulated based on the up-arrow) */}
        <div className=" mb-1 text-lg leading-none">
          {/* Using a simple triangle for the up-arrow look */}
          <span className="inline-block text-red-500 border-red-500 border-3 p-px rounded-md" style={{ transform: 'scaleY(0.7)' }}>▲</span>
          &nbsp;
          <span className="inline-block text-green-500 border-green-500 border-3 px-px rounded-md" style={{ transform: 'scaleY(0.8)' }}>●</span>
        </div>

        {/* Title and Price */}
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {title}
        </h3>
        <p className="text-2xl font-bold text-gray-900 mb-2">
          ₹{price}
        </p>

        {/* Rating and Reviews */}
        <div className="flex items-center text-sm text-yellow-600 mb-2">
          <span role="img" aria-label="star" className="mr-1">⭐</span>
          <span className="font-medium">{rating}</span>
          <span className="text-gray-500 ml-1">({reviewCount})</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </div>

      {/* Image and Quantity Control */}
      <div className="relative shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-32 h-32 object-cover rounded-lg"
        />
        
        {/* Quantity Control Overlay */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white border border-green-500 rounded-lg shadow-md flex items-center justify-center w-28 h-10">
          <button
            onClick={handleDecrement}
            className="flex-1 text-2xl font-bold text-gray-700 hover:bg-gray-100 rounded-l-lg h-full transition duration-150 ease-in-out"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="px-2 text-lg font-bold text-green-600">
            {quantity}
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