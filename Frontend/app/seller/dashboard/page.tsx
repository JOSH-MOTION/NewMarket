'use client';

import { useState } from 'react';
import { TrendingUp, ShoppingBag, DollarSign, Users, Eye, Edit, Trash2, Package } from 'lucide-react';
import Link from 'next/link';

export default function SellerDashboard() {
  const stats = [
    {
      label: 'Total Sales',
      value: 'GHS 12,450',
      change: '+12.5%',
      icon: DollarSign,
      color: 'bg-green-100 text-green-600',
    },
    {
      label: 'Active Listings',
      value: '24',
      change: '+3',
      icon: ShoppingBag,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      label: 'Pending Orders',
      value: '8',
      change: '+2',
      icon: Package,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      label: 'Total Views',
      value: '1,234',
      change: '+23%',
      icon: Eye,
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  const products = [
    {
      id: '1',
      title: 'Jollof Rice with Grilled Chicken',
      price: 70,
      stock: 12,
      views: 456,
      orders: 23,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop',
      status: 'active',
    },
    {
      id: '2',
      title: 'Organic Shea Butter 250ml',
      price: 45,
      stock: 8,
      views: 234,
      orders: 15,
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=100&h=100&fit=crop',
      status: 'active',
    },
    {
      id: '3',
      title: 'Handwoven Kente Scarf',
      price: 250,
      stock: 0,
      views: 189,
      orders: 8,
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=100&h=100&fit=crop',
      status: 'out_of_stock',
    },
  ];

  const recentOrders = [
    {
      id: 'LM-23845',
      customer: 'Kwame A.',
      product: 'Jollof Rice',
      amount: 70,
      status: 'pending',
      date: '2025-10-30',
    },
    {
      id: 'LM-23844',
      customer: 'Ama K.',
      product: 'Shea Butter',
      amount: 45,
      status: 'in_transit',
      date: '2025-10-29',
    },
  ];

  return (
    <div className="ml-72 min-h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Seller Dashboard</h1>
            <p className="text-gray-600">Manage your products and track your sales</p>
          </div>
          <Link
            href="/add-product"
            className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition"
          >
            + Add Product
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-green-600">{stat.change}</span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="font-bold text-xl">Your Products</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {products.map((product) => (
                  <div key={product.id} className="p-6 hover:bg-gray-50 transition">
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">{product.title}</h3>
                            <p className="text-sm text-gray-600">GHS {product.price}</p>
                          </div>
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded ${
                              product.status === 'active'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-red-100 text-red-700'
                            }`}
                          >
                            {product.status === 'active' ? 'Active' : 'Out of Stock'}
                          </span>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-600">
                          <span>Stock: {product.stock}</span>
                          <span>Views: {product.views}</span>
                          <span>Orders: {product.orders}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                          <Edit className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg transition">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="font-bold text-xl">Recent Orders</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <div key={order.id} className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-900">#{order.id}</p>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          order.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {order.status === 'pending' ? 'Pending' : 'In Transit'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{order.customer}</p>
                    <p className="text-sm text-gray-600 mb-2">{order.product}</p>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-gray-900">GHS {order.amount}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-200">
                <Link
                  href="/seller/orders"
                  className="block text-center text-orange-600 font-medium hover:text-orange-700 transition"
                >
                  View All Orders →
                </Link>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mt-6">
              <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link
                  href="/add-product"
                  className="block px-4 py-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition font-medium"
                >
                  + Add New Product
                </Link>
                <Link
                  href="/seller/orders"
                  className="block px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition font-medium"
                >
                  Manage Orders
                </Link>
                <Link
                  href="/seller/analytics"
                  className="block px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition font-medium"
                >
                  View Analytics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}