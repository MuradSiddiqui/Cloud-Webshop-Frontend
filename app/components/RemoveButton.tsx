"use client";
import React from "react";
import useCartStore from "../useCartStore";

const RemoveButton = ({ id }: { id: any }) => {
  const { removeFromCart } = useCartStore();
  return (
    <button
      className="text-xs text-blue-500 cursor-pointer"
      onClick={() => removeFromCart(id)}
    >
      Remove
    </button>
  );
};

export default RemoveButton;