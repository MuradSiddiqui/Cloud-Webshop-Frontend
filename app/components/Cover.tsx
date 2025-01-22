import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CampaignCover() {
  return (
    <div className="bg-gray-200 rounded-lg flex justify-between px-4 h-64">
      <div className="flex flex-col   justify-center gap-4 w-2/3 ">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold  relative  bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Grab up to 50% off on Selected Products
        </h1>
        <Button className="font-bold p-2 mb-2 w-max ">Buy Now</Button>
      </div>
      <div className="relative w-1/3 h-full">
        <Image src={"/woman.png"} fill alt="Woman" className="object-contain" />
      </div>
    </div>
  );
}
