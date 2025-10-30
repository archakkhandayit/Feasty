import React, { useMemo } from 'react';
// Removed 'type { Order }' import
import { OrderStatus } from '../types';
import OrderColumn from '../components/orders/OrderColumn';

// Removed OrdersPageProps interface
// Removed : React.FC<OrdersPageProps>
const OrdersPage = ({ orders, updateOrderStatus }) => {

  const ordersByStatus = useMemo(() => {
    return orders.reduce((acc, order) => {
      if (!acc[order.status]) {
        acc[order.status] = [];
      }
      acc[order.status].push(order);
      return acc;
    }, {}); // Removed type assertion
  }, [orders]);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Order Queue</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        <OrderColumn
          title="Incoming Orders"
          status={OrderStatus.NEW}
          orders={ordersByStatus[OrderStatus.NEW] || []}
          updateOrderStatus={updateOrderStatus}
        />
        <OrderColumn
          title="Processing"
          status={OrderStatus.ACCEPTED}
          orders={ordersByStatus[OrderStatus.ACCEPTED] || []}
          updateOrderStatus={updateOrderStatus}
        />
        <OrderColumn
          title="Out for Delivery"
          status={OrderStatus.OUT_FOR_DELIVERY}
          orders={ordersByStatus[OrderStatus.OUT_FOR_DELIVERY] || []}
          updateOrderStatus={updateOrderStatus}
        />
        <OrderColumn
          title="Delivered"
          status={OrderStatus.DELIVERED}
          orders={ordersByStatus[OrderStatus.DELIVERED] || []}
          updateOrderStatus={updateOrderStatus}
        />
        <OrderColumn
          title="Rejected"
          status={OrderStatus.REJECTED}
          orders={ordersByStatus[OrderStatus.REJECTED] || []}
          updateOrderStatus={updateOrderStatus}
        />
      </div>
    </div>
  );
};

export default OrdersPage;