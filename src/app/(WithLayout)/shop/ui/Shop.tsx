import ProductCard from "@/features/ProductCard"
import { getProducts } from "@/lib/actions/getProducts"
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Shop({
    searchParams
}: {
    searchParams: {[key: string]: string | string[] | undefined} & {"page":number}
}) {
  const {page} = searchParams

  const productData = await getProducts(0 + 10*((page || 1)-1), 20) || [];

  //categorys, price, colors, sizes, styles

  return (
    <div className="flex-1">
        <div className="grid grid-cols-4 max-[1310px]:grid-cols-3 max-[980px]:grid-cols-2 max-[650px]:grid-cols-1 justify-items-center gap-y-8 justify-between">
          {
            productData.length > 0?
            productData.map((value)=>
              <ProductCard {...value} key={value.id}/>
            )
            :null
          }
        </div>

        <div className="flex justify-between mt-8">
          <Link className={
            "text-xl"
          } href={page<=1?"":`/shop?page=${Number(page)-1}`}>prev page</Link>
          <h1>{page}</h1>
          <Link className={
            "text-xl"
          } href={productData.length<20?"":`/shop?page=${(page!=undefined?Number(page)+1:1)}`}>next page</Link>
        </div>
    </div>
  )
}
//&categorys=${categorys || 'all'}&price=${price || 'all'}&colors=${colors || 'all'}&sizes=${sizes || 'all'}&styles=${styles || 'all'}