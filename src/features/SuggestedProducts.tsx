"use client";
import { Button } from '@/components/ui/button'
import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import { ICard } from '@/lib/types'
import { getProductsAction } from '@/app/actions/products';

export default function SuggestedProducts({title}: {title: string}) {

  const [productData, setProductData] = useState<ICard[]>([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState<number>(4);

  const randomValue = useMemo(() => Math.random() * 100 % 11, []);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductsAction(randomValue, limit) || [];
      if (data === null) {
        return;
      }
      setProductData(data);
      setLoading(false);
    };
    fetchProduct();
  }, [limit]);

  const toggleLimit = () => {
    setLimit(prevLimit => (prevLimit === 4 ? 12 : 4));
  };

  return (
    <section className="max-w-[1240px] w-full mx-auto my-20 flex flex-col items-center">
      <h1 className="text-5xl text-center my-12">{title}</h1>
      
      {/* Крутилка */}
      {loading ? (
        <div className="flex justify-center items-center w-full h-96">
          <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-solid border-gray-200 rounded-full border-t-transparent" />
        </div>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:justify-between justify-evenly justify-items-center w-full overflow-y-visible max-md:justify-between">
          {productData.map((value, index) => (
            <ProductCard {...value} key={index} />
          ))}
        </div>
      )}
      
      <div className="transition-transform duration-300 hover:scale-105 active:scale-95">
        <Button 
          onClick={toggleLimit} 
          variant="outline" 
          className="px-20 py-4 rounded-3xl mt-10 transition-all duration-300 hover:shadow-lg"
        >
          {limit === 4 ? "View All" : "View Less"}
        </Button>
      </div>
    </section>
  );
}
