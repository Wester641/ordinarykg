import React from "react";

const navbarArray = [
  "Главная",
  "Каталог",
  "О нас",
  "Контакты",
  "Доставка и оплата",
  "Статьи",
];

export default function NavbarSection() {
  return (
    <nav className="hidden lg:flex justify-center relative">
      <div className="absolute top-3 shadow-md z-10 bg-slate-50 w-[80%] text-center flex items-center justify-center gap-5  h-12 border-[2px] border-green ">
        {navbarArray.map((el) => (
          <a className="bold text-[1rem] text-black" href="/#">
            {el}
          </a>
        ))}
      </div>
    </nav>
  );
}
