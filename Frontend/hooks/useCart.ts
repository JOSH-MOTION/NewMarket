import useCartStore from '@/store/useCartStore';

export default function useCart() {
  const { items, addItemToCart, removeFromCart, updateQuantity, clearCart } = useCartStore();

  return {
    items,
    addItem: addToCart,
    removeItem: removeFromCart,
    updateQuantity,
    clearCart,
  };
}