import PaymentSummary from '@/components/escrow/PaymentSummary';

export default function Checkout() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>{/* Address Form */}</div>
        <PaymentSummary />
      </div>
    </div>
  );
}