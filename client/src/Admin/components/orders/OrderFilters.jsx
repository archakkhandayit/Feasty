import React from 'react';

// Removed OrderFiltersProps interface

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

// Removed : React.FC<OrderFiltersProps>
const OrderFilters = ({ searchTerm, setSearchTerm, dateFilter, setDateFilter }) => {
  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <div className="relative w-full sm:w-1/2 lg:w-1/3">
        <input
          type="text"
          placeholder="Search by Order ID or Customer Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon />
        </div>
      </div>
      <div className="w-full sm:w-auto">
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
    </div>
  );
};

export default OrderFilters;