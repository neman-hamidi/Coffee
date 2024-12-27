import React from "react";
import Image from "next/image";
export default function nav() {
  return (
    <>
      <svg className="hidden">
        <symbol
          id="bars-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </symbol>
        <symbol
          id="shopping-bag"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </symbol>
        <symbol
          id="magnifying-glass"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </symbol>
        <symbol
          id="user"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </symbol>
        <symbol
          id="chevron-down"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </symbol>
      </svg>
      <nav className="lg:hidden">
        <div className="px-4 flex justify-between items-center mt-5 mb-14">
          <div>
            <svg className="w-6 h-6 text-brownMain">
              <use href="#bars-3"></use>
            </svg>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/images/Group.png"
              width={32}
              height={32}
              alt="Logo-nav"
            />
            <h1 className="text-brownMain text-2xl font-rokh font-bold ">خانه قهوه</h1>
          </div>
          <div>
            <div className="relative">
              <svg className="w-8 h-8 text-brownMain">
                <use href="#shopping-bag"></use>
              </svg>
              <p className="absolute w-4 h-4 flex items-center justify-center text-white top-0 -left-1 bg-brownMain-light rounded-full p-2.5 text-xs">
                0
              </p>
            </div>
          </div>
        </div>
      </nav>
      <nav className="hidden lg:block">
        <div className="flex justify-between w-[90%] mx-auto mt-10">
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <Image
                src="/images/Group.png"
                width={46}
                height={46}
                alt="logos-nav-lg"
              />
              <p className="text-3xl  text-brownMain mr-2 font-rokh">خانه قهوه</p>
            </div>
            <div className="flex gap-6">
              <div className="flex gap-2 border-l border-l-zinc-300 pl-4 items-center">
                <p className="text-sm text-black font-bold">محصولات</p>
                <svg className="w-3.5 h-3.5 text-zinc-400">
                  <use href="#chevron-down"></use>
                </svg>
              </div>
              <div>
                <p className="text-sm text-black pl-4 border-l border-l-zinc-300 font-bold">
                  درباره ما
                </p>
              </div>
              <div>
                <p className="text-sm font-bold">تماس با ما</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="p-3 border border-zinc-300 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5">
                <use href="#magnifying-glass"></use>
              </svg>
            </div>
            <div className="py-3 px-7 flex items-center gap-x-2 border border-zinc-300 rounded-full text-sm">
              <div>
                <svg className="w-4 h-4">
                  <use href="#user"></use>
                </svg>
              </div>
              <div>
                <p className="text-black">ورود / ثبت نام</p>
              </div>
            </div>
            <div className="p-2 bg-brownMain-light text-white rounded-full relative flex gap-2 items-center">
              <svg className="w-5 h-5">
                <use href="#shopping-bag"></use>
              </svg>
              <p>0 تومان</p>
              <span className="absolute -top-1 -left-1 text-brownMain-light bg-white shadow-md flex items-center justify-center py-1 px-2 text-xs rounded-full">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
