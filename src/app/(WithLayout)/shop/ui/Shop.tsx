import ProductCard from "@/features/ProductCard"
import { prisma } from "../../../../../prisma/prisma"

export default async function Shop({
    searchParams
}: {
    searchParams: {[key: string]: string | string[]}
}) {
  const price = Number(searchParams.price as string) || 999999

  const productData = await prisma.productCard.findMany({where: {
    AND: {
      price: {lt: price},
    }
  }})

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
