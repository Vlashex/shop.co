'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SuggestedProducts from "@/features/SuggestedProducts";
import Rewiews from "../components/Rewiews";
import { getProductById } from "@/lib/actions/getProductsById";
import AddToCart from "../components/AddToCart";
import Stars from "@/features/Stars";
import { ICard } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";

export default function Protuct() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const prodId = Number(searchParams.get('prodId')) || 1;
  const [productData, setProductData] = useState<ICard | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(prodId);
      if (data === null) {
        router.push('/shop');
        return;
      }
      setProductData(data);
      setLoading(false);
    };
    fetchProduct();
  }, [prodId, router]);

  if (loading || !productData) {
    return (
      <main className="max-w-[1240px] mx-auto w-11/12 flex flex-col gap-8">
        <div className="flex items-center justify-center h-96">
          <div className="text-lg">Loading...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-[1240px] mx-auto w-11/12 flex flex-col gap-8">
      <section className="flex justify-between gap-4 max-lg:flex-col pb-4">
        <div className="flex w-1/2 max-lg:w-full max-lg:flex-col-reverse h-max gap-3">
          <div className="flex flex-[23] flex-col max-lg:flex-row gap-3 justify-between">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="flex-1 overflow-y-hidden rounded-[20px] cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <Image
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  width={200}
                  height={200}
                  src={process.env.BACKEND_HOST + productData.images[0]}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="lg:h-full lg:flex-[77] max-lg:w-full max-lg:h-full transition-transform duration-300 hover:scale-[1.02]">
            <Image
              className="w-full h-auto rounded-[20px]"
              width={1200}
              height={1200}
              src={process.env.BACKEND_HOST + productData.images[0]}
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2 max-lg:w-full flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2.5">
            <h1 className="text-[40px] font-semibold">{productData.title}</h1>
            <div className="h-[25px]">
              <Stars rate={productData.rate} />
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-semibold">${productData.price}</h1>
              {productData.previousPrice != productData.price ? (
                <>
                  <h2 className="text-3xl font-semibold text-black text-opacity-30 line-through">
                    ${productData.previousPrice}
                  </h2>
                  <h3 className="text-[#FF3333] bg-[rgba(255,51,51,.1)] rounded-3xl py-1.5 px-3.5">
                    -
                    {Math.round(100 - (productData.price / productData.previousPrice) * 100)}
                    %
                  </h3>
                </>
              ) : null}
            </div>
            <h4 className="text-black text-opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              deleniti est voluptatum autem aspernatur molestias minus sed
              perferendis natus mollitia, ipsum odio nesciunt magni quidem
              voluptate dignissimos quod fugit voluptatibus!
            </h4>
          </div>

          <div className="w-full h-[1px] bg-gray-300" />

          <AddToCart prodId={prodId} />
        </div>
      </section>

      <Rewiews />
      <SuggestedProducts title="You might also like" />
    </main>
  );
}
