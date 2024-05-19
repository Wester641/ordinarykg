import React from "react";
import { callouts } from "../../constans/promoSection";

export default function PromoSection2() {
  return (
    <div className="w-full  ">
      <div className="md:flex flex-wrap md:max-w-[97%] justify-center gap-14 m-auto shadow-4xl py-5 my-5 ">
        {callouts.map((card) => (
          <ul className="lg:flex lg:flex-col gap-3 text-center">
            <li
              className="mt-2 w-[330px] h-[270px] m-auto border  border-[#d9d9d9]"
              key={card.id}
            >
              <img
                className="w-full h-full object-contain "
                src={card.imageOrg || card.imageSrc}
                layout="fill"
                alt="img"
              />
            </li>
            <a className="hover:text-green text-[#777777] " href="/#">
              {card.description}
            </a>
          </ul>
        ))}
      </div>
    </div>
  );
}
