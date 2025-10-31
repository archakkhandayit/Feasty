import React from "react";
import { Star, Loader2, AlertTriangle } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useMockData } from '../hooks/useMockData.js'; // Corrected import path

// --- Restaurant Card Component (Unchanged) ---
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

// --- Restaurant Carousel Component (Updated) ---
// Now receives restaurants as a prop
const RestaurantCarousel = ({ restaurants }) => {
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
          {restaurants.map((restaurant) => (
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


// --- Home Page (Updated) ---
const HomePage = () => {
  // Use the new hook
  const { restaurants, loading, error } = useMockData();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
        <span className="text-xl ml-4 text-gray-700">Loading Restaurants...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh] text-red-600">
        <AlertTriangle className="w-16 h-16" />
        <h2 className="text-2xl font-semibold mt-4">Oops! Something went wrong.</h2>
        <p className="text-lg">{error}</p>
      </div>
    );
  }
  
  // Pass the data from the hook as a prop
  return (
    <RestaurantCarousel restaurants={restaurants} />
  );
};

export default HomePage;