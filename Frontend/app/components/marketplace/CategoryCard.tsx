import Link from 'next/link';

interface Category {
  name: string;
  icon?: string;
  count?: number;
  image?: string;
}

export default function CategoryCard({ name, icon, count, image }: Category) {
  // Default icons for common categories
  const getIcon = () => {
    if (icon) return icon;
    
    const icons: { [key: string]: string } = {
      'Electronics': '📱',
      'Fashion': '👗',
      'Home': '🏠',
      'Food': '🍲',
      'Beauty': '💄',
      'Sports': '⚽',
      'Books': '📚',
      'Toys': '🧸',
      'Furniture': '🛋️',
      'Jewelry': '💍',
    };
    
    return icons[name] || '📦';
  };

  return (
    <Link href={`/category/${name.toLowerCase()}`}>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-orange-300 transition group">
        {image ? (
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold text-lg mb-1">{name}</h3>
              {count && <p className="text-sm text-gray-200">{count} products</p>}
            </div>
          </div>
        ) : (
          <div className="p-6 text-center">
            <div className="text-5xl mb-3 group-hover:scale-110 transition">
              {getIcon()}
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
            {count && (
              <p className="text-sm text-gray-500">{count} products</p>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}