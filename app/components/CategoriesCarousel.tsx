import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const CategoriesCarousel = ({categories} : {categories : []}) => {
console.log(categories)
  return (
    <div className="cursor-pointer ">
      <Carousel
        opts={{
          loop: true,
          slidesToScroll: 1,
          startIndex: 0,
          align: "start",
        }}
      >
        <CarouselContent className="">
          {categories.map((category : any) => (
            <CarouselItem
              className="basis-1/2 lg:basis-1/4 "
              key={category.id}
            >
              <Link href={"/list?category=" + category.id} className="group ">
                <div className="h-60 relative">
                  <Image
                    src={category.image_url || "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt="P"
                    fill
                    sizes={"100vw"}
                    className=" object-fill rounded-md group-hover:brightness-75"
                  />
                </div>{" "}
                <p className="capitalize pt-2">{category.name}</p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoriesCarousel;
