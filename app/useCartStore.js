import {create} from 'zustand';

// Zustand Store
const useCartStore = create((set, get) => ({
  cartItems: [],

  // Add an item to the cart
  addToCart: (item ) =>{
    const cartData = get().cartItems;
    const alreadyExists = cartData.find(x=>x.id == item.id);
    
    if(!alreadyExists)
    {
      item.quantity = 1  
      set((state ) => ({
            cartItems: [...state.cartItems, item],
          }))
    }
    else
    {
      set((state ) => ({
        
        cartItems: state.cartItems.map((x ) => {
          if(item.id == x.id)
          {
              x.quantity++;
          }
          return x;
      })
      }))
       
    }

    
  },
  // Remove an item from the cart by id
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item ) => item.id !== id),
    })),

  // Get all cart items (optional: for example usage)
  getCartItems: () => get().cartItems,
}));

export default useCartStore