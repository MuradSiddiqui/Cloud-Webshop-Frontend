import React from "react";
import ProductCard from "./ProductCard";
import { getProducts, getProductsByParams } from "../hooks";

const ProductsGrid = async({searchParams} : {searchParams : any}) => {
  const params = await searchParams;
  console.log("Params",params)
  let productData;
  if(params)
  {
    let str = ""
    if(params.name)
    {
      str+="name=" + params.name
    }
    productData = await getProductsByParams(str);
  }else
     productData = await getProducts();
  return(
    <div className="grid lg:grid-cols-4 gap-x-8 gap-y-16 justify-between grid-cols-2 overflow-hidden items-center " >
     {productData.map((product : any)=><ProductCard name={product.name} description={product.description} price={product.price} image_url={product.image_url} stock={product.stock} id={product.id} category={product.category} key={product.id}/>
     )}
    </div>
  );
};

export default ProductsGrid;
