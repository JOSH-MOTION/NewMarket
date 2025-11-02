'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, ShoppingCart, MessageCircle, Package, LayoutDashboard, PlusCircle, PlayCircle } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/pages/explore', icon: Search, label: 'Explore' },
    { href: '/pages/cart', icon: ShoppingCart, label: 'Cart' },
    { href: '/pages/messages', icon: MessageCircle, label: 'Messages' },
    { href: '/pages/orders', icon: Package, label: 'Orders' },
  ];

 const sellerLinks = [
    { href: '/seller/dashboard', icon: LayoutDashboard, label: 'Seller Dashboard' },
    { href: '/seller/add-product', icon: PlusCircle, label: 'Add Product' },
    { href: '/seller/orders', icon: Package, label: 'Seller Orders' },
  ];

  const contentLinks = [
    { href: '/stories', icon: PlayCircle, label: 'Product Stories' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <aside className="w-72 bg-[#fff2e6] border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">🏠</span>
          </div>
          <h1 className="font-bold text-xl text-black">Local Market</h1>
          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">Beta</span>
        </Link>

        {/* Main Navigation */}
        <nav className="space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  isActive(link.href)
                    ? 'bg-orange-50 text-orange-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Seller Section */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">Selling</h3>
        <nav className="space-y-1">
          {sellerLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  isActive(link.href)
                    ? 'bg-orange-50 text-orange-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">Content</h3>
        <nav className="space-y-1">
          {contentLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  isActive(link.href)
                    ? 'bg-orange-50 text-orange-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Auth Buttons */}
      <div className="mt-auto p-6 space-y-3">
        <Link
          href="/signup"
          className="block w-full px-4 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition text-center"
        >
          Create Account
        </Link>
        <Link
          href="/signin"
          className="block w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition text-center"
        >
          Sign In
        </Link>
      </div>
    </aside>
  );
}