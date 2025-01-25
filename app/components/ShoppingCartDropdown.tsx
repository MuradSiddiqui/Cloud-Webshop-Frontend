"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import useCartStore from "../useCartStore";

const ShoppingCartDropdown = () => {
  const { getCartItems,removeFromCart } = useCartStore();
  const cartData = getCartItems();
  console.log("Cart Data : ", getCartItems());
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative outline-none">
        <ShoppingCartIcon className="w-4 h-4 cursor-pointer " />

        {cartData.length > 0 && (
          <span className="absolute bottom-2 h-4 w-4 left-1.5 bg-red-500 text-white opacity-90  text-xs rounded-full flex justify-center items-center">
            {cartData.length}
          </span>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 min-w-[200px] mr-2" side="bottom">
        <DropdownMenuLabel>Shopping Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col gap-4 mb-3">
          {cartData.map((x: any) => {
            <div className="flex gap-2">
              <Image
                src={
                 x.images_url || "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"
                }
                alt="Picture"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col flex-1 justify-between">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{x.name}</p>
                  <p className="text-sm ">{x.price}</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">${x.quantity}</p>
                  <p className="text-xs text-blue-500 cursor-pointer" onClick={removeFromCart(x.id)}>Remove</p>
                </div>
              </div>
            </div>;
          })}
        </div>
        <div>
          <div className="flex justify-between font-bold text-sm">
            <h3>Subtotal</h3>
            <h3>$0</h3>
          </div>

          <p className="text-xs text-gray-500 py-2">
            Shipping and taxes calculated at checkout.
          </p>

          <div className="flex items-center justify-between ">
            <Button variant={"secondary"} size={"sm"}>
              View Cart
            </Button>
            <Button className="relative" size={"sm"}>
              Checkout
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShoppingCartDropdown;