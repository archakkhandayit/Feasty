import React, { useState } from 'react'; // Import useState

// --- Icon Components (unchanged) ---
const DashboardIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
);
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
);
const IncomingIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ProcessingIconSide = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const DeliveryIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-2h8a1 1 0 001-1z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2.707a1 1 0 01.707.293l1.414 1.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1" /></svg>;
const CompletedIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SettingsIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

// --- NEW Close Icon ---
const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);


// --- NavItem (unchanged) ---
const NavItem = ({ label, icon, isActive, onClick }) => (
  <li
    onClick={onClick}
    className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors duration-200 ${
      isActive
        ? 'bg-orange-500 text-white shadow-lg'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`}
  >
    {icon}
    <span className="mx-4 font-medium">{label}</span>
  </li>
);

// --- NavHeader (unchanged) ---
const NavHeader = ({ title }) => (
  <li className="px-3 pt-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
    {title}
  </li>
);

// --- UPDATED Sidebar Component ---
const Sidebar = ({ currentPage, setCurrentPage }) => {
  // State to manage mobile menu visibility
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Helper function to set page and close mobile menu
  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileOpen(false); // Close menu on navigation
  };

  return (
    <>
      {/* --- Hamburger Toggle Button (Mobile Only) --- */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-300 bg-gray-800 shadow-lg hover:text-white hover:bg-gray-700 transition-colors"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* --- Mobile Overlay --- */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      {/* --- Sidebar Container --- */}
      <div
        className={`
          flex flex-col w-64 bg-gray-800 text-white
          fixed inset-y-0 left-0 z-40
          transform ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out
          md:static md:translate-x-0 md:flex
        `}
      >
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-2xl uppercase text-orange-400 font-bold">Feasty</h1>
        </div>
        
        {/* Updated NavItems to use handleNavClick */}
        <ul className="flex flex-col py-4 px-2">
          <NavHeader title="Main" />
          <NavItem label="Dashboard" icon={<DashboardIcon />} isActive={currentPage === 'Dashboard'} onClick={() => handleNavClick('Dashboard')} />
          
          <NavHeader title="Orders" />
          <NavItem label="Incoming" icon={<IncomingIcon />} isActive={currentPage === 'Incoming'} onClick={() => handleNavClick('Incoming')} />
          <NavItem label="Processing" icon={<ProcessingIconSide />} isActive={currentPage === 'Processing'} onClick={() => handleNavClick('Processing')} />
          <NavItem label="Out for Delivery" icon={<DeliveryIcon />} isActive={currentPage === 'Out for Delivery'} onClick={() => handleNavClick('Out for Delivery')} />
          <NavItem label="Completed" icon={<CompletedIcon />} isActive={currentPage === 'Completed'} onClick={() => handleNavClick('Completed')} />
          
          <NavHeader title="Management" />
          <NavItem label="Menu" icon={<MenuIcon />} isActive={currentPage === 'Menu'} onClick={() => handleNavClick('Menu')} />
          <NavItem label="Settings" icon={<SettingsIcon />} isActive={currentPage === 'Settings'} onClick={() => handleNavClick('Settings')} />
        </ul>
      </div>
    </>
  );
};

export default Sidebar;