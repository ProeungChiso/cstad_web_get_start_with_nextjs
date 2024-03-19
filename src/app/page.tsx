import React, { Suspense } from 'react'
import LoadingComponent from './loading';
import { ProductType } from '@/types/product';
import CardComponent from '@/components/Card/CardComponent';

async function fetchDataFromFakeStoreAPI() {
  const product = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store"
  });
  const res = await product.json();
  return res;
}

async function Home() {
  const product = await fetchDataFromFakeStoreAPI();
  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <Suspense fallback={<LoadingComponent />} >
          {product?.map((pro: ProductType) => (
            <CardComponent
              thumbnail={pro.image}
              title={pro.title}
              key={pro.id}
            />
          ))}
        </Suspense>
      </div>
    </>
  )
}

export default Home