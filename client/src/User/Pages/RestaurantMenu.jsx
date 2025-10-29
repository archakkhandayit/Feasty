import { useParams } from "react-router-dom";
import FoodCard from "../Components/FoodCard.jsx";

import foodItems from "../../Data/foodItems.js";

const RestaurantMenu = () => {
  const { id } = useParams(); // restaurant ID from URL

  const filteredItems = foodItems.filter((item) => item.restaurantName === id);

  return (
    <div className="p-6 pt-24">
      <h1 className="text-3xl font-bold mb-4 text-center">{id}</h1>

      <div className="">
        {filteredItems.map((item) => (
          <FoodCard
            key={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            reviewCount={item.reviewCount}
            description={item.description}
            imageUrl={item.imageUrl}
            initialQuantity={0}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
