import React from "react";
import Image from "next/image";
export default function articles() {
  return (
    <>
      <div className="bg-[#E2DFD3] mt-16 pb-1 lg:mt-8">
        <div className="mb-3 pt-7">
          <Image
            src="/images/Group 1.png"
            width={71}
            height={60}
            alt="fandogh"
            className="mx-auto"
          />
        </div>
        <div className="text-center w-[90%] mx-auto mb-10 ">
          <div className="flex justify-between items-center">
            <div className="w-7 lg:w-[530px] h-px bg-zinc-500"></div>
            <p className="my-3 font-bold text-xl lg:text-4xl font-rokh font-bold">مقالات آموزشی</p>
            <div className="w-7 lg:w-[530px] h-px bg-zinc-500"></div>
          </div>
          <div>
            <p className="mt-5 mb-10 text-xs lg:text-base">
              مقالات و آموزش های خانه قهوه چالـــوس
            </p>
          </div>
          <div className="lg:flex lg:gap-8 lg:justify-center">
            <div className="rounded-2xl bg-[#EBEBDC] overflow-hidden text-start lg:w-[350px]">
              <div>
                <Image
                  src="/images/Link2.png"
                  width={350}
                  height={252}
                  alt="coffee"
                  className="h-[232px]"
                />
              </div>
              <div className="pr-3">
                <p className="mt-4 mb-8 font-bold">
                  آشنایی با انواع مختلف قهوه
                </p>
                <p className="text-xs text-[#777777] leading-5">
                  مقدمه:قهوه، یکی از محبوب‌ترین نوشیدنی‌های جهان، با طعم و عطر
                  خاص خود، انواع متعددی دارد.
                </p>
                <button type="submit" className="mt-12 mb-3 text-brownMain">
                  ادامه مطلب »
                </button>
              </div>
            </div>

            <div className="hidden lg:block rounded-2xl bg-[#EBEBDC] overflow-hidden text-start lg:w-[350px]">
              <div>
                <Image
                  src="/images/p6.png"
                  width={350}
                  height={202}
                  alt="coffee"
                />
              </div>
              <div className="pr-3">
                <p className="mt-4 mb-8 font-bold">
                  آشنایی با انواع مختلف قهوه{" "}
                </p>
                <p className="text-xs text-[#777777] leading-5">
                  مقدمه:قهوه، یکی از محبوب‌ترین نوشیدنی‌های جهان، با طعم و عطر
                  خاص خود، انواع متعددی دارد.
                </p>
                <button type="submit" className="mt-12 mb-3 text-brownMain">
                  ادامه مطلب »
                </button>
              </div>
            </div>

            <div className="hidden lg:block rounded-2xl bg-[#EBEBDC] overflow-hidden text-start lg:w-[350px]">
              <div>
                <Image
                  src="/images/p5.png"
                  width={350}
                  height={202}
                  alt="coffee"
                  className="h-[232px]"
                />
              </div>
              <div className="pr-3">
                <p className="mt-4 mb-8 font-bold">
                  آشنایی با انواع مختلف قهوه{" "}
                </p>
                <p className="text-xs text-[#777777] leading-5">
                  مقدمه:قهوه، یکی از محبوب‌ترین نوشیدنی‌های جهان، با طعم و عطر
                  خاص خود، انواع متعددی دارد.
                </p>
                <button type="submit" className="mt-12 mb-3 text-brownMain">
                  ادامه مطلب »
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
