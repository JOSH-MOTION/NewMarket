export default function PaymentSummary() {
  return (
    <div className="card">
      <h3 className="font-bold text-lg mb-4">Order Summary</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₦45,000</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>₦2,000</span>
        </div>
        <div className="border-t pt-2 font-bold flex justify-between">
          <span>Total</span>
          <span>₦47,000</span>
        </div>
      </div>
      <button className="w-full btn-primary mt-4">Pay with Escrow</button>
    </div>
  );
}