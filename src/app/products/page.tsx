import CardComponent from "@/components/Card/CardComponent";
import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from "../loading";
import Link from "next/link";
import { Metadata } from "next";


async function fetchProduct() {
  const product = await fetch("https://dummyjson.com/products?limit=100", {
    cache: "no-store"
  });
  const res = await product.json();
  return res.products;
}

export const metadata: Metadata = {
  icons:{
    icon:"/images/cstad.png"
  },
  title:"Products",
  description:"This is description products",
  keywords:['shop', 'sell'],
};

export default async function products() {
  const product = await fetchProduct();
  
  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <Suspense fallback={<LoadingComponent />} >
          {product?.map((pro: ProductType) => (
            <Link href={`/products/${pro.id}`} key={pro.id}>
              <CardComponent
                thumbnail={pro.thumbnail}
                title={pro.title}
              />
              </Link>
          ))}
        </Suspense>
      </div>
    </>
  );
}