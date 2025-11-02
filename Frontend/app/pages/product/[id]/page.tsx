import { notFound } from 'next/navigation';
import ProductCard from '@/components/marketplace/ProductCard';

export default async function ProductPage({ params }: { params: { id: string } }) {
  // const product = await fetchProduct(params.id);
  // if (!product) notFound();

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div>{/* Image Gallery */}</div>
        <div>{/* Details, Add to Cart */}</div>
      </div>
    </div>
  );
}