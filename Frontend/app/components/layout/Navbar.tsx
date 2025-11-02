'use client';

import { useState } from 'react';
import { Search, Bell, ShoppingCart, MapPin, SlidersHorizontal, User } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [location, setLocation] = useState('Accra');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-6 py-4">
        <div className="flex items-center gap-4">
          {/* Location Selector */}
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full hover:bg-gray-100 transition">
            <MapPin className="w-4 h-4 text-gray-600" />
            <span className="font-medium text-sm">{location}</span>
          </button>

          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products, sellers, categories"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
            />
          </div>

          {/* Filters Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full hover:bg-gray-100 transition">
            <SlidersHorizontal className="w-4 h-4 text-gray-600" />
            <span className="font-medium text-sm">Filters</span>
          </button>

          {/* Action Icons */}
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <Link
              href="/notifications"
              className="p-2 hover:bg-gray-50 rounded-full transition relative"
            >
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-orange-600 rounded-full"></span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="p-2 hover:bg-gray-50 rounded-full transition relative"
            >
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Profile */}
            <Link href="/profile" className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=User"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}