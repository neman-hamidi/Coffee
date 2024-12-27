import React from "react";
import Image from "next/image";
import NewItem from "../newproduct/newItem/newItem";
export default function discount() {
  return (
    <>
      <div className="bg-zinc-300">
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
          <p className="text-center mb-3 lg:text-3xl font-rokh font-bold">تخفیف دارها</p>
          <div className="flex flex-row w-[80%] mx-auto justify-between text-sm lg:w-[40%] font-rokh font-bold">
            <p className="border-b border-b-brownMain-light pb-1 text-[#333333] lg:text-md">
              انواع قهوه
            </p>
            <p className="text-[#333333]">انواع پودریجات</p>
            <p className="text-[#333333]">دریپ بک</p>
            <p className="hidden text-[#333333] lg:block  lg:text-md">
              انواع سیروپ
            </p>
            <p className="hidden text-[#333333] lg:block  lg:text-md">
              انواع اکسسوری
            </p>
          </div>
        </div>
        <div className="w-[90%] mx-auto flex flex-wrap justify-center mt-4 lg:w-full lg:gap-10">
          <NewItem
            title="دانه قهوه اسپرسو جیورنو بن مانو"
            price="168,000"
            price2="148,000"
            discount="4-"
          >
            <Image
              src="/images/p1.png"
              width={170}
              height={170}
              alt="product-img"
              className="rounded-md mx-auto"
            />
          </NewItem>
          <NewItem
            title="دانه قهوه اسپرسو ویتالی (بن مانو )"
            price="138,000"
            price2="128,000"
            discount="23-"
          >
            <Image
              src="/images/p2.png"
              width={170}
              height={170}
              alt="product-img"
              className="rounded-md mx-auto"
            />
          </NewItem>
          <NewItem
            title="دانه قهوه اسپرسو‌ لِیدی روپل"
            price="168,000"
            price2="148,000"
            discount="5-"
          >
            <Image
              src="/images/p3.png"
              width={170}
              height={170}
              alt="product-img"
              className="rounded-md mx-auto"
            />
          </NewItem>
          <NewItem
            title="دانه قهوه اسپرسو‌ دِیلی روپل"
            price="138,000"
            price2="128,000"
            discount="1-"
          >
            <Image
              src="/images/p4.png"
              width={170}
              height={170}
              alt="product-img"
              className="rounded-md mx-auto"
            />
          </NewItem>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-8 lg:flex lg:flex-row-reverse lg:items-center lg:w-[60%] lg:gap-4 ">
        <div>
          <div>
            <Image
              src="/images/Container.png"
              width={116}
              height={135}
              alt="logo-imgs"
              className="mr-auto lg:w-24"
            />
          </div>
          <div className="-translate-y-6">
            <Image
              src="/images/img-i.png"
              width={300}
              height={513}
              alt="logo-imgs"
              className="lg:h-[510px] w-[710px]"
            />
          </div>
        </div>
        <div className="text-black">
          <p className="text-center my-3 font-bold lg:text-3xl lg:text-start font-rokh font-bold">
            خـــانه قـهــوه چـــالوس☕
          </p>
          <p className="my-3 mb-6 leading-8 text-xs lg:text-base lg:leading-7">
            با بیش از ده سال تجربه در اداره کافه‌ها و رستوران‌ها، و پنج سال
            سابقه در عرصه‌ی آموزش و تولید و فروش قهوه، ما در زمینه‌ی خدمات قهوه
            به شما اطمینان می‌دهیم. تخصص ما در ترکیب بی‌نظیر علم قهوه با تجربه
            رستورانی، تجربه‌ی بی‌نظیری را برای شما ایجاد خواهیم کرد.
          </p>
          <button
            type="submit"
            className="py-2.5 px-7 bg-brownMain-light rounded-full"
          >
            درباره ما
          </button>
        </div>
      </div>
    </>
  );
}
