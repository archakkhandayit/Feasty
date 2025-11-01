import React, { useState } from "react";
import { Package, Loader2, Truck, CheckCircle, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog.jsx"; // Corrected import path
import { useMockData } from "../hooks/useMockData.js"; // Corrected import path

// Helper function to create items summary from items array
function generateItemsSummary(items) {
  return items.map(item => `${item.quantity}x ${item.name}`).join(", ");
}

function addItemsSummaryToOrders(orders) {
  return orders.map(order => ({
    ...order,
    itemsSummary: generateItemsSummary(order.items),
  }));
}

// ---------------- Helper: getStatusInfo ----------------
const getStatusInfo = (status) => {
  switch (status) {
    case "Delivered":
      return {
        icon: <CheckCircle className="text-green-600 w-4 h-4 mr-1" />,
        style: "bg-green-100 text-green-700",
      };
    case "Out for Delivery":
      return {
        icon: <Truck className="text-blue-600 w-4 h-4 mr-1" />,
        style: "bg-blue-100 text-blue-700",
      };
    case "Processing":
      return {
        icon: <Loader2 className="text-orange-600 w-4 h-4 mr-1 animate-spin" />,
        style: "bg-orange-100 text-orange-700",
      };
    case "Ordered":
    default:
      return {
        icon: <Package className="text-gray-600 w-4 h-4 mr-1" />,
        style: "bg-gray-100 text-gray-700",
      };
  }
};

// ---------------- Order Card Component ----------------
const OrderCard = ({ order, onClick  }) => {
  const { icon, style } = getStatusInfo(order.status);
  return (
    <div onClick={() => onClick(order)} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 sm:p-6 mb-5 w-full cursor-pointer">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            {order.restaurantName}
          </h3>
          <p className="text-sm text-gray-500">{order.orderDate}</p>
        </div>

        <span
          className={`mt-2 sm:mt-0 max-w-fit inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${style}`}
        >
          {icon}
          {order.status}
        </span>
      </div>

      <div className="border-t mt-4 pt-3">
        <p className="text-gray-700 text-sm sm:text-base mb-2 truncate">
          {order.itemsSummary}
        </p>
        <div className="flex justify-end">
          <span className="text-lg font-semibold text-gray-900">
            ₹{order.totalAmount.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

// --- MyOrders Page (Updated) ---
const MyOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  
  // Get orders from the hook
  const { orders, loading, error } = useMockData();
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
        <span className="text-xl ml-4 text-gray-700">Loading Orders...</span>
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

  // Process the orders from the hook
  const updatedOrders = addItemsSummaryToOrders(orders);
  const sortedOrders = [...updatedOrders].sort(
    (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-24 mb-20">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Order History
      </h1>

      {sortedOrders.length > 0 ? (
        sortedOrders.map((order) => <OrderCard key={order.id} onClick={setSelectedOrder} order={order} />)
      ) : (
        <div className="flex items-center justify-center h-64 text-gray-500 text-lg bg-gray-50 rounded-lg">
          No orders yet!
        </div>
      )}

      {/* Order Detail Popup */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-md">
          {selectedOrder && (
            <>
              <DialogHeader>
                <DialogTitle>
                  {selectedOrder.restaurantName} — Order Details
                </DialogTitle>
              </DialogHeader>

              <div className="mt-4 space-y-2">
                <p>
                  <span className="font-semibold">Order ID:</span>{" "}
                  {selectedOrder.id}
                </p>
                <p>
                  <span className="font-semibold">Date:</span>{" "}
                  {selectedOrder.orderDate}
                </p>
                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  {selectedOrder.status}
                </p>

                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Items Ordered:</h3>
                  <ul className="space-y-1 text-sm">
                    {selectedOrder.items.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between border-b py-1"
                      >
                        <span>
                          {item.quantity}x {item.name}
                        </span>
                        <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 border-t pt-3 text-sm">
                  <p className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>₹{selectedOrder.subtotal.toFixed(2)}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Tax ({(selectedOrder.salesTaxRate * 100).toFixed(0)}%):</span>
                    <span>₹{selectedOrder.salesTax.toFixed(2)}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span>₹{selectedOrder.shippingFee.toFixed(2)}</span>
                  </p>
                  <p className="flex justify-between font-bold mt-2 text-lg">
                    <span>Total:</span>
                    <span>₹{selectedOrder.totalAmount.toFixed(2)}</span>
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyOrders;