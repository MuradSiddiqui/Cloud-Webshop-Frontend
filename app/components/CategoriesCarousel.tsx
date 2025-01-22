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

const CategoriesCarousel = () => {
  const categories = [
    {
      name: "Shirts",
      imgUrl:
        "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Shoes",
      imgUrl:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Accessories",
      imgUrl:
        "https://images.unsplash.com/photo-1506169894395-36397e4aaee4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Home",
      imgUrl:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jeans",
      imgUrl:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jackets",
      imgUrl:
        "https://images.unsplash.com/photo-1649433911119-7cf48b3e8f50?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sweaters",
      imgUrl:
        "https://images.unsplash.com/photo-1731403798951-72ef4996dd41?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Featured",
      imgUrl:
        "https://images.unsplash.com/photo-1549570652-97324981a6fd?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
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
          {categories.map((category) => (
            <CarouselItem
              className="basis-1/2 lg:basis-1/4 "
              key={category.name}
            >
              <Link href={"/"} className="group ">
                <div className="h-60 relative">
                  <Image
                    src={category.imgUrl}
                    alt="P"
                    fill
                    sizes={"100vw"}
                    className=" object-cover rounded-md group-hover:brightness-75"
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
