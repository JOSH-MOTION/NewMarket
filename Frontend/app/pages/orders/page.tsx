'use client';

import { useState } from 'react';
import { Package, Clock, CheckCircle, XCircle, Truck, MessageCircle, Eye } from 'lucide-react';
import Link from 'next/link';

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'completed' | 'cancelled'>('all');

  const orders = [
    {
      id: 'LM-23841',
      date: '2025-10-28',
      status: 'in_transit',
      items: [
        {
          title: 'Jollof Rice with Grilled Chicken (2 boxes)',
          quantity: 2,
          price: 70,
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop',
        },
      ],
      seller: {
        name: 'Kitchen by Ama',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ama',
      },
      total: 155,
      escrowStatus: 'held',
      trackingNumber: 'TRK123456789',
    },
    {
      id: 'LM-23840',
      date: '2025-10-25',
      status: 'completed',
      items: [
        {
          title: 'Handwoven Kente Scarf - Blue & Gold',
          quantity: 1,
          price: 250,
          image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=100&h=100&fit=crop',
        },
      ],
      seller: {
        name: 'Adwoa Crafts',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adwoa',
      },
      total: 270,
      escrowStatus: 'released',
      deliveredDate: '2025-10-27',
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-700',
      in_transit: 'bg-blue-100 text-blue-700',
      completed: 'bg-green-100 text-green-700',
      cancelled: 'bg-red-100 text-red-700',
    };

    const icons = {
      pending: Clock,
      in_transit: Truck,
      completed: CheckCircle,
      cancelled: XCircle,
    };

    const labels = {
      pending: 'Pending',
      in_transit: 'In Transit',
      completed: 'Completed',
      cancelled: 'Cancelled',
    };

    const Icon = icons[status as keyof typeof icons];
    
    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${styles[status as keyof typeof styles]}`}>
        <Icon className="w-4 h-4" />
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const filteredOrders = activeTab === 'all' 
    ? orders 
    : orders.filter(order => {
        if (activeTab === 'pending') return order.status === 'pending' || order.status === 'in_transit';
        if (activeTab === 'completed') return order.status === 'completed';
        if (activeTab === 'cancelled') return order.status === 'cancelled';
        return true;
      });

  return (
    <div className="ml-72 min-h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Orders</h1>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 p-2 mb-6 inline-flex gap-2">
          {(['all', 'pending', 'completed', 'cancelled'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                activeTab === tab
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {/* Order Header */}
              <div className="p-6 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Order Number</p>
                      <p className="font-bold text-lg">#{order.id}</p>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-medium">{new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div>
                      <p className="text-sm text-gray-600">Total</p>
                      <p className="font-bold text-lg">GHS {order.total}</p>
                    </div>
                  </div>
                  {getStatusBadge(order.status)}
                </div>
              </div>

              {/* Order Items */}
              <div className="p-6">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-gray-900">GHS {item.price}</p>
                  </div>
                ))}

                {/* Seller Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200 mb-4">
                  <img
                    src={order.seller.avatar}
                    alt={order.seller.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm text-gray-600">Seller</p>
                    <p className="font-medium">{order.seller.name}</p>
                  </div>
                </div>

                {/* Escrow Status */}
                {order.escrowStatus === 'held' && (
                  <div className="p-4 bg-blue-50 rounded-lg mb-4">
                    <p className="text-sm text-blue-900 font-medium mb-1">
                      💳 Payment held in escrow
                    </p>
                    <p className="text-xs text-blue-700">
                      Funds will be released to seller after you confirm delivery
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  <Link
                    href={`/order/${order.id}`}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center font-medium flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View Details
                  </Link>
                  <Link
                    href={`/messages?seller=${order.seller.name}`}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center font-medium flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contact Seller
                  </Link>
                  {order.status === 'in_transit' && (
                    <button className="flex-1 px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-medium flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Confirm Delivery
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">No orders found</h2>
            <p className="text-gray-600 mb-6">You haven't placed any orders yet</p>
            <Link
              href="/explore"
              className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}