import React, { useState } from "react";

const navbarArray = [
  { name: "Главная", href: "/#" },
  {
    name: "Каталог",
    href: "/#",
    submenu: [
      "Акции",
      "Материалы для упаковки банковских ценностей",
      "Расходные материалы для инкассации",
      "Материалы для пломбирования",
      "Технические ткани",
      "Мешковина, упаковочная ткань",
    ],
  },
  { name: "О нас", href: "/#" },
  { name: "Контакты", href: "/#" },
  { name: "Доставка и оплата", href: "/#" },
  { name: "Статьи", href: "/#" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function NavbarSection() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
    setTimeoutId(id);
  };

  return (
    <nav className="hidden lg:flex justify-center relative">
      <div className="absolute top-3 shadow-md z-10 bg-slate-50 w-[80%] text-center flex items-center justify-center gap-5  h-12 border-[2px] border-green ">
        {navbarArray.map((el) => (
          <div
            key={el.name}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <a
              href={el.href}
              className={classNames(
                el.current
                  ? "bg-green-900 text-green bold "
                  : "text-green-300 hover:bg-green-700 hover:text-green bold",
                "rounded-md px-3 py-2"
              )}
            >
              {el.name}
            </a>
            {el.submenu && dropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-72 bg-slate-50 shadow-md text-start">
                {el.submenu.map((submenuItem) => (
                  <a
                    key={submenuItem}
                    href="/#"
                    className="block px-4 text-[0.8rem] hover:text-green hover:opacity-80 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {submenuItem}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
