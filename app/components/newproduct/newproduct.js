import React from "react";
import Image from "next/image";
import NewItem from "./newItem/newItem";
export default function newproduct() {
  return (
    <div className="bg-zinc-300 lg:pb-5">
      <div>
        <div className="pt-4 mb-3">
          <Image
            src="/images/Group 1.png"
            width={71}
            height={60}
            alt="fandogh"
            className="mx-auto"
          />
        </div>
        <p className="text-center mb-3 lg:text-3xl text-amber-900 font-rokh font-bold">جدیدترین محصولات</p>
        <div className="flex flex-row w-[80%] mx-auto justify-between text-sm lg:w-[40%] font-rokh font-bold">
            <p className="border-b border-b-brownMain-light pb-1 text-[#333333] lg:text-md">انواع قهوه</p>
            <p className="text-[#333333] lg:text-md">انواع پودریجات</p>
            <p className="text-[#333333] lg:text-md">دریپ بک</p>
            <p className="hidden text-[#333333] lg:block  lg:text-md">انواع سیروپ</p>
            <p className="hidden text-[#333333] lg:block  lg:text-md">انواع اکسسوری</p>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex flex-wrap justify-center mt-4 lg:w-full lg:gap-10">
        <NewItem title="دانه قهوه اسپرسو جیورنو بن مانو" price="168,000" price2="148,000" discount="4-">
        <Image src="/images/p1.png" width={170} height={170} alt="product-img" className="rounded-md mx-auto"/>
        </NewItem>
        <NewItem title="دانه قهوه اسپرسو ویتالی (بن مانو )" price="138,000" price2="128,000" discount="23-">
        <Image src="/images/p2.png" width={170} height={170} alt="product-img" className="rounded-md mx-auto"/>
        </NewItem>
        <NewItem title="دانه قهوه اسپرسو‌ لِیدی روپل" price="168,000" price2="148,000" discount="5-">
        <Image src="/images/p3.png" width={170} height={170} alt="product-img" className="rounded-md mx-auto"/>
        </NewItem>
        <NewItem title="دانه قهوه اسپرسو‌ دِیلی روپل" price="138,000" price2="128,000" discount="1-">
            <Image src="/images/p4.png" width={170} height={170} alt="product-img" className="rounded-md mx-auto"/>
        </NewItem>
      </div>
    </div>
  );
}
