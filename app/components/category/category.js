import React from "react";
import Image from "next/image";
import details from "./Text";
const category = () => (
  <>
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
        <p className="my-3.5 font-bold text-xl lg:text-3xl font-rokh">
          دسته بندی محصولات
        </p>
        <div className="w-7 lg:w-[530px] h-px bg-zinc-300"></div>
      </div>
      <p className="mb-7 font-bold text-sm">
        بهترین و باکیفیت ترین برند ها ، چون شما لایق بهترین ها هستید
      </p>
      <div className="mt-3 my-2 lg:flex lg:gap-5 lg:justify-center  font-rokh font-bold">
        {details.map((item, index) => (
          <div
            key={index}
            className="px-3 py-2 mb-3 flex justify-between items-center bg-bgBtn  rounded-full"
          >
            <div className="flex gap-x-2 items-center">
              <Image
                src={item.src}
                width={50}
                height={50}
                alt="product"
                className="rounded-full"
              />
              <p className="lg:text-2xl">{item.title}</p>
            </div>
            <div className="lg:hidden">
              <svg className="w-5 h-5 rotate-90">
                <use href="#arrow-down-left"></use>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);
export default category;
