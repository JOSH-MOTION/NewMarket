'use client';

import ProductCard from './components/marketplace/ProductCard';
import CategoryCard from './components/marketplace/CategoryCard';
import { TrendingUp, Zap, ShieldCheck } from 'lucide-react';

export default function Home() {
  // Sample data - replace with API calls
  const featured = [
    {
      id: '1',
      title: 'Jollof Rice with Grilled Chicken (2 boxes)',
      price: 70,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop',
      seller: {
        name: 'Kitchen by Ama',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ama',
        location: 'Osu, Accra',
      },
      escrowEnabled: true,
    },
    {
      id: '2',
      title: 'Handwoven Kente Scarf - Blue & Gold',
      price: 250,
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&h=500&fit=crop',
      seller: {
        name: 'Adwoa Crafts',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adwoa',
        location: 'Madina, Accra',
      },
      escrowEnabled: true,
    },
    {
      id: '3',
      title: 'Organic Shea Butter 250ml',
      price: 45,
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop',
      seller: {
        name: 'Tamale Naturals',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tamale',
        location: 'East Legon',
      },
      escrowEnabled: true,
    },
    {
      id: '4',
      title: 'Leather Sandals - Handmade Size 42',
      price: 120,
      image: 'https://images.unsplash.com/photo-1603808033587-d2a7f3d7c9d5?w=500&h=500&fit=crop',
      seller: {
        name: 'Kumasi Works',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kumasi',
        location: 'Spintex',
      },
      escrowEnabled: false,
    },
  ];

  const categories = [
    { name: 'Electronics', count: 234 },
    { name: 'Fashion', count: 456 },
    { name: 'Home', count: 189 },
    { name: 'Food', count: 312 },
    { name: 'Beauty', count: 167 },
    { name: 'Sports', count: 98 },
    { name: 'Books', count: 143 },
    { name: 'Toys', count: 87 },
  ];

  return (
    <div className="ml-72">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Shop Local, Stay Safe
          </h1>
          <p className="text-xl mb-8 text-orange-50">
            Buy and sell with confidence using our escrow protection
          </p>
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Escrow Protected</p>
                <p className="text-sm text-orange-100">Your money is safe</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Instant Messaging</p>
                <p className="text-sm text-orange-100">Chat with sellers</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Local Deals</p>
                <p className="text-sm text-orange-100">Support your community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Nearby Deals
              </h2>
              <p className="text-gray-600">Products available near you</p>
            </div>
            <button className="text-orange-600 font-semibold hover:text-orange-700 transition">
              View all →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                name={category.name}
                count={category.count}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How Escrow Works
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our secure escrow system protects both buyers and sellers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Place Order</h3>
              <p className="text-gray-600 text-sm">
                Choose your product and checkout. Your payment is held securely.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Receive Product</h3>
              <p className="text-gray-600 text-sm">
                Seller ships the item. Verify it matches the description.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Release Payment</h3>
              <p className="text-gray-600 text-sm">
                Confirm delivery and we release payment to the seller.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}