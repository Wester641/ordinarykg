import React from "react";
import { footerData } from "../../constans/footer";

export default function Footer() {
  return (
    <div className=" w-full flex flex-col justify-around min-h-[250px]  bg-zinc-800 text-textwhite  relative">
      <div className="hidden xs:flex xs:justify-around md:h-full md:items-start ">
        {footerData.map((item) => (
          <div key={item.id}>
            <p className="bold text-base pb-2">{item.title}</p>
            <ul className="flex flex-col gap-1">
              {item.categories.map((el, idx) => (
                <li
                  className="text-[0.8rem] hover:bg-green cursor-pointer"
                  key={idx}
                >
                  <a href={item.path || "#"}>{el}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <p className="text-center text-[0.7rem]">
          <a className="hover:bg-green" href="/#">
            Сайт создан на платформе Satu.kz
          </a>
          <p>
            ТОО DMR Company - "С НАМИ НАДЕЖНО" город Алматы |
            <a className="hover:bg-green" href="/#">
              {" "}
              Пожаловаться на контент
            </a>
          </p>
        </p>
      </div>
    </div>
  );
}
