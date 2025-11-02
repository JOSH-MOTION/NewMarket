import SellerOrdersTable from '@/components/seller/SellerOrdersTable';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function SellerOrdersPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'seller') redirect('/');

  // You can fetch orders server-side here if you want SSR
  // const orders = await fetchOrdersForSeller(session.user.id);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <SellerOrdersTable />
    </div>
  );
}