import React from 'react';
// Removed 'type { Order }' import
import { OrderStatus } from '../../types';
import Button from '../ui/Button';

// Removed OrderCardProps interface

// Removed type annotation
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

// Removed : React.FC<OrderCardProps>
const OrderCard = ({ order, updateOrderStatus }) => {
  const renderActions = () => {
    switch (order.status) {
      case OrderStatus.NEW:
        return (
          <div className="flex space-x-2">
            <Button size="sm" className="bg-green-500 hover:bg-green-600" onClick={() => updateOrderStatus(order.id, OrderStatus.ACCEPTED)}>
              Accept
            </Button>
            <Button size="sm" variant="danger" onClick={() => updateOrderStatus(order.id, OrderStatus.REJECTED)}>
              Reject
            </Button>
          </div>
        );
      case OrderStatus.ACCEPTED:
        return (
          <Button size="sm" className="bg-blue-500 hover:bg-blue-600" onClick={() => updateOrderStatus(order.id, OrderStatus.OUT_FOR_DELIVERY)}>
            Out for Delivery
          </Button>
        );
      case OrderStatus.OUT_FOR_DELIVERY:
        return (
          <Button size="sm" className="bg-purple-500 hover:bg-purple-600" onClick={() => updateOrderStatus(order.id, OrderStatus.DELIVERED)}>
            Mark Delivered
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-bold text-gray-800">{order.id}</h4>
          <p className="text-sm text-gray-500">{order.customerName}</p>
        </div>
        <span className="text-xs text-gray-500">{order.orderTime.toLocaleTimeString()}</span>
      </div>

      <div className="border-t border-gray-100 my-2"></div>
      
      <ul className="text-sm space-y-1 mb-3">
        {order.items.map(item => (
          <li key={item.id} className="flex justify-between text-gray-600">
            <span>{item.quantity} x {item.name}</span>
            <span>{formatCurrency(item.price * item.quantity)}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-100 my-2"></div>

      <div className="text-sm space-y-1 mb-3 text-gray-700">
          <div className="flex justify-between"><p>Subtotal:</p> <p>{formatCurrency(order.total)}</p></div>
          <div className="flex justify-between"><p>Tax:</p> <p>{formatCurrency(order.tax)}</p></div>
          <div className="flex justify-between"><p>Delivery:</p> <p>{formatCurrency(order.deliveryCharge)}</p></div>
          <div className="flex justify-between font-bold text-base mt-1"><p>Total:</p> <p>{formatCurrency(order.grandTotal)}</p></div>
      </div>
      
      <div className="mt-4 flex justify-end">
        {renderActions()}
      </div>
    </div>
  );
};

export default OrderCard;