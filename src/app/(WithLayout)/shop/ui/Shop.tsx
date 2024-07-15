import ProductCard from "@/features/ProductCard"
import { prisma } from "../../../../../prisma/prisma"

export default async function Shop() {

  const productData = await prisma.productCard.findMany()

  return (
    <div className="flex-1">
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-y-8 justify-between">
          {
            productData.map((value)=>
              <ProductCard {...value} key={value.id}/>
            )
          }
        </div>
    </div>
  )
}
