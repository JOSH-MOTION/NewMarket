import DisputesTable from '@/components/admin/DisputesTable';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function DisputesPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'admin') redirect('/');

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dispute Resolution</h1>
      <DisputesTable />
    </div>
  );
}