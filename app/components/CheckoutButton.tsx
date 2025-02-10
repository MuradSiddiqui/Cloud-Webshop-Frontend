"use client";
import React, { useState } from "react";
import useCartStore from "../useCartStore";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CheckoutButton = () => {
  const router = useRouter();
  const { getCartItems } = useCartStore();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const checkoutFunc = async () => {
    let isValid = true;

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Stop if any validation fails
    if (!isValid) return;

    const cartItems = await getCartItems();
    if (cartItems.length == 0) return;
    const items = cartItems.map((x: any) => {
      return {
        product: x.id,
        quantity: x.quantity,
      };
    });

    const bodyData = {
      customer_name: `${firstName} ${lastName}`.trim(),
      customer_email: email.trim(),
      address: address.trim(),
      items,
    };

    try {
      const res = await fetch(
        "https://a7f6x2hcc5.execute-api.eu-central-1.amazonaws.com/dev/api/orders/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        }
      );

      const responseData = await res.json();
      if (!res.ok) {
        console.error("Error:", res.status, responseData);
      } else {
        router.push(responseData.checkout_url);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  return (
    <div className="flex gap-8 p-4">
      {/* Left Side Form */}
      <div className="w-1/2 p-4 border rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Enter Your Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {emailError && <p className="text-red-500 text-sm col-span-2">{emailError}</p>}
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded col-span-2"
          />
        </div>
      </div>

      {/* Right Side Checkout Button */}
      <div className="w-1/2 flex items-center justify-center">
        <Button size="sm" onClick={checkoutFunc}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CheckoutButton;