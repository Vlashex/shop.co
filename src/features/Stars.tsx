import Image from "next/image"
import star from '@/../public/Star.svg'
import halfStar from '@/../public/half-star.svg'

export default function Stars({rate}:{rate:number}){

  let a:number[] = []
  for (let i=0; i<Math.round(rate-0.1); i++) {
    a = [...a, i]
  }

  return(
    <div className="flex h-full justify-start items-center">
      {a.map((value, index)=>
        <Image className="h-full" src={star} alt='' key={index}/>
      )}
      {Math.abs(rate - Math.round(rate)) == 0.5? <Image className="h-full w-auto" src={halfStar} alt=""/>:null}
      <p className="ml-2">
        <span className="font-semibold">{rate}/</span>
        5
      </p>
    </div>
  )
}