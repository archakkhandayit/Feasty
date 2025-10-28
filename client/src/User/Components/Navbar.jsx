import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";

const Navbar = ({ handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "My Orders", path: "/myorders" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Branding */}
          <NavLink to="/" className="shrink-0 flex items-center">
            <span className="text-2xl font-bold text-indigo-600 tracking-wider">
              Feast<span className="text-gray-900">y</span>
            </span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:space-x-4 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition duration-150 ease-in-out flex items-center space-x-2 ${
                    isActive
                      ? "bg-indigo-500 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Desktop Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-150 ease-in-out shadow-lg flex items-center space-x-2 ml-4 group"
            >
              <LogOut size={18} className="transition group-hover:scale-110" />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-150"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-xl transform transition duration-300 ease-in-out origin-top-right">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `w-full text-left block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out ${
                    isActive
                      ? "bg-indigo-500 text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-100">
            <div className="flex justify-center px-5 mb-2">
              <button
                onClick={handleLogout}
                className="w-full text-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out shadow-lg flex items-center justify-center space-x-3"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
