import Card from '../../components/ui/Card';
import { Package, ShoppingBag, TrendingUp, MessageCircle } from 'lucide-react';

export default function SellerDashboard() {
  const stats = [
    { label: 'Total Sales', value: '₦485,000', icon: ShoppingBag, color: 'text-green-600' },
    { label: 'Active Orders', value: '12', icon: Package, color: 'text-blue-600' },
    { label: 'Growth', value: '+23%', icon: TrendingUp, color: 'text-purple-600' },
    { label: 'Messages', value: '8', icon: MessageCircle, color: 'text-orange-600' },
  ];

  const recentOrders = [
    { id: '#1001', product: 'Wireless Earbuds', status: 'Shipped', amount: '₦25,000' },
    { id: '#1002', product: 'Phone Case', status: 'Pending', amount: '₦3,500' },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Seller Dashboard</h1>

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

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-2">Order ID</th>
                <th className="pb-2">Product</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-2">{order.id}</td>
                  <td className="py-2">{order.product}</td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        order.status === 'Shipped'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}