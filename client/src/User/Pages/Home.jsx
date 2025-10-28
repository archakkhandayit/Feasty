import React, { useState, useEffect } from "react";
import { Home, ShoppingCart, ListOrdered, LogOut, Menu, X , Star} from "lucide-react";
import { useNavigate } from 'react-router-dom'

import restaurantData from '../../Data/restaurants.js'


// --- New Restaurant Card Component ---
const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer">
      {/* Image container */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={restaurant.imageUrl}
          alt={restaurant.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Not+Found';
          }}
        />
        <div className="absolute bottom-2 left-3 bg-black opacity-60 text-white text-lg font-extrabold p-2 rounded-lg backdrop-blur-sm">
          {restaurant.offerText}
        </div>
      </div>

      {/* Text content */}
      <div className="p-4">
        <h3 className="font-bold text-xl mb-1 text-gray-900 truncate">{restaurant.name}</h3>
        <div className="flex items-center text-base font-semibold text-gray-700 mb-2">
          <Star className="text-green-500 fill-green-500 mr-1" size={18} />
          <span>
            {restaurant.rating} • {restaurant.deliveryTime}
          </span>
        </div>
        <p className="text-gray-600 text-sm truncate mb-1">{restaurant.cuisines}</p>
        <p className="text-gray-600 text-sm">{restaurant.location}</p>
      </div>
    </div>
  );
};

// --- New Restaurant Carousel Component ---
const RestaurantCarousel = () => {

  const navigate = useNavigate();
  
  return (
    <div className="max-w-full mx-auto py-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
         Our Outlets in Durgapur
        </h2>
        {/* Hide scrollbar utility class */}
        <style>
          {`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
        </style>
        <div className="flex overflow-x-auto space-x-6 py-4 gap-x-5 no-scrollbar">
          {restaurantData.map((restaurant) => (
            <div
          key={restaurant.id}
          onClick={() => navigate(`/restaurant/${restaurant.name}`)}
          className="cursor-pointer"
        >
            <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const HomePage = () => {
    


  return (
    <RestaurantCarousel />
  );
};

export default HomePage;
