import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 h-screen p-4">
      <ul className="space-y-2">
        <li><Link href="/(seller)/dashboard" className="block p-2 hover:bg-gray-200 rounded">Dashboard</Link></li>
        <li><Link href="/(seller)/add-product" className="block p-2 hover:bg-gray-200 rounded">Add Product</Link></li>
      </ul>
    </aside>
  );
}