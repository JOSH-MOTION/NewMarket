'use client';

import { useState } from 'react';
import { Trash2, Plus, Minus, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      productId: '1',
      title: 'Jollof Rice with Grilled Chicken (2 boxes)',
      price: 70,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop',
      seller: {
        name: 'Kitchen by Ama',
        location: 'Osu, Accra',
      },
      escrowEnabled: true,
    },
    {
      id: '2',
      productId: '2',
      title: 'Handwoven Kente Scarf - Blue & Gold',
      price: 250,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=200&h=200&fit=crop',
      seller: {
        name: 'Adwoa Crafts',
        location: 'Madina, Accra',
      },
      escrowEnabled: true,
    },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 15;
  const escrowFee = subtotal * 0.025; // 2.5% escrow fee
  const total = subtotal + deliveryFee + escrowFee;

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <Link
              href="/explore"
              className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <Link href={`/product/${item.productId}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <Link
                            href={`/product/${item.productId}`}
                            className="font-semibold text-gray-900 hover:text-orange-600 transition"
                          >
                            {item.title}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">
                            by {item.seller.name} • {item.seller.location}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Escrow Badge */}
                      {item.escrowEnabled && (
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded mb-3">
                          <ShieldCheck className="w-3 h-3" />
                          Escrow Protected
                        </div>
                      )}

                      {/* Price and Quantity */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3 border border-gray-300 rounded-lg text-gray-700">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-gray-50 transition"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-gray-50 transition"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xl font-bold text-gray-900">
                          GHS {(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24 text-gray-700">
                <h2 className="font-bold text-xl mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>GHS {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Delivery Fee</span>
                    <span>GHS {deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span className="flex items-center gap-1">
                      Escrow Fee (2.5%)
                      <ShieldCheck className="w-4 h-4 text-green-600" />
                    </span>
                    <span>GHS {escrowFee.toFixed(2)}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>GHS {total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full px-6 py-4 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition text-center"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </Link>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-900 text-sm mb-1">
                        Escrow Protection
                      </p>
                      <p className="text-xs text-green-700">
                        Your payment is held securely until you confirm delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}