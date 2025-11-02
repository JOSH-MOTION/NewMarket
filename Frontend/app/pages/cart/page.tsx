import useCart from '@/hooks/useCart';
import Button from '@/components/ui/Button';

export default function Cart() {
  const { items, removeItem, updateQuantity } = useCart();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div>
                <h3>{item.name}</h3>
                <p>₦{item.price}</p>
              </div>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, +e.target.value)}
                className="w-16 mx-4"
              />
              <Button onClick={() => removeItem(item.id)} variant="danger">
                Remove
              </Button>
            </div>
          ))}
          <Button href="/checkout" className="mt-6">
            Proceed to Checkout
          </Button>
        </>
      )}
    </div>
  );
}