import Card from '../../components/ui/Card';
import { Users, DollarSign, Package, AlertTriangle } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users, color: 'text-blue-600' },
    { label: 'Revenue', value: '₦2.4M', icon: DollarSign, color: 'text-green-600' },
    { label: 'Active Orders', value: '89', icon: Package, color: 'text-purple-600' },
    { label: 'Disputes', value: '5', icon: AlertTriangle, color: 'text-red-600' },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <p className="text-gray-600">No recent activity.</p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full text-left p-2 hover:bg-gray-100 rounded">View All Users</button>
            <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Manage Disputes</button>
          </div>
        </Card>
      </div>
    </div>
  );
}