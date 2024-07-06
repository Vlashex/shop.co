import Image from "next/image";

import bgMain from '@/../public/bg-main.png'
import vers from '@/../public/versace.png'
import zara from '@/../public/zara.png'
import gucci from '@/../public/gucci.png'
import prada from '@/../public/prada.png'
import calvin from '@/../public/calvin klein.png'

import cardImg from '@/../public/Frame 32.png'

import dressCodeImg1 from '@/../public/dress-code-1.png'
import dressCodeImg2 from '@/../public/dress-code-2.png'
import dressCodeImg3 from '@/../public/dress-code-3.png'
import dressCodeImg4 from '@/../public/dress-code-4.png'

import check from '@/../public/check.svg'
import star from '@/../public/Star.svg'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {

  const a = [0,1,2,3]

  return (
    <>
    <section className="w-fill bg-[#F2F0F1]">
      <div className="flex justify-center items-center max-w-[1440px] mx-auto">
        <div className="flex flex-col max-w-[630px] gap-8 p-24">
          <h1 className="max-w-[557px] font-semibold text-6xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <h3 className="text-base">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h3>
          <Button className="bg-black text-white w-fit px-16 py-4 rounded-3xl">Shop Now</Button>
          <div className="flex gap-x-8">
            <div className="w-fit">
              <h1 className="text-4xl font-semibold">200+</h1>
              <h2 className="text-gray-400">International Brands</h2>
            </div>
            <div className="w-px h-fill bg-gray-300" />
            <div className="w-fit">
              <h1 className="text-4xl font-semibold">2,000+</h1>
              <h2 className="text-gray-400">High-Quality Products</h2>
            </div>
            <div className="w-px h-fill bg-gray-300" />
            <div className="w-fit">
              <h1 className="text-4xl font-semibold">30,000+</h1>
              <h2 className="text-gray-400">Happy Customers</h2>
            </div>
          </div>
        </div>
        <div className="flex-1 self-end">
          <Image width={700} src={bgMain} alt=""/>
        </div>
      </div>
    </section>
    <section className="w-full bg-black h-32 items-center flex">
      <nav className="max-w-[1240px] w-full mx-auto flex justify-between items-center">
        <Link href='category?brand=' className="max-h-8.5"><Image src={vers} alt="versace"/></Link>
        <Link href='category?brand=' className="max-h-8.5"><Image src={zara} alt="zara"/></Link>
        <Link href='category?brand=' className="max-h-8.5"><Image src={gucci} alt="gucci"/></Link>
        <Link href='category?brand=' className="max-h-8.5"><Image src={prada} alt="prada"/></Link>
        <Link href='category?brand=' className="max-h-8.5"><Image src={calvin} alt="calvin klein"/></Link>
      </nav>
    </section>
    <section className="max-w-[1240px] mx-auto my-20 flex flex-col items-center">
      <h1 className="text-5xl text-center my-12">NEW ARRIVALS</h1>
      <div className="flex justify-between w-full">
        {
          a.map((value, index)=>
            <Card className="w-[295px] h-[405px] p-0 border-0">
              <CardHeader>
                <Image src={cardImg} alt=""/>
              </CardHeader>
              <CardContent>
                <h1 className="text-xl capitalize font-semibold overflow-x-hidden text-nowrap">T-shirt With Tape Details</h1>
                //stars
                <div className="flex gap-2 items-center">
                  <h1 className="text-xl">$120</h1>
                  <h1 className="text-xl line-through text-gray-400">$120</h1>
                  <h1 className="text-sm text-red-500 bg-red-100 py-1 px-3 rounded-xl">-0%</h1>
                </div>
              </CardContent>
            </Card>
          )
        }
      </div>
      <Button variant='outline' className="px-20 py-4 rounded-3xl mt-10">View All</Button>
    </section>
    <section className="max-w-[1240px] mx-auto my-20 flex flex-col items-center">
      <h1 className="text-5xl text-center my-12">top selling</h1>
      <div className="flex justify-between w-full">
        {
          a.map((value, index)=>
            <Card className="w-[295px] h-[405px] p-0 border-0">
              <CardHeader>
                <Image src={cardImg} alt=""/>
              </CardHeader>
              <CardContent>
                <h1 className="text-xl capitalize font-semibold overflow-x-hidden text-nowrap">T-shirt With Tape Details</h1>
                //stars
                <div className="flex gap-2 items-center">
                  <h1 className="text-xl">$120</h1>
                  <h1 className="text-xl line-through text-gray-400">$120</h1>
                  <h1 className="text-sm text-red-500 bg-red-100 py-1 px-3 rounded-xl">-0%</h1>
                </div>
              </CardContent>
            </Card>
          )
        }
      </div>
      <Button variant='outline' className="px-20 py-4 rounded-3xl mt-10">View All</Button>
    </section>
    <section className="bg-neutral-100 rounded-3xl max-w-[1240px] p-16 mx-auto">
      <h1 className="mx-auto text-center text-5xl mb-16">BROWSE BY dress STYLE</h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-4">
          <Link href='category?style=casual' className="w-1/3 overflow-hidden rounded-3xl">
            <Card className="flex h-[289px] justify-end relative bg-white border-0">
              <h1 className="text-4xl absolute top-6 left-6">Casual</h1>
              <Image src={dressCodeImg1} alt="dressCodeImg1"/>
            </Card>
          </Link>
          <Link href='category?style=formal' className="w-2/3 overflow-hidden rounded-3xl">
            <Card className="flex h-[289px] justify-end relative bg-white border-0">
              <h1 className="text-4xl absolute top-6 left-6">Formal</h1>
              <Image src={dressCodeImg2} alt="dressCodeImg2"/>
            </Card>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href='category?style=party' className="w-2/3 overflow-hidden rounded-3xl">
            <Card className="flex h-[289px] justify-end relative bg-white border-0">
              <h1 className="text-4xl absolute top-6 left-6">Party</h1>
              <Image src={dressCodeImg3} alt="dressCodeImg3"/>
            </Card>
          </Link>
          <Link href='category?style=gym' className="w-1/3 overflow-hidden rounded-3xl">
            <Card className="flex h-[289px] justify-end relative bg-white border-0">
              <h1 className="text-4xl absolute top-6 left-6">Gym</h1>
              <Image src={dressCodeImg4} alt="dressCodeImg4"/>
            </Card>
          </Link>
        </div>
      </div>
    </section>
    <section className="max-w-[1240px] mx-auto mt-20">
      <h1 className="text-5xl mb-10">OUR HAPPY CUSTOMERS</h1>
      <Carousel orientation="horizontal">
        <CarouselContent>
          {
            a.map((value, index)=>
              <CarouselItem className="flex justify-between" key={index}>
                <div className="w-[400px] h-[240px] border-gray-300 border-solid border-2 rounded-2xl px-8 py-5">
                  <div className="flex">
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                  </div>
                  <div className="flex">
                    <h1 className="font-bold my-4">Sarah M.</h1>
                    <Image src={check} alt="check"/>
                  </div>
                  <p className="text-base">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>
                <div className="w-[400px] h-[240px] border-gray-300 border-solid border-2 rounded-2xl px-8 py-5">
                  <div className="flex">
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                  </div>
                  <div className="flex">
                    <h1 className="font-bold my-4">Sarah M.</h1>
                    <Image src={check} alt="check"/>
                  </div>
                  <p className="text-base">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>
                <div className="w-[400px] h-[240px] border-gray-300 border-solid border-2 rounded-2xl px-8 py-5">
                  <div className="flex">
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                    <Image src={star} alt=''/>
                  </div>
                  <div className="flex">
                    <h1 className="font-bold my-4">Sarah M.</h1>
                    <Image src={check} alt="check"/>
                  </div>
                  <p className="text-base">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>
              </CarouselItem>
            )
          }
        </CarouselContent>
        <CarouselNext/>
        <CarouselPrevious/>
      </Carousel>
    </section>
    </>
  );
}
