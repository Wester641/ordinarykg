import React from "react";

export default function Promosale() {
  return (
    <div className="hidden lg:flex w-full h-12  justify-center items-center gap-3 bg-[rgb(101,193,46)] border-y-amber-100">
      <p className=" text-zinc-800">Акция с 07.12.2022-31.01.2023 года</p>
      <button className="px-[0.9rem] py-[0.2rem] text border border-stone-800 text-zinc-800">
        Спешите
      </button>
    </div>
  );
}
