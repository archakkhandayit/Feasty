// foodItems.js

const foodItems = [
  {
    id: 1,
    restaurantId: 1,
    restaurantName: 'Feasty - City Center Hub',
    title: "Chicken Fried Rice with Chicken Chilli (1 person)",
    foodTypeVeg: false,
    price: "205",
    rating: "2.9",
    reviewCount: "3",
    description:
    "A flavorful combination of savory chicken fried rice and tender chicken pieces, perfect for a satisfying lunch or dinner.",
    imageUrl:
    "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
    initialQuantity: 0,
},
{
    id: 2,
    restaurantId: 1,
    restaurantName: 'Feasty - City Center Hub',
    title: "Paneer Butter Masala with Jeera Rice",
    foodTypeVeg: true,
    price: "189",
    rating: "4.4",
    reviewCount: "18",
    description:
    "Creamy paneer cubes cooked in rich butter masala gravy served with aromatic cumin rice.",
    imageUrl:
    "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
    initialQuantity: 0,
},
{
    id: 3,
    restaurantId: 1,
    restaurantName: 'Feasty - City Center Hub',
    title: "Veg Hakka Noodles with Manchurian",
    foodTypeVeg: true,
    price: "165",
    rating: "4.2",
    reviewCount: "11",
    description:
    "Soft noodles tossed with vegetables and soy sauce, paired with spicy veg manchurian balls.",
    imageUrl:
    "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
    initialQuantity: 0,
},
{
    id: 1,
    restaurantName: 'Feasty - Benachity Hub',
    restaurantId: 2,
    title: "Grilled Chicken Sandwich with Fries",
    foodTypeVeg: false,
    price: "149",
    rating: "4.1",
    reviewCount: "7",
    description:
    "Juicy grilled chicken slices layered with fresh veggies and cheese, served with crispy fries.",
    imageUrl:
    "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
    initialQuantity: 0,
},
{
    id: 2,
    restaurantId: 2,
    restaurantName: 'Feasty - Benachity Hub',
    title: "Masala Dosa with Coconut Chutney",
    foodTypeVeg: true,
    price: "129",
    rating: "4.6",
    reviewCount: "23",
    description:
    "Crispy dosa filled with spiced potato masala, served with coconut chutney and sambar.",
    imageUrl:
    "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
    initialQuantity: 0,
},
{
    id: 3,
    restaurantId: 2,
    restaurantName: 'Feasty - Benachity Hub',
    title: "Cheese Burst Margherita Pizza (Medium)",
    foodTypeVeg: false,
    price: "329",
    rating: "4.5",
    reviewCount: "16",
    description:
    "Classic cheese burst pizza topped with rich tomato sauce and gooey mozzarella cheese.",
    imageUrl:
    "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
    initialQuantity: 0,
},
{
    id: 1,
    restaurantId: 3,
    restaurantName: 'Feasty - Durgapur Station Hub',
    title: "Mutton Biryani with Raita",
    foodTypeVeg: false,
    price: "259",
    rating: "4.3",
    reviewCount: "9",
    description:
    "Aromatic basmati rice layered with tender mutton pieces and flavorful spices, served with cool raita.",
    imageUrl:
    "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
    initialQuantity: 0,
},
{
    id: 2,
    restaurantId: 3,
    restaurantName: 'Feasty - Durgapur Station Hub',
    title: "Veg Thali (Complete Meal)",
    foodTypeVeg: true,
    price: "179",
    rating: "4.0",
    reviewCount: "13",
    description:
    "A wholesome Indian meal with dal, rice, roti, sabzi, salad, and dessert — perfect for lunch or dinner.",
    imageUrl:
    "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
    initialQuantity: 0,
},
{
    id: 3,
    restaurantId: 3,
    restaurantName: 'Feasty - Durgapur Station Hub',
    title: "Cold Coffee with Ice Cream",
    foodTypeVeg: true,
    price: "99",
    rating: "4.7",
    reviewCount: "31",
    description:
    "Chilled coffee blended to perfection, topped with a scoop of vanilla ice cream.",
    imageUrl:
    "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
    initialQuantity: 0,
},
{
    id: 1,
    restaurantId: 4,
    restaurantName: 'Feasty - Junction Mall Hub',
    title: "Chocolate Lava Cake",
    foodTypeVeg: false,
    price: "119",
    rating: "4.8",
    reviewCount: "27",
    description:
    "Warm, rich chocolate cake with gooey molten chocolate inside — a perfect dessert treat.",
    imageUrl:
    "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
    initialQuantity: 0,
},
{
    id: 2,
    restaurantId: 4,
    restaurantName: 'Feasty - Junction Mall Hub',
    title: "Mutton Biryani with Raita",
    foodTypeVeg: false,
    price: "259",
    rating: "4.3",
    reviewCount: "9",
    description:
    "Aromatic basmati rice layered with tender mutton pieces and flavorful spices, served with cool raita.",
    imageUrl:
    "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
    initialQuantity: 0,
},
{
    id: 3,
    restaurantId: 4,
    restaurantName: 'Feasty - Junction Mall Hub',
    title: "Masala Dosa with Coconut Chutney",
    foodTypeVeg: true,
    price: "129",
    rating: "4.6",
    reviewCount: "23",
    description:
    "Crispy dosa filled with spiced potato masala, served with coconut chutney and sambar.",
    imageUrl:
    "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
    initialQuantity: 0,
},
];

export default foodItems;
