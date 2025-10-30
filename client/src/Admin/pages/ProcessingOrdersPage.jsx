import React, { useState, useMemo } from 'react';
// Removed 'type { Order }' import
import { OrderStatus } from '../types';
import OrderCard from '../components/orders/OrderCard';
import OrderFilters from '../components/orders/OrderFilters';

// Removed OrdersPageProps interface
// Removed : React.FC<OrdersPageProps>
const ProcessingOrdersPage = ({ allOrders, updateOrderStatus }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const filteredOrders = useMemo(() => {
    return allOrders
      .filter(order => order.status === OrderStatus.ACCEPTED)
      .filter(order => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        return (
          order.id.toLowerCase().includes(lowerSearchTerm) ||
          order.customerName.toLowerCase().includes(lowerSearchTerm)
        );
      })
      .filter(order => {
        if (!dateFilter) return true;
        // 'en-CA' gives 'YYYY-MM-DD' format, matching the date input value
        return order.orderTime.toLocaleDateString('en-CA') === dateFilter;
      });
  }, [allOrders, searchTerm, dateFilter]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Processing Orders</h2>
        <span className="text-lg font-semibold bg-orange-100 text-orange-800 rounded-full px-4 py-1">
          {filteredOrders.length}
        </span>
      </div>
      
      <OrderFilters 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
      />

      {filteredOrders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredOrders.map(order => (
            <OrderCard key={order.id} order={order} updateOrderStatus={updateOrderStatus} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 p-10 bg-white rounded-lg shadow">
          <p className="text-lg">No processing orders match your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProcessingOrdersPage;