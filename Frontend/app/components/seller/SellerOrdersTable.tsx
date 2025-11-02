'use client';

import { useState } from 'react';
import { Package, Clock, CheckCircle, XCircle, Truck, MessageCircle, Eye } from 'lucide-react';
import Link from 'next/link';

interface Order {
  id: string;
  date: string;
  status: 'pending' | 'in_transit' | 'completed' | 'cancelled';
  customer: {
    name: string;
    avatar: string;
  };
  items: {
    title: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  escrowStatus: 'held' | 'released';
}

export default function SellerOrdersTable() {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'completed' | 'cancelled'>('all');

  const orders: Order[] = [
    {
      id: 'LM-23845',
      date: '2025-10-30',
      status: 'pending',
      customer: {
        name: 'Kwame A.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kwame',
      },
      items: [
        {
          title: 'Jollof Rice with Grilled Chicken',
          quantity: 2,
          price: 70,
        },
      ],
      total: 140,
      escrowStatus: 'held',
    },
    {
      id: 'LM-23844',
      date: '2025-10-29',
      status: 'in_transit',
      customer: {
        name: 'Ama K.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ama',
      },
      items: [
        {
          title: 'Organic Shea Butter 250ml',
          quantity: 1,
          price: 45,
        },
      ],
      total: 45,
      escrowStatus: 'held',
    },
    {
      id: 'LM-23843',
      date: '2025-10-27',
      status: 'completed',
      customer: {
        name: 'Kofi M.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kofi',
      },
      items: [
        {
          title: 'Handwoven Kente Scarf',
          quantity: 1,
          price: 250,
        },
      ],
      total: 250,
      escrowStatus: 'released',
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
        if (activeTab === 'pending') return order.status === 'pending';
        if (activeTab === 'completed') return order.status === 'completed';
        if (activeTab === 'cancelled') return order.status === 'cancelled';
        return true;
      });

  return (
    <div>
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

            {/* Order Details */}
            <div className="p-6">
              {/* Customer Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={order.customer.avatar}
                  alt={order.customer.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm text-gray-600">Customer</p>
                  <p className="font-medium">{order.customer.name}</p>
                </div>
              </div>

              {/* Order Items */}
              <div className="mb-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-gray-900">GHS {item.price}</p>
                  </div>
                ))}
              </div>

              {/* Escrow Status */}
              {order.escrowStatus === 'held' && (
                <div className="p-4 bg-blue-50 rounded-lg mb-4">
                  <p className="text-sm text-blue-900 font-medium mb-1">
                    💳 Payment held in escrow
                  </p>
                  <p className="text-xs text-blue-700">
                    Funds will be released after customer confirms delivery
                  </p>
                </div>
              )}

              {order.escrowStatus === 'released' && (
                <div className="p-4 bg-green-50 rounded-lg mb-4">
                  <p className="text-sm text-green-900 font-medium">
                    ✅ Payment released to your account
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <Link
                  href={`/seller/order/${order.id}`}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center font-medium flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </Link>
                <Link
                  href={`/messages?customer=${order.customer.name}`}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center font-medium flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact Customer
                </Link>
                {order.status === 'pending' && (
                  <button className="flex-1 px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-medium flex items-center justify-center gap-2">
                    <Truck className="w-4 h-4" />
                    Mark as Shipped
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
          <p className="text-gray-600">You don't have any {activeTab} orders yet</p>
        </div>
      )}
    </div>
  );
}