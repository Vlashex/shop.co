import ProductCard from "@/features/ProductCard"

export default function Shop() {

  const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

  return (
    <div className="flex-1">
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-2">
          {
            a.map((index)=>
              <ProductCard key={index}/>
            )
          }
        </div>
    </div>
  )
}
