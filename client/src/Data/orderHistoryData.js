// ---------------- Mock Order History Data ----------------
const orderHistoryData = 
// [
//   {
//     id: "ord123",
//     restaurantName: "Pizza Hut",
//     orderDate: "Oct 25, 2025",
//     itemsSummary: "1x Medium Veggie Pizza, 2x Coke",
//     totalAmount: 550.0,
//     status: "Delivered",
//   },
//   {
//     id: "ord124",
//     restaurantName: "Biryani House",
//     orderDate: "Oct 27, 2025",
//     itemsSummary: "1x Chicken Biryani, 1x Raita",
//     totalAmount: 320.0,
//     status: "Out for Delivery",
//   },
//   {
//     id: "ord125",
//     restaurantName: "Domino’s Pizza",
//     orderDate: "Oct 28, 2025",
//     itemsSummary: "2x Cheese Burst Pizza, 1x Pepsi",
//     totalAmount: 799.0,
//     status: "Processing",
//   },
//   {
//     id: "ord126",
//     restaurantName: "Burger King",
//     orderDate: "Oct 29, 2025",
//     itemsSummary: "2x Whopper Meals, 2x Coke",
//     totalAmount: 640.0,
//     status: "Ordered",
//   },
// ];

[
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
      {
        id: "soda-coke",
        name: "Soda Coke",
        price: 85,
        quantity: 3,
        imageUrl:
          "https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg",
      },
    ],
    subtotal: 674,
    salesTaxRate: 0.18,
    salesTax: 121.32,
    shippingFee: 35,
    totalAmount: 830.32,
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
        imageUrl:
          "https://placehold.co/600x400/f59e0b/fff?text=Biryani",
      },
      {
        id: "raita",
        name: "Boondi Raita",
        price: 59,
        quantity: 1,
        imageUrl:
          "https://placehold.co/600x400/84cc16/fff?text=Raita",
      },
      {
        id: "gulab-jamun",
        name: "Gulab Jamun (2pcs)",
        price: 99,
        quantity: 1,
        imageUrl:
          "https://placehold.co/600x400/f97316/fff?text=Gulab+Jamun",
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
        imageUrl:
          "https://placehold.co/600x400/60a5fa/fff?text=Burger",
      },
      {
        id: "fries-large",
        name: "Large Fries",
        price: 99,
        quantity: 1,
        imageUrl:
          "https://placehold.co/600x400/f87171/fff?text=Fries",
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
        imageUrl:
          "https://placehold.co/600x400/a855f7/fff?text=Chocolate+Cake",
      },
      {
        id: "brownie",
        name: "Fudge Brownie",
        price: 120,
        quantity: 2,
        imageUrl:
          "https://placehold.co/600x400/f87171/fff?text=Brownie",
      },
    ],
    subtotal: 739,
    salesTaxRate: 0.18,
    salesTax: 133.02,
    shippingFee: 0,
    totalAmount: 872.02,
    status: "Delivered",
  },
];

export default orderHistoryData;
