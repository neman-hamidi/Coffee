import React from "react";
import Image from "next/image";

export default function header() {
  return (
    <>
      <div className="mt-5 lg:mt-9 text-center text-brownMain">
        <p className="text-2xl lg:text-8xl mb-4 font-rokh">
          <span className="font-bold text-3xl  lg:text-9xl">قهوت </span>یادت نره!
        </p>
        <p className="text-center text-sm text-black lg:text-2xl lg:mt-7">
          بهترین و با کیفیت ترین قهوه ها و اکسسوری ها در خانه قهوه چالوس
        </p>
        <button
          type="submit"
          className="py-4 px-8 bg-brownMain-light my-5 text-white rounded-full text-xs lg:text-2xl lg:my-7"
        >
          نمایش محصولات
        </button>
      </div>
      <div className="text-center w-64 lg:w-[550px] mx-auto">
        <Image
          src="/images/Hero-cofee-house.png.png"
          width={340}
          height={240}
          alt="Image-header-coffee"
          className="lg:w-[550px] lg:h-96"
        />
        <div className="div-information-header flex flex-col gap-4 py-5 px-6 -translate-y-4 lg:-translate-y-8 lg:flex-row lg:gap-14 lg:justify-center">
          <div className="flex justify-center gap-7">
            <div>
              <p className="text-xl lg:text-4xl lg:text-amber-700">100+</p>
              <p className="text-xs text-brownMain-light lg:text-lg lg:text-amber-900 font-rokh font-bold">نوع قهوه</p>
            </div>
            <div>
              <p className="text-xl lg:text-4xl lg:text-amber-700">1000+</p>
              <p className="text-xs text-brownMain-light lg:text-lg lg:text-amber-900 font-rokh font-bold">مشتری راضی</p>
            </div>
          </div>
          <div className="flex justify-center gap-7">
            <div className="translate-x-5">
              <p className="text-xl lg:text-4xl lg:text-amber-700">100+</p>
              <p className="text-xs text-brownMain-light lg:text-lg lg:text-amber-900 font-rokh font-bold">اکسسوری</p>
            </div>
            <div>
              <p className="text-xl lg:text-4xl lg:text-amber-700">3+</p>
              <p className="text-xs text-brownMain-light lg:text-lg lg:text-amber-900 font-rokh font-bold">شعبه</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
