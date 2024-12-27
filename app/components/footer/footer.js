import React from "react";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io";
import { MdWhatsapp } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";

export default function footer() {
  return (
    <>
      <svg className="hidden">
        <symbol
          id="phone"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </symbol>
        <symbol
          id="map-pin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </symbol>
        <symbol
          id="clock"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </symbol>
      </svg>
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
