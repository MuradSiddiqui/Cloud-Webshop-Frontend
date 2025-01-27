"use client";
import React from "react";
import useCartStore from "../useCartStore";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CheckoutButton = () => {
    const router = useRouter()
  const { getCartItems } = useCartStore();

  const checkoutFunc = async () => {
    const cartItems = await getCartItems();
    if (cartItems.length == 0) return;
    const items = cartItems.map((x: any) => {
        return {
          product: x.id,
          quantity: x.quantity,
        };
      });
      
      const bodyData = {
        customer_name: "John Doe",
        customer_email: "john.doe@gmail.com",
        address: "123 Main Street",
        items,
      };
      
      console.log("Checkout Items : ", bodyData);
      
      try {
        const res = await fetch("https://a7f6x2hcc5.execute-api.eu-central-1.amazonaws.com/dev/api/orders/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        });
      
        const responseData = await res.json();
        if (!res.ok) {
          console.error("Error:", res.status, responseData);
        } else {
          console.log("Order Response: ", responseData);
          router.push(responseData.checkout_url)
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      }
  };
  return (
    <Button size={"sm"} onClick={checkoutFunc}>
      Checkout
    </Button>
  );
};

export default CheckoutButton;