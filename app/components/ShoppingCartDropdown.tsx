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
import RemoveButton from "./RemoveButton";
import CheckoutButton from "./CheckoutButton";

const ShoppingCartDropdown = () => {
  const { getCartItems } = useCartStore();
  const cartData = getCartItems();
  console.log("Cart Data : ", getCartItems());
  let totalPrice = 0;
  cartData.map((x: any) => (totalPrice += x.price * x.quantity));
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
      <DropdownMenuContent className="p-2 min-w-[200px] max-h-max mr-2" side="bottom">
        <DropdownMenuLabel>Shopping Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flexa flex-col gap-4 mb-3">
          {cartData.map((x: any) => {
            return (
              <div key={x.id} className="flex gap-2 mb-2">
               <div className="h-16 w-16 relative"> 
                <Image
                  src={
                    x.image_url ||
                    "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"
                  }
                  alt="Picture"
                  fill
                  className="object-cover rounded-md"
                />
                </div>
                <div className="flex flex-col flex-1 justify-between">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold max-w-[100px]">
                      {x.name}
                    </p>
                    <p className="text-xs ">${x.price}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">Qty : {x.quantity}</p>
                    <RemoveButton id={x.id} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="flex justify-between font-bold text-sm">
            <h3>Subtotal</h3>
            <h3>${totalPrice}</h3>
          </div>

          <p className="text-xs text-gray-500 py-2">
            Shipping and taxes calculated at checkout.
          </p>

          <div className="flex items-center justify-end ">
            {/* <Button variant={"secondary"} size={"sm"}>
              View Cart
            </Button> */}
            <CheckoutButton />
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShoppingCartDropdown;