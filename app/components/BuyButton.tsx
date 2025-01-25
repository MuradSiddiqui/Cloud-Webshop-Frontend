'use client'
import React from 'react'
import useCartStore from '../useCartStore';

const BuyButton = ({data } : {data : any}) => {
    const { cartItems, addToCart, removeFromCart, getCartItems } = useCartStore();
    const handleAddItem = () => {

        // const newItem = {
        //   id: data.id, // Generate a random id
        //   name: 'T-shirt',
        //   price: 20,
        // };
        addToCart(data);
      };
      
      // Example: Removing items
      const handleRemoveItem = (id : any) => {
        removeFromCart(id);
      };
  return (
    <div>
        <button className='p-2 bg-blue-500' onClick={handleAddItem}>Buy</button>
    </div>
  )
}

export default BuyButton