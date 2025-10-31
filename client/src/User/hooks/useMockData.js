import { useState, useEffect, useCallback } from "react";

// --- All Mock Data Centralized ---

const MOCK_RESTAURANTS = [
  {
    id: 1,
    name: "Feasty - City Center Hub",
    imageUrl: "https://placehold.co/600x400/10B981/FFFFFF?text=City+Center+Hub",
    offerText: "FLAT ₹50 OFF ABOVE ₹299",
    rating: 4.6,
    deliveryTime: "10–15 mins",
    cuisines: "Groceries, Snacks, Beverages, Dairy",
    location: "City Center, Durgapur",
  },
  {
    id: 2,
    name: "Feasty - Benachity Hub",
    imageUrl: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Benachity+Hub",
    offerText: "UPTO ₹100 CASHBACK VIA UPI",
    rating: 4.4,
    deliveryTime: "15–20 mins",
    cuisines: "Daily Essentials, Vegetables, Bakery, Household",
    location: "Benachity, Durgapur",
  },
  {
    id: 3,
    name: "Feasty - Durgapur Station Hub",
    imageUrl: "https://placehold.co/600x400/EF4444/FFFFFF?text=Station+Hub",
    offerText: "FREE DELIVERY ABOVE ₹249",
    rating: 4.5,
    deliveryTime: "20–25 mins",
    cuisines: "Groceries, Snacks, Beverages, Frozen Food",
    location: "Durgapur Railway Station Area",
  },
  {
    id: 4,
    name: "Feasty - Junction Mall Hub",
    imageUrl:
      "https://placehold.co/600x400/3B82F6/FFFFFF?text=Junction+Mall+Hub",
    offerText: "₹75 OFF ABOVE ₹499",
    rating: 4.7,
    deliveryTime: "10–15 mins",
    cuisines: "Fruits, Vegetables, Beverages, Household Items",
    location: "Junction Mall Area, Durgapur",
  },
];

const MOCK_FOOD_ITEMS = [
  {
    id: '1-1',
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
    id: "1-2",
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
    id: "1-3",
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
    id: "2-1",
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
    id: "2-2",
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
    id: "2-3",
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
    id: "3-1",
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
    id: "3-2",
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
    id: "3-3",
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
    id: "4-1",
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
    id: "4-2",
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
    id: "4-3",
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

const MOCK_CART = {
  foodItems: [
    // {
    //   id: "cc-1",
    //   restaurantName: "Feasty - City Center Hub",
    //   title: "Chicken Fried Rice",
    //   price: 205,
    //   quantity: 1,
    //   foodTypeVeg: false,
    //   imageUrl:
    //     "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
    // },
    // {
    //   id: "b-2",
    //   restaurantName: "Feasty - Benachity Hub",
    //   title: "Masala Dosa",
    //   price: 129,
    //   quantity: 2,
    //   foodTypeVeg: true,
    //   imageUrl:
    //     "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
    // },
  ],
  salesTaxRate: 0.18,
  shippingFee: 35,
};

const MOCK_ORDERS = [
  {
    id: "order123456",
    restaurantName: "City Center",
    orderDate: "Oct 30, 2025",
    items: [
      {
        id: "pizza-margherita",
        name: "Margherita Pizza",
        price: 149,
        quantity: 1,
        imageUrl:
          "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
      },
      {
        id: "burger-classic",
        name: "Classic Burger",
        price: 135,
        quantity: 2,
        imageUrl:
          "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
      },
    ],
    subtotal: 419,
    salesTaxRate: 0.18,
    salesTax: 75.42,
    shippingFee: 35,
    totalAmount: 529.42,
    status: "Ordered",
  },
  {
    id: "order123457",
    restaurantName: "Spice Villa",
    orderDate: "Oct 28, 2025",
    items: [
      {
        id: "biryani-hyderabadi",
        name: "Hyderabadi Biryani",
        price: 229,
        quantity: 1,
        imageUrl: "https://placehold.co/600x400/f59e0b/fff?text=Biryani",
      },
      {
        id: "raita",
        name: "Boondi Raita",
        price: 59,
        quantity: 1,
        imageUrl: "https://placehold.co/600x400/84cc16/fff?text=Raita",
      },
      {
        id: "gulab-jamun",
        name: "Gulab Jamun (2pcs)",
        price: 99,
        quantity: 1,
        imageUrl: "https://placehold.co/600x400/f97316/fff?text=Gulab+Jamun",
      },
    ],
    subtotal: 387,
    salesTaxRate: 0.18,
    salesTax: 69.66,
    shippingFee: 25,
    totalAmount: 481.66,
    status: "Processing",
  },
  {
    id: "order123458",
    restaurantName: "Burger Lounge",
    orderDate: "Oct 27, 2025",
    items: [
      {
        id: "chicken-burger",
        name: "Chicken Burger",
        price: 159,
        quantity: 2,
        imageUrl: "https://placehold.co/600x400/60a5fa/fff?text=Burger",
      },
      {
        id: "fries-large",
        name: "Large Fries",
        price: 99,
        quantity: 1,
        imageUrl: "https://placehold.co/600x400/f87171/fff?text=Fries",
      },
    ],
    subtotal: 417,
    salesTaxRate: 0.18,
    salesTax: 75.06,
    shippingFee: 0,
    totalAmount: 492.06,
    status: "Out for Delivery",
  },
  {
    id: "order123459",
    restaurantName: "Sweet Tooth Bakery",
    orderDate: "Oct 25, 2025",
    items: [
      {
        id: "choco-cake",
        name: "Chocolate Truffle Cake",
        price: 499,
        quantity: 1,
        imageUrl: "https://placehold.co/600x400/a855f7/fff?text=Chocolate+Cake",
      },
    ],
    subtotal: 499,
    salesTaxRate: 0.18,
    salesTax: 89.82,
    shippingFee: 0,
    totalAmount: 588.82,
    status: "Delivered",
  },
];

const MOCK_ADDRESS = {
//   fullName: "Jane Doe",
//   phone: "9876543210",
//   addressLine1: "123 Main St, Apt 4B",
//   addressLine2: "Near City Hospital",
//   city: "Durgapur",
//   zipCode: "713201",
//   deliveryInstructions: "Leave at front desk.",
};

// --- The Custom Hook ---

// We use a singleton pattern here to ensure all components share the *same* state.
// This is a simple alternative to Context for this specific use case.
let globalState = {
  loading: true,
  error: null,
  restaurants: [],
  foodItems: [],
  cart: { foodItems: [], salesTaxRate: 0.18, shippingFee: 35 },
  orders: [],
  deliveryAddress: null,
};

// Listeners to update components when state changes
let listeners = [];

// Function to update the global state and notify all components
const setGlobalState = (newState) => {
  globalState = { ...globalState, ...newState };
  listeners.forEach((listener) => listener(globalState));
};

// Function to fetch data (simulated)
const fetchData = () => {
  console.log("Fetching mock data...");
  setGlobalState({ loading: true, error: null });

  setTimeout(() => {
    try {
      // Simulate a successful fetch
      setGlobalState({
        loading: false,
        restaurants: MOCK_RESTAURANTS,
        foodItems: MOCK_FOOD_ITEMS,
        cart: MOCK_CART,
        orders: MOCK_ORDERS,
        deliveryAddress: MOCK_ADDRESS, // Pre-load with mock address
      });
      console.log("Mock data loaded.");
    } catch (err) {
      console.error("Failed to load mock data:", err);
      setGlobalState({ loading: false, error: "Failed to load data." });
    }
  }, 1000); // 1 second delay
};

// Fetch data only once when the app loads
let dataFetched = false;

export const useMockData = () => {
  // Get the current global state
  const [state, setState] = useState(globalState);

  // Trigger initial data fetch if it hasn't happened
  useEffect(() => {
    if (!dataFetched) {
      dataFetched = true;
      fetchData();
    }
  }, []);

  // Subscribe this component to global state updates
  useEffect(() => {
    const listener = (newState) => setState(newState);
    listeners.push(listener);

    // Cleanup: remove listener when component unmounts
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  // --- State Updaters (Actions) ---

  const addFoodToCart = useCallback((foodItem) => {
    // Basic implementation: just adds the item.
    // A real app would check if the item (and restaurant) is already in the cart.
    // For simplicity, we just add.
    console.log("Adding to cart:", foodItem);
    const newItem = { ...foodItem, quantity: 1 };

    setGlobalState({
      cart: {
        ...globalState.cart,
        foodItems: [...globalState.cart.foodItems, newItem],
      },
    });
  }, []);

  const updateCartItemQuantity = useCallback((itemId, newQuantity) => {
    console.log(`Updating quantity for ${itemId} to ${newQuantity}`);
    if (newQuantity <= 0) {
      // If quantity is 0 or less, remove the item
      removeCartItem(itemId);
    } else {
      setGlobalState({
        cart: {
          ...globalState.cart,
          foodItems: globalState.cart.foodItems.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
          ),
        },
      });
    }
  }, []);

  const removeCartItem = useCallback((itemId) => {
    console.log(`Removing item ${itemId}`);
    setGlobalState({
      cart: {
        ...globalState.cart,
        foodItems: globalState.cart.foodItems.filter(
          (item) => item.id !== itemId
        ),
      },
    });
  }, []);

  const setDeliveryAddress = useCallback((address) => {
    console.log("Saving address:", address);
    setGlobalState({
      deliveryAddress: address,
    });
  }, []);

  // Return the full state and the functions to update it
  return {
    ...state,
    addFoodToCart,
    updateCartItemQuantity,
    removeCartItem,
    setDeliveryAddress,
  };
};
