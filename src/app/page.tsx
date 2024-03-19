"use client"
import LoadingComponent from "@/components/Loader/Loading";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const product = await fetch("https://fakestoreapi.com/products");
      const res = await product.json();
      setProduct(res);
    }
    fetchProduct();
  }, []);

  return (
    <Suspense fallback={<LoadingComponent/>}>
        {product?.map((pro: any, index)=>(
          <h3 key={index}>
          {pro?.title}
        </h3>
        ))}
    </Suspense>
  );
}
