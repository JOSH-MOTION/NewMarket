import Link from 'next/link';
import Button from '../ui/Button';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">LocalMart</Link>
        <div className="flex gap-4 items-center">
          <Link href="/explore">Explore</Link>
          <Link href="/cart">Cart</Link>
          <Button>Login</Button>
        </div>
      </div>
    </nav>
  );
}