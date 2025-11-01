import React, { useState, useCallback } from 'react';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import MenuPage from './pages/MenuPage';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';
import IncomingOrdersPage from './pages/IncomingOrdersPage';
import ProcessingOrdersPage from './pages/ProcessingOrdersPage';
import OutForDeliveryOrdersPage from './pages/OutForDeliveryOrdersPage';
import CompletedOrdersPage from './pages/CompletedOrdersPage';
import { useMockData } from './hooks/useMockData';
// We no longer need: import type { Page } from './types';

const Admin = () => {
  // Removed the <Page> type annotation
  const [currentPage, setCurrentPage] = useState('Dashboard');
  const { 
    orders, 
    menuItems,
    outletInfo,
    updateOrderStatus, 
    addMenuItem, 
    updateMenuItem, 
    deleteMenuItem,
    updateOutletInfo
  } = useMockData();

  const renderPage = useCallback(() => {
    switch (currentPage) {
      case 'Dashboard':
        return <DashboardPage orders={orders} menuItems={menuItems} />;
      case 'Incoming':
        return <IncomingOrdersPage allOrders={orders} updateOrderStatus={updateOrderStatus} />;
      case 'Processing':
        return <ProcessingOrdersPage allOrders={orders} updateOrderStatus={updateOrderStatus} />;
      case 'Out for Delivery':
        return <OutForDeliveryOrdersPage allOrders={orders} updateOrderStatus={updateOrderStatus} />;
      case 'Completed':
        return <CompletedOrdersPage allOrders={orders} updateOrderStatus={updateOrderStatus} />;
      case 'Menu':
        return (
          <MenuPage 
            menuItems={menuItems}
            onAddMenuItem={addMenuItem}
            onUpdateMenuItem={updateMenuItem}
            onDeleteMenuItem={deleteMenuItem}
          />
        );
      case 'Settings':
        return <SettingsPage outletInfo={outletInfo} onSave={updateOutletInfo} />;
      default:
        return <DashboardPage orders={orders} menuItems={menuItems} />;
    }
  }, [currentPage, orders, menuItems, outletInfo, updateOrderStatus, addMenuItem, updateMenuItem, deleteMenuItem, updateOutletInfo]);

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header outletName={outletInfo.name} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-6 lg:p-8">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default Admin;