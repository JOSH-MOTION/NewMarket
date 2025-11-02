import Link from 'next/link';

export default function CategoryCard({ name }: { name: string }) {
  return (
    <Link href={`/explore?category=${name}`} className="card text-center">
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-2" />
      <p className="font-medium">{name}</p>
    </Link>
  );
}