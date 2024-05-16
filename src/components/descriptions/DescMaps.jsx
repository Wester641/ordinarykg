import React from "react";
import { DescMapsAndIcons } from "../../constans/descriptions";
import Button from "../../ui/Button";

export default function DescMaps() {
  return (
    <>
      <Button name="Больше комментариев" className="mt-10" />
      <section className="max-w-full text-[#4d4d4d] shadow-4xl  m-5 py-10 flex flex-col gap-10">
        <h2 className="text-center text-xl">
          Оформить заказ пломбировочной и упаковочной продукции
        </h2>
        <div className="flex gap-5">
          {DescMapsAndIcons.map((el) => (
            <div className="flex flex-row-reverse items-start">
              <div
                className="flex flex-col justify-start items-center mx-7 gap-7 "
                key={el.id}
              >
                <img src={el.icon} className="h-[60px] w-[60px]" alt="icon" />
                <p className="text-[0.8rem] text-center">{el.description}</p>
              </div>
              <p className="text-2xl ">{el.arrow}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
