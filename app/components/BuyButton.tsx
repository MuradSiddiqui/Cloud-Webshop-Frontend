"use client";
import React from "react";
import useCartStore from "../useCartStore";
import { Button } from "@/components/ui/button";

const BuyButton = ({ data }: { data: any }) => {
  const stocks= data?.stocks.quantity
  const { cartItems, addToCart, removeFromCart, getCartItems } = useCartStore();
  const handleAddItem = async () => {
    const cart = await getCartItems();

    addToCart(data);
  };

  return (
    <div>
      <Button disabled={stocks<=0?true:false} size={"sm"} onClick={handleAddItem}>
        Buy
      </Button>
    </div>
  );
};

export default BuyButton;