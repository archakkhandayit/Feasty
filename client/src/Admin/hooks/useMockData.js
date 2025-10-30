import { useState, useCallback } from "react";
// We no longer import types, but we MUST define OrderStatus
// as a JavaScript object since it's used by the code logic (not just for types).

const OrderStatus = {
  NEW: "New",
  ACCEPTED: "Processing",
  OUT_FOR_DELIVERY: "Out for Delivery",
  DELIVERED: "Delivered",
  REJECTED: "Rejected",
};

// Removed : MenuItem[] type
const initialMenuItems = [
  {
    id: "m1",
    name: "Margherita Pizza",
    description: "Classic cheese and tomato pizza.",
    price: 12.99,
    imageUrl: "https://picsum.photos/seed/pizza1/400/300",
    category: "Pizza",
  },
  {
    id: "m2",
    name: "Pepperoni Pizza",
    description: "Pizza with pepperoni and cheese.",
    price: 14.99,
    imageUrl: "https://picsum.photos/seed/pizza2/400/300",
    category: "Pizza",
  },
  {
    id: "m3",
    name: "Caesar Salad",
    description: "Fresh romaine with Caesar dressing.",
    price: 8.99,
    imageUrl: "https://picsum.photos/seed/salad1/400/300",
    category: "Salads",
  },
  {
    id: "m4",
    name: "Spaghetti Carbonara",
    description: "Pasta with eggs, cheese, and pancetta.",
    price: 15.5,
    imageUrl: "https://picsum.photos/seed/pasta1/400/300",
    category: "Pasta",
  },
  {
    id: "m5",
    name: "Garlic Bread",
    description: "Toasted bread with garlic butter.",
    price: 4.5,
    imageUrl: "https://picsum.photos/seed/bread1/400/300",
    category: "Sides",
  },
];

// Removed all type annotations from parameters and return type
const createOrder = (id, status, items) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = total * 0.1;
  const deliveryCharge = 5.0;
  const grandTotal = total + tax + deliveryCharge;
  return {
    id: `ORD${1000 + id}`,
    customerName: `Customer ${id}`,
    items,
    total,
    tax,
    deliveryCharge,
    grandTotal,
    orderTime: new Date(Date.now() - id * 1000 * 60 * 5),
    status,
  };
};

// Removed : Order[] type
const initialOrders = [
  createOrder(1, OrderStatus.NEW, [
    { id: "m1", name: "Margherita Pizza", quantity: 1, price: 12.99 },
    { id: "m5", name: "Garlic Bread", quantity: 2, price: 4.5 },
  ]),
  createOrder(2, OrderStatus.NEW, [
    { id: "m2", name: "Pepperoni Pizza", quantity: 2, price: 14.99 },
  ]),
  createOrder(3, OrderStatus.ACCEPTED, [
    { id: "m3", name: "Caesar Salad", quantity: 1, price: 8.99 },
  ]),
  createOrder(4, OrderStatus.OUT_FOR_DELIVERY, [
    { id: "m4", name: "Spaghetti Carbonara", quantity: 1, price: 15.5 },
  ]),
  createOrder(5, OrderStatus.DELIVERED, [
    { id: "m1", name: "Margherita Pizza", quantity: 1, price: 12.99 },
  ]),
  createOrder(6, OrderStatus.REJECTED, [
    { id: "m2", name: "Pepperoni Pizza", quantity: 1, price: 14.99 },
  ]),
  createOrder(7, OrderStatus.ACCEPTED, [
    { id: "m1", name: "Margherita Pizza", quantity: 1, price: 12.99 },
    { id: "m3", name: "Caesar Salad", quantity: 1, price: 8.99 },
  ]),
];

// Removed : OutletInfo type
const initialOutletInfo = {
  name: "Gourmet Kitchen",
  address: "123 Foodie Lane, Flavor Town, USA",
  phone: "555-123-4567",
  hours: "Mon-Sat: 11:00 AM - 10:00 PM",
};

export const useMockData = () => {
  // Removed <Order[]> type
  const [orders, setOrders] = useState(initialOrders);
  // Removed <MenuItem[]> type
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  // Removed <OutletInfo> type
  const [outletInfo, setOutletInfo] = useState(initialOutletInfo);

  // Removed type annotations from parameters
  const updateOrderStatus = useCallback((orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  }, []);

  // Removed type annotation from parameter
  const addMenuItem = useCallback((item) => {
    // Removed : MenuItem type
    const newItem = {
      ...item,
      id: `m${Date.now()}`,
    };
    setMenuItems((prev) => [newItem, ...prev]);
  }, []);

  // Removed type annotation from parameter
  const updateMenuItem = useCallback((updatedItem) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  }, []);

  // Removed type annotation from parameter
  const deleteMenuItem = useCallback((itemId) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== itemId));
  }, []);

  // Removed type annotation from parameter
  const updateOutletInfo = useCallback((newInfo) => {
    setOutletInfo(newInfo);
  }, []);

  return {
    orders,
    menuItems,
    outletInfo,
    updateOrderStatus,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    updateOutletInfo,
  };
};
