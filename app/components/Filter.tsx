"use client";

import React, { useEffect, useState } from "react";



import {

  Select,

  SelectContent,

  SelectItem,

  SelectTrigger,

  SelectValue,

} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { usePathname, useRouter, useSearchParams } from "next/navigation";



type FilterOptions = {

  name: string;

  choices: string[];

};

const Filter = () => {

  // const productData =

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  let min = params.get("min") || 0;

  let max = params.get("max") || 0;



  const handleFilterUpdate = (name: string, value: string) => {

    if (value == "null") {

      params.delete(name);

    } else params.set(name, value);

    replace(pathname + "?" + params.toString());

  };

  // console.log("Search Params : ", searchParams);

  return (

    <div className="flex gap-x-4">

      <Input

        type="number"

        name="min"

        min={0}

        className="w-28 h-8"

        placeholder="Min value"

        onChange={(e) => {

          handleFilterUpdate("min", e.target.value);

        }}

      />

      <Input

        type="number"

        name="max"

        min={0}

        onChange={(e) => {

          handleFilterUpdate("max", e.target.value);

        }}

        className="w-28 h-8"

        placeholder="Max value"

      />



      <Select

        onValueChange={(value) => {

          if (value == "clear") handleFilterUpdate("Sort", "");

          else handleFilterUpdate("Sort", value);

        }}

        defaultValue={searchParams.get("Sort") || undefined}

      >

        <SelectTrigger className="w-24 h-8">

          <SelectValue placeholder="Sort By" />

        </SelectTrigger>

        <SelectContent>

          <SelectItem value="price_low">Price (Low to High)</SelectItem>

          <SelectItem value="price_high">Price (High to Low)</SelectItem>

          <SelectItem value="clear">Clear</SelectItem>

        </SelectContent>

      </Select>

    </div>

  );

};



export default Filter;