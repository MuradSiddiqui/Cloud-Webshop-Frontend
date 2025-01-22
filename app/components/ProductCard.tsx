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
  id: number,name : string,description : string,price: string,category:number,image_url:string,stock : number
}

import React from "react";

const ProductCard = ({
  id,name,description,price,category,image_url,stock
}: {
  id: number,name : string,description : string,price: string,category:number,image_url:string,stock : number
}) => {
 
  return (
    <div>
      <Link href={"/"+id}>
        <div className="relative h-80 w-full">
          <Image
            src={
            image_url}
            alt=""
            sizes="25vw"
            fill
            className=" object-cover rounded-md absolute hover:opacity-0 z-10 transition-all duration-200"
          />
          <Image
            src={
           image_url }
            alt=""
            sizes="25vw"
            fill
            className=" object-cover rounded-md absolute"
          />
        </div>
      </Link>

      <div className="cardbody mt-2">
        <div className="flex w-full justify-between items-center">
          <p className="font-bold text-sm">{name}</p>
          <p className="font-bold text-sm">${price}</p>
        </div>
        <p className="text-xs text-gray-500 pb-2">
          {description}
        </p>
        <Button
          variant={"outline"}
          size={"sm"}
          className="hover:bg-primary hover:text-background rounded-2xl font-semibold text-sm"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
