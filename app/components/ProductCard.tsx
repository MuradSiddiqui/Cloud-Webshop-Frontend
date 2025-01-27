import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductDetails {
  id: number;
  name: string;
  description: string;
  price: string;
  category: number;
  image_url: string;
  stock: number;
}

import React from "react";
import BuyButton from "./BuyButton";

const ProductCard = ({
  id,
  name,
  description,
  price,
  category,
  image_url,
  stock,
}: {
  id: number;
  name: string;
  description: string;
  price: string;
  category: number;
  image_url: string;
  stock: { quantity: number };
}) => {
  const data = { id, name, description, price, category, image_url, stock };
  return (
    <div>
      <Link href={"/" + id}>
        <div className="relative h-80 w-full">
          <Image
            src={image_url}
            alt=""
            sizes="25vw"
            fill
            className=" object-cover rounded-md absolute hover:opacity-0 z-10 transition-all duration-200"
          />
          <Image
            src={image_url}
            alt=""
            sizes="25vw"
            fill
            className=" object-cover rounded-md absolute"
          />
        </div>
      </Link>

      <div className="cardbody mt-2 flex flex-col gap-2 ">
        <div className="flex flex-col w-full gap-1">
          <p className="font-bold text-sm line-clamp-1">{name}</p>
          <p className="font-bold text-sm">${price}</p>
        </div>
        <p className="text-xs text-gray-500 mb-2 break-all line-clamp-1 overflow-hidden">
          {description}
        </p>
        <p className="text-xs  pb-2 break-all">Stock : {stock?.quantity}</p>

        <BuyButton data={data} />
      </div>
    </div>
  );
};

export default ProductCard;