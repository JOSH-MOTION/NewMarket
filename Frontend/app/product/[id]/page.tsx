'use client';

import { useState } from 'react';
import { Heart, Share2, ShieldCheck, MapPin, Star, MessageCircle, ShoppingCart, Truck, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);

  // Sample product data - this would come from your API/database
  const product = {
    id: '2',
    title: 'Handwoven Kente Scarf',
    price: 180,
    description: 'Handwoven Kente scarf made in Bonwire, soft cotton blend. Approx 180cm x 22cm. Vibrant colours, perfect for gifts or ceremonies.',
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&h=800&fit=crop',
    ],
    category: 'Fashion & Accessories',
    condition: 'New',
    stock: 'In stock',
    location: '2.1 km • Accra • Adwoa Crafts',
    seller: {
      name: 'Adwoa Crafts',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adwoa',
      location: 'Madina, Accra',
      rating: 4.9,
      reviews: 187,
      responseTime: '10 mins',
      joinedDate: 'January 2024',
    },
    escrowEnabled: true,
    deliveryOptions: [
      { type: 'Courier (Partner)', price: 'GHS 15 - 30', icon: Truck },
      { type: 'Pickup', location: 'Osu, Accra', icon: MapPin },
    ],
    details: {
      condition: 'New',
      quantity: 'In stock',
      madeIn: 'Ghana',
    },
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <span>/</span>
          <Link href="/explore" className="hover:text-orange-600">Explore</Link>
          <span>/</span>
          <Link href={`/category/${product.category}`} className="hover:text-orange-600">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-4 relative">
              <div className="aspect-[4/3] relative">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Navigation Arrows */}
                {selectedImage > 0 && (
                  <button
                    onClick={() => setSelectedImage(selectedImage - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                )}
                {selectedImage < product.images.length - 1 && (
                  <button
                    onClick={() => setSelectedImage(selectedImage + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 text-white text-sm rounded-full backdrop-blur-sm">
                  {selectedImage + 1} / {product.images.length}
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition ${
                    selectedImage === idx 
                      ? 'border-orange-600 ring-2 ring-orange-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Description Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-6">
              <h2 className="font-bold text-xl mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            {/* Details Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-6">
              <h2 className="font-bold text-xl mb-4">Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Condition</p>
                  <p className="font-medium text-gray-900">{product.details.condition}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Quantity</p>
                  <p className="font-medium text-gray-900">{product.details.quantity}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Category</p>
                  <p className="font-medium text-gray-900">{product.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Made in</p>
                  <p className="font-medium text-gray-900">{product.details.madeIn}</p>
                </div>
              </div>
            </div>

            {/* Delivery & Pickup Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-6">
              <h2 className="font-bold text-xl mb-4">Delivery & Pickup</h2>
              <div className="space-y-4">
                {product.deliveryOptions.map((option, idx) => {
                  const Icon = option.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <div className="p-2 bg-white rounded-lg">
                        <Icon className="w-5 h-5 text-gray-700" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{option.type}</p>
                        <p className="text-sm text-gray-600">
                          {'price' in option ? option.price : option.location}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-900">
                  Pay with MTN MoMo or Vodafone Cash. Funds are held in escrow until you confirm delivery.
                </p>
              </div>

              <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-xl">
                <p className="text-sm text-orange-900">
                  ⚠️ For safety, keep payments on the platform. Report suspicious activity.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info & Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
              {/* Title */}
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{product.location}</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  GHS {product.price}
                </p>
                {product.escrowEnabled && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded-lg">
                    <ShieldCheck className="w-4 h-4" />
                    Escrow available
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4 border border-gray-300 rounded-xl w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-50 transition"
                  >
                    <Minus className="w-5 h-5 text-gray-700" />
                  </button>
                  <span className="font-medium text-lg w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-50 transition"
                  >
                    <Plus className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full px-6 py-4 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20">
                  <ShoppingCart className="w-5 h-5" />
                  Buy with escrow
                </button>
                <button className="w-full px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chat with seller
                </button>
              </div>

              {/* Additional Actions */}
              <div className="flex gap-2 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-2"
                >
                  <Heart
                    className={`w-5 h-5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                  />
                  <span className="font-medium">Save</span>
                </button>
                <button className="flex-1 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Share</span>
                </button>
              </div>

              {/* Seller Card */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-600 uppercase mb-3">
                  Seller Information
                </p>
                <Link 
                  href={`/seller/${product.seller.name}`}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                >
                  <img
                    src={product.seller.avatar}
                    alt={product.seller.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 truncate">
                      {product.seller.name}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate">{product.seller.location}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}