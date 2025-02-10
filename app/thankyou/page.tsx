"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchOrderById } from "../hooks";
import { IOrder } from "../types";


const ThankYou = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const [order, setOrder] = useState<IOrder | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrder = async () => {
      if (!orderId) return;
      try {
        const orderData = await fetchOrderById(orderId);
        setOrder(orderData);
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };

    getOrder();
  }, [orderId]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!order) {
    return <div className="flex justify-center items-center min-h-screen">Order not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto p-6 w-full flex-1 flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-600 mb-2">Thank you for your order!</h1>
          <h3 className="text-xl text-gray-700">Order Details</h3>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-6 flex-1 flex flex-col min-h-0">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-600">Order ID</h4>
              <p>{order.id}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-600">Order Status</h4>
              <p className="capitalize">{order.status}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-600">Order Date</h4>
              <p>{new Date(order.order_date).toLocaleDateString()}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-600">Total Price</h4>
              <p className="text-lg font-semibold">${order.total_price}</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-600 mb-3">Customer Information</h4>
            <p>Name: {order.customer_name}</p>
            <p>Email: {order.customer_email}</p>
            <p>Address: {order.address}</p>
          </div>

          <div className="border-t pt-4 flex-1 flex flex-col min-h-0">
            <h4 className="font-semibold text-gray-600 mb-3">Order Items</h4>
            <div className="overflow-y-auto flex-1">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center py-2 border-b last:border-b-0">
                  <div className="flex-1">
                    <p className="font-medium">{item.product_name}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium">${item.product_price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href="/"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to home page
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;