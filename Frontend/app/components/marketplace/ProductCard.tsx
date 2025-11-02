import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  seller: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="card">
      <Image src={product.image} alt={product.name} width={300} height={200} className="w-full h-48 object-cover rounded" />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-lg font-bold">₦{product.price}</p>
      <p className="text-sm text-gray-500">by {product.seller}</p>
    </Link>
  );
}