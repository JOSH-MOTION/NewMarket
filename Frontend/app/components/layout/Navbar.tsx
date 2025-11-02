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
       

        {/* Search Bar */}
<div className="flex-1 relative flex items-center gap-2 px-4 py-2 bg-[#fffdf9] border border-gray-200 rounded-full focus-within:ring-2 focus-within:ring-orange-500 focus-within:bg-white">
  {/* Location Button */}
  <button className="flex items-center gap-2 px-3 py-1.5 bg-[#fff2e6] rounded-full hover:bg-orange-100 transition text-black shrink-0">
    <MapPin className="w-4 h-4 text-gray-600" />
    <span className="font-medium text-sm">{location}</span>
  </button>

  {/* Search Icon */}
  <Search className="w-5 h-5 text-gray-400 shrink-0" />

  {/* Search Input */}
  <input
    type="text"
    placeholder="Search products, sellers, categories"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="flex-1 bg-transparent border-none outline-none focus:outline-none px-2 "
  />

  {/* Filters Button */}
  <button className="flex items-center gap-2 px-10 py-1.5 bg-[#fff2e6] rounded-full hover:bg-gray-100 transition shrink-0 text-gray-700">
    <SlidersHorizontal className="w-4 h-4 text-gray-600" />
    <span className="font-medium text-sm">Filters</span>
  </button>
</div>
          

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