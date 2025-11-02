// Correct import – points to the **cart** store
import useCartStore from '../store/useChatStore';

export default function useCart() {
  const {
    items,
    addItemToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    syncWithServer,
  } = useCartStore();

  return {
    items,
    addItem: addItemToCart,
    removeItem: removeFromCart,
    updateQuantity,
    clearCart,
    syncWithServer,
  };
}