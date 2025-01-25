import Image from "next/image";
import Header from "./components/Header";
import ProductsGrid from "./components/ProductsGrid";
// import { CoverDemo } from "./components/Cover";
import { Slider } from "./components/Slider";
import CategoriesCarousel from "./components/CategoriesCarousel";
import { getCategories, getProducts } from "./hooks";


export default async function Home() {
    const productData = await getProducts();
    const categories = await getCategories();
    // .then((res) => res.json())
    // .then((data) => {
    //   // do something with data
    // })
    // .catch((rejected) => {
    //   console.log(rejected);
    // });

  return (
    <div>
      <Slider />
      <div className="container-p ">
        <div className="mt-20">
          <h1 className="text-2xl cursor-default">Featured Products</h1>
          <ProductsGrid />
        </div>
        <div className="mt-20">
          <h1 className="text-2xl cursor-default">Categories</h1>
          <CategoriesCarousel categories = {categories} />
        </div>
        <div className="mt-20">
          <h1 className="text-2xl cursor-default">New Products</h1>
          <ProductsGrid />
        </div>
      </div>
    </div>
  );
}