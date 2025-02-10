import React from "react";
import ProductCard from "./ProductCard";
import { getProducts, getProductsByParams } from "../hooks";

const ProductsGrid = async ({
  searchParams,
  limit,
}: {
  searchParams?: any;
  limit?: number;
}) => {
  const params = await searchParams;
  let productData;
  if (params) {
    let str = "";
    if (params.name) {
      if (params.name.length == 0) {
        delete params.name;
      }
      str += "name=" + params.name;
    }

    if (params.min) {
      if (str.length) str += "&";
      if (params.min.length == 0) {
        delete params.min;
      }
      str += "min_price=" + params.min;
    }
    if (params.max) {
      if (str.length) str += "&";
      if (params.max.length == 0) {
        delete params.max;
      }
      str += "max_price=" + params.max;
    }
    if (params.category) {
      if (str.length) str += "&";
      if (params.category.length == 0) {
        delete params.category;
      }
      str += "category=" + params.category;
    }
    productData = await getProductsByParams(str);
    if (params.Sort) {
      if (params.Sort == "price_low") {
        productData = productData.sort((a: any, b: any) => a.price - b.price);
      } else if (params.Sort == "price_high") {
        productData = productData.sort((a: any, b: any) => b.price - a.price);
      }
    }
  } else productData = await getProducts();
  if (limit) productData = productData.filter((x: any, i: number) => i < 4);
  return (
    <div className="grid lg:grid-cols-4 gap-x-8 gap-y-16 justify-between grid-cols-2 overflow-hidden items-center ">
      {productData.length ? (
        productData.map((product: any) => (
          <ProductCard
            name={product.name}
            description={product.description}
            price={product.price}
            image_url={product.image_url}
            stock={product.stock}
            id={product.id}
            category={product.category}
            key={product.id}
          />
        ))
      ) : (
        <>No Products Found</>
      )}
    </div>
  );
};

export default ProductsGrid;