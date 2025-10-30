import React from 'react';
import { Mail, Lock, User } from 'lucide-react';

export default function SignupAdmin() {
  return (
    // Changed bg-gray-900 to bg-gray-100 and text-white to text-gray-900
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          {/* Changed text-orange-400 to text-orange-600 */}
          <h1 className="text-4xl text-orange-600 font-bold">Feasty</h1>
          {/* Changed text-gray-400 to text-gray-600 */}
          <p className="text-gray-600 mt-2">Create Admin Account</p>
        </div>
        
        <form 
          // Changed bg-gray-800 to bg-white
          className="bg-white shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4"
          onSubmit={(e) => e.preventDefault()} // Prevents page reload
        >
          <div className="mb-6">
            {/* Changed text-gray-300 to text-gray-700 */}
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                {/* Changed text-gray-500 to text-gray-400 */}
                <User className="h-5 w-5 text-gray-400" />
              </span>
              <input
                // Changed bg-gray-700 to bg-gray-50, border-gray-700 to border-gray-300, text-gray-200 to text-gray-900
                className="bg-gray-50 shadow-inner appearance-none border-2 border-gray-300 rounded-lg w-full py-3 pl-10 pr-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                id="name"
                type="text"
                placeholder="Jane Doe"
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-5 w-5 text-gray-400" />
              </span>
              <input
                className="bg-gray-50 shadow-inner appearance-none border-2 border-gray-300 rounded-lg w-full py-3 pl-10 pr-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                id="email"
                type="email"
                placeholder="admin@feasty.com"
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-gray-400" />
              </span>
              <input
                className="bg-gray-50 shadow-inner appearance-none border-2 border-gray-300 rounded-lg w-full py-3 pl-10 pr-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                id="password"
                type="password"
                placeholder="******************"
                required
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <button
              // Button colors are fine as-is, they stand out on light bg
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-200"
              type="submit"
            >
              Create Account
            </button>
          </div>
          
          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?{' '}
            <a
              href="/admin/login"
              // Changed text-orange-400 to text-orange-600 and hover:text-orange-300 to hover:text-orange-500
              className="font-bold text-orange-600 hover:text-orange-500"
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

