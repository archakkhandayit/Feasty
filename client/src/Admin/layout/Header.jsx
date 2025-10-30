import React from 'react';

// Removed HeaderProps interface

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Removed : React.FC<HeaderProps>
const Header = ({ outletName }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md z-10">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800 ml-12 md:ml-0">{outletName}</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600 hidden sm:block">Welcome, Owner!</span>
        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
          <UserIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;