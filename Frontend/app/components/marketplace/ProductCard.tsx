import Link from 'next/link';
import { MapPin, ShieldCheck, Heart } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  seller: {
    name: string;
    avatar: string;
    location: string;
  };
  escrowEnabled: boolean;
  rating?: number;
  reviews?: number;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition group">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          
          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorited(!isFavorited);
            }}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'
              }`}
            />
          </button>

          {/* Escrow Badge */}
          {product.escrowEnabled && (
            <div className="absolute top-3 left-3 px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-md flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              Escrow
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition">
            {product.title}
          </h3>

          <div className="flex items-baseline gap-2 mb-3">
            <p className="text-2xl font-bold text-gray-900">
              GHS {product.price.toLocaleString()}
            </p>
          </div>

          {/* Seller Info */}
          <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
            <img
              src={product.seller.avatar}
              alt={product.seller.name}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {product.seller.name}
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <MapPin className="w-3 h-3" />
                <span>{product.seller.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}