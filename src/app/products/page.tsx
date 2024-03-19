import CardComponent from "@/components/Card/CardComponent";
import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from "../loading";

async function fetchProduct() {
  const product = await fetch("https://dummyjson.com/products?limit=100", {
    cache: "no-store"
  });
  const res = await product.json();
  return res.products;
}

export default async function products() {
  const product = await fetchProduct();

  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <Suspense fallback={<LoadingComponent/>} >
        {product?.map((pro: ProductType) => (
          <CardComponent
            thumbnail={pro.thumbnail}
            title={pro.title}
            key={pro.id}
          />
        ))}
        </Suspense>
      </div>
    </>
  );
}