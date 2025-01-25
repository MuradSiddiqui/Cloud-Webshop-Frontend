import {create} from 'zustand';

// Zustand Store
const useCartStore = create((set, get) => ({
  cartItems: [],

  // Add an item to the cart
  addToCart: (item ) =>
    set((state ) => ({
      cartItems: [...state.cartItems, item],
    })),

  // Remove an item from the cart by id
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item ) => item.id !== id),
    })),

  // Get all cart items (optional: for example usage)
  getCartItems: () => get().cartItems,
}));

export default useCartStore