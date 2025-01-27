import React from "react";
import { CampaignCover } from "../components/Cover";
import Filter from "../components/Filter";
import ProductsGrid from "../components/ProductsGrid";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const temp = await searchParams;
  console.log("Temp : ", temp);
  return (
    <div className="container-p flex flex-col gap-4">
      <CampaignCover />
      <Filter />
      <ProductsGrid searchParams={searchParams} />
    </div>
  );
};

export default ListPage;