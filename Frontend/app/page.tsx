import ProductCard from '@/components/marketplace/ProductCard';
import CategoryCard from '@/components/marketplace/CategoryCard';

export default function Home() {
  const featured = []; // fetch from API
  const categories = ['Electronics', 'Fashion', 'Home', 'Food'];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Nearby Deals</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat} name={cat} />
          ))}
        </div>
      </section>
    </div>
  );
}