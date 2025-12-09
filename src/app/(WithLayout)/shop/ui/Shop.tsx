'use client'
import ProductCard from "@/features/ProductCard"
import { getProductsAction } from "@/app/actions/products"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Shop() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const [productData, setProductData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log(page, 'page')
      setLoading(true);
      const data = await getProductsAction(0 + 10*((page || 1)-1), 20) || [];
      console.log(data, 'data')
      setProductData(data);
      setLoading(false);
    };
    fetchProducts();
  }, [page]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center h-96">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex-1">
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-y-8 justify-between">
          {
            productData.length > 0?
            productData.map((value)=>
              <ProductCard {...value} key={value.id}/>
            )
            :null
          }
        </div>

        <div className="flex justify-between mt-8 items-center">
          <div className="transition-transform duration-300 hover:scale-105 active:scale-95">
            <Link
              className="text-xl transition-colors duration-300 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              href={page<=1?"":`/shop?page=${Number(page)-1}`}
            >
              prev page
            </Link>
          </div>
          <h1 className="text-xl font-semibold">{page}</h1>
          <div className="transition-transform duration-300 hover:scale-105 active:scale-95">
            <Link
              className="text-xl transition-colors duration-300 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              href={productData.length<20?"":`/shop?page=${(page!=undefined?Number(page)+1:1)}`}
            >
              next page
            </Link>
          </div>
        </div>
    </div>
  )
}
//&categorys=${categorys || 'all'}&price=${price || 'all'}&colors=${colors || 'all'}&sizes=${sizes || 'all'}&styles=${styles || 'all'}