import React from "react";
import Image from "next/image";
export default function category() {
  return (
    <>
      <svg className="hidden">
        <symbol
          id="arrow-down-left"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
          />
        </symbol>
      </svg>
      <div className="mt-12 mb-3">
        <Image
          src="/images/Group 1.png"
          width={71}
          height={60}
          alt="fandogh"
          className="mx-auto"
        />
      </div>
      <div className="text-center w-[90%] mx-auto mb-10">
        <div className="flex justify-between items-center">
          <div className="w-7 lg:w-[530px] h-px bg-zinc-300"></div>
          <p className="my-3.5 font-bold text-xl lg:text-3xl font-rokh">دسته بندی محصولات</p>
          <div className="w-7 lg:w-[530px] h-px bg-zinc-300"></div>
        </div>
        <p className="mb-7 font-bold text-sm">
          بهترین و باکیفیت ترین برند ها ، چون شما لایق بهترین ها هستید
        </p>
        <div className="mt-3 my-2 lg:flex lg:gap-5 lg:justify-center  font-rokh font-bold">
          <div className="px-3 py-2 mb-3 flex justify-between items-center bg-bgBtn  rounded-full">
            <div className="flex gap-x-2 items-center">
              <Image
                src="/images/IMG_7604-1.png"
                width={50}
                height={50}
                alt="product"
                className="rounded-full"
              />
              <p className="lg:text-2xl">دانه قهوه</p>
            </div>
            <div className="lg:hidden">
              <svg className="w-5 h-5 rotate-90">
                <use href="#arrow-down-left"></use>
              </svg>
            </div>
          </div>

          <div className="px-3 py-2 mb-3 flex justify-between items-center bg-bgBtn  rounded-full">
            <div className="flex gap-x-2 items-center">
              <Image
                src="/images/ideogram-2.png"
                width={50}
                height={50}
                alt="product"
                className="rounded-full"
              />
              <p className="lg:text-2xl">پودریجات</p>
            </div>
            <div className="lg:hidden">
              <svg className="w-5 h-5 rotate-90">
                <use href="#arrow-down-left"></use>
              </svg>
            </div>
          </div>

          <div className="px-3 py-2 mb-3 flex justify-between items-center bg-bgBtn  rounded-full">
            <div className="flex gap-x-2 items-center">
              <Image
                src="/images/IMG_7461.png"
                width={50}
                height={50}
                alt="product"
                className="rounded-full"
              />
              <p className="lg:text-2xl">دریپ بک</p>
            </div>
            <div className="lg:hidden">
              <svg className="w-5 h-5 rotate-90">
                <use href="#arrow-down-left"></use>
              </svg>
            </div>
          </div>

          <div className="px-3 py-2 mb-3 flex justify-between items-center bg-bgBtn  rounded-full">
            <div className="flex gap-x-2 items-center">
              <Image
                src="/images/IMG_7596.png"
                width={50}
                height={50}
                alt="product"
                className="rounded-full"
              />
              <p className="lg:text-2xl">سیروپ</p>
            </div>
            <div className="lg:hidden">
              <svg className="w-5 h-5 rotate-90">
                <use href="#arrow-down-left"></use>
              </svg>
            </div>
          </div>

          <div className="px-3 py-2 mb-3 flex justify-between items-center bg-bgBtn  rounded-full">
            <div className="flex gap-x-2 items-center">
              <Image
                src="/images/IMG_7600.png"
                width={50}
                height={50}
                alt="product"
                className="rounded-full"
              />
              <p className="lg:text-2xl">اکسسوری</p>
            </div>
            <div className="lg:hidden">
              <svg className="w-5 h-5 rotate-90">
                <use href="#arrow-down-left"></use>
              </svg>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
