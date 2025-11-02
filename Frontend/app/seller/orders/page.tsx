'use client';

import SellerOrdersTable from '../../components/seller/SellerOrdersTable';

export default function SellerOrdersPage() {
  return (
    <div className="ml-72 min-h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Seller Orders</h1>
          <p className="text-gray-600">Manage and track all your orders</p>
        </div>

        <SellerOrdersTable />
      </div>
    </div>
  );
}