import React from 'react';
// Removed 'type { Order }' import
import { OrderStatus } from '../../types';
import OrderCard from './OrderCard';

// Removed OrderColumnProps interface

// Removed type annotation 'Record<OrderStatus, string>'
const statusColors = {
  [OrderStatus.NEW]: 'border-blue-500',
  [OrderStatus.ACCEPTED]: 'border-orange-500',
  [OrderStatus.OUT_FOR_DELIVERY]: 'border-yellow-500',
  [OrderStatus.DELIVERED]: 'border-green-500',
  [OrderStatus.REJECTED]: 'border-red-500',
};

// Removed : React.FC<OrderColumnProps>
const OrderColumn = ({ title, status, orders, updateOrderStatus }) => {
  return (
    <div className="shrink-0 w-80 bg-gray-200 rounded-lg shadow-md">
      <div className={`p-4 border-t-4 ${statusColors[status]} rounded-t-lg`}>
        <h3 className="font-bold text-gray-700 flex justify-between items-center">
          {title}
          <span className="text-sm font-semibold bg-gray-300 text-gray-600 rounded-full px-2 py-1">
            {orders.length}
          </span>
        </h3>
      </div>
      <div className="p-2 space-y-3 h-[calc(100vh-14rem)] overflow-y-auto">
        {orders.length > 0 ? (
          orders.map(order => (
            <OrderCard key={order.id} order={order} updateOrderStatus={updateOrderStatus} />
          ))
        ) : (
          <div className="text-center text-gray-500 p-4">No orders</div>
        )}
      </div>
    </div>
  );
};

export default OrderColumn;