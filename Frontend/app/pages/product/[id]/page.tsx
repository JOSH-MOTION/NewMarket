'use client';

import { useState } from 'react';
import { Heart, Share2, ShieldCheck, MapPin, Star, MessageCircle, ShoppingCart, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);

  // Sample product data
  const product = {
    id: '1',
    title: 'Jollof Rice with Grilled Chicken (2 boxes)',
    price: 70,
    description: 'Authentic Ghanaian jollof rice prepared with premium ingredients. Served with perfectly grilled chicken. Each order includes 2 generous portions perfect for sharing or meal prep.',
    images: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=800&fit=crop',
    ],
    category: 'Food & Beverages',
    condition: 'New',
    stock: 12,
    seller: {
      name: 'Kitchen by Ama',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ama',
      location: 'Osu, Accra',
      rating: 4.8,
      reviews: 234,
      responseTime: '10 mins',
      joinedDate: 'January 2024',
    },
    escrowEnabled: true,
    deliveryOptions: ['Pickup', 'Local Delivery', 'Courier'],
    deliveryFee: 15,
    reviews: [
      {
        id: '1',
        user: 'Kwame A.',
        rating: 5,
        comment: 'Best jollof in Accra! Always fresh and delicious.',
        date: '2025-10-20',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kwame',
      },
      {
        id: '2',
        user: 'Esi M.',
        rating: 5,
        comment: 'Amazing taste and generous portions. Highly recommend!',
        date: '2025-10-18',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Esi',
      },
    ],
  };

  const relatedProducts = [
    {
      id: '2',
      title: 'Waakye with Fish',
      price: 45,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop',
    },
    {
      id: '3',
      title: 'Banku with Tilapia',
      price: 55,
      image: 'https://images.unsplash.com/photo-1546069901-efd8fef81ed8?w=300&h=300&fit=crop',
    },
  ];

  return (
    <div className="ml-72 min-h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <span>/</span>
          <Link href={`/category/${product.category}`} className="hover:text-orange-600">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
              <div className="relative aspect-square">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg hover:scale-110 transition"
                >
                  <Heart
                    className={`w-6 h-6 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                  />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === idx ? 'border-orange-600' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.seller.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-medium">{product.seller.rating}</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{product.seller.reviews} reviews</span>
              </div>

              <div className="flex items-baseline gap-4 mb-6">
                <p className="text-4xl font-bold text-gray-900">GHS {product.price}</p>
                {product.escrowEnabled && (
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-lg flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    Escrow Protected
                  </span>
                )}
              </div>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 w-24">Category:</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 w-24">Condition:</span>
                  <span className="font-medium">{product.condition}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 w-24">Stock:</span>
                  <span className="font-medium text-green-600">{product.stock} available</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 w-24">Delivery:</span>
                  <div className="flex gap-2">
                    {product.deliveryOptions.map((option) => (
                      <span key={option} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center gap-3 border border-gray-300 rounded-lg w-fit">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-50 transition"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="font-medium w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="p-3 hover:bg-gray-50 transition"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-4 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <Link
                    href={`/messages?seller=${product.seller.name}`}
                    className="px-6 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </Link>
                  <button className="px-6 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Seller Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mt-6">
              <h3 className="font-bold text-lg mb-4">Seller Information</h3>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={product.seller.avatar}
                  alt={product.seller.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">{product.seller.name}</h4>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {product.seller.location}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{product.seller.rating}</p>
                  <p className="text-xs text-gray-600">Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{product.seller.reviews}</p>
                  <p className="text-xs text-gray-600">Reviews</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">{product.seller.responseTime}</p>
                  <p className="text-xs text-gray-600">Response</p>
                </div>
              </div>
              <Link
                href={`/seller/${product.seller.name}`}
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center font-medium"
              >
                View Shop
              </Link>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-2xl mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-2xl mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-start gap-4">
                  <img
                    src={review.avatar}
                    alt={review.user}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold">{review.user}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="font-bold text-2xl mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <Link key={related.id} href={`/product/${related.id}`}>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                      {related.title}
                    </h3>
                    <p className="text-xl font-bold text-gray-900">
                      GHS {related.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}