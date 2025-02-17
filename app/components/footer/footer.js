import React from "react";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io";
import { MdWhatsapp } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";

export default function footer() {
  return (
    <>
      <div className="bg-[#333333] pb-4">
        <div className="w-[90%] py-7 px-5 flex flex-col mb-4 lg:flex-row lg:mx-auto lg:justify-between lg:w-[60%] lg:py-3 lg:mb-3">
          <div className="flex gap-x-3  items-center">
            <div className="bg-brownMain-light rounded-full p-3.5">
              <svg className="w-7 h-7 text-slate-200">
                <use href="#phone"></use>
              </svg>
            </div>
            <div>
              <p className="mb-2 text-white font-rokh font-bold">تلفن تماس</p>
              <p className="text-zinc-400 text-xs">09109876543</p>
            </div>
          </div>

          <div className="flex gap-x-3  items-center my-7">
            <div className="bg-brownMain-light rounded-full p-3.5">
              <svg className="w-7 h-7 text-slate-200">
                <use href="#map-pin"></use>
              </svg>
            </div>
            <div>
              <p className="mb-2 text-white font-rokh font-bold">آدرس</p>
              <p className="text-zinc-400 text-xs">چالوس ...</p>
            </div>
          </div>

          <div className="flex gap-x-3  items-center">
            <div className="bg-brownMain-light rounded-full p-3.5">
              <svg className="w-7 h-7 text-slate-200">
                <use href="#clock"></use>
              </svg>
            </div>
            <div>
              <p className="mb-2 text-white font-rokh font-bold">ساعات کاری:</p>
              <p className="text-zinc-400 text-xs">8صبح الی 11شب</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="lg:flex lg:justify-between lg:items-center lg:w-3/5 lg:mx-auto">
          <div className="flex gap-2 items-center justify-center mt-10 mb-7 text-white">
            <Image
              src="/images/Group1-1.png"
              width={32}
              height={32}
              alt="Logo-nav"
            />
            <h1 className="text-2xl lg:font-bold font-rokh">خانه قهوه</h1>
          </div>
          <div>
            <ul className="flex gap-x-6 justify-center text-white text-sm">
              <li>محصولات</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
            </ul>
          </div>
          <div className="flex justify-center gap-x-2 mt-5">
            <div className=" bg-[#434343] p-3 rounded-full">
              <IoLogoInstagram className="w-6 h-6 text-white" />
            </div>
            <div className=" bg-[#434343] p-3 rounded-full">
              <MdWhatsapp className="w-6 h-6 text-white" />
            </div>
            <div className=" bg-[#434343] p-3 rounded-full">
              <PiTelegramLogoLight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:w-3/5 lg:mx-auto lg:mt-3">
          <div>
            <p className="text-center text-zinc-400 my-4 text-xs px-3">
              تمام حقوق این سایت متعلق به خانه قهوه چالوس میباشد.
            </p>
          </div>
          <div>
            <Image
              src="/images/enamad.png"
              width={63}
              height={63}
              alt="enamad"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
