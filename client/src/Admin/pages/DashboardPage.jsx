import React from 'react';
// Removed 'type { Order, MenuItem }' import
import { OrderStatus } from '../types';

// Removed DashboardPageProps interface

// Removed : React.FC<{...}>
const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
    <div className={`rounded-full p-3 ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const OrdersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>;
const RevenueIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>;
const HoldingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H4a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;

// Removed : React.FC<DashboardPageProps>
const DashboardPage = ({ orders, menuItems }) => {
  const totalRevenue = orders
    .filter(o => o.status === OrderStatus.DELIVERED)
    .reduce((sum, o) => sum + o.grandTotal, 0)
    .toFixed(2);
    
  const holdingRevenue = orders
    .filter(o => o.status === OrderStatus.ACCEPTED || o.status === OrderStatus.OUT_FOR_DELIVERY)
    .reduce((sum, o) => sum + o.grandTotal, 0)
    .toFixed(2);

  return (
    <div className="container mx-auto">
       <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Orders" value={orders.length} icon={<OrdersIcon />} color="bg-blue-500" />
        <StatCard title="Total Revenue" value={`$${totalRevenue}`} icon={<RevenueIcon />} color="bg-purple-500" />
        <StatCard title="Holding Revenue" value={`$${holdingRevenue}`} icon={<HoldingIcon />} color="bg-yellow-500" />
        <StatCard title="Total Menu Items" value={menuItems.length} icon={<MenuIcon />} color="bg-green-500" />
      </div>
    </div>
  );
};

export default DashboardPage;