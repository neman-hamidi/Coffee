import Image from "next/image";
import React from "react";

export default function newItem({ title, price, price2, discount, src }) {
  return (
    <section className="text-center mb-5">
      <div className="relative">
        <Image
          src={src}
          width={170}
          height={170}
          alt="product-img"
          className="rounded-md mx-auto"
        />
        <span className="absolute top-2 right-8 text-white bg-brownMain-light p-2 text-xs rounded-full">
          {discount}%
        </span>
      </div>
      <p className="mt-2">{title}</p>
      <div className="flex flex-row items-center justify-center gap-2">
        <div className="my-2">
          <del className="text-zinc-400">تومان {price}</del>
        </div>
        <div>
          <h3 className="text-brownMain-light">تومان {price2}</h3>
        </div>
      </div>
      <button
        type="submit"
        className="px-3 py-2 mt-2 bg-brownMain-light rounded-full lg:text-sm"
      >
        افزودن به سبد خرید
      </button>
    </section>
  );
}
