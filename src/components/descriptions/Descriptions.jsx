import React from "react";
import { Descriptions1 } from "../../constans/descriptions";
import Button from "../../ui/Button";

export default function Descriptions() {
  return (
    <section className="max-w-full text-[#4d4d4d] shadow-4xl  m-5 py-5 pr-3 flex flex-col gap-10">
      <h1 className=" text-2xl text-center mb-5">
        Качественная и надежная защита от несанкционированного доступа
      </h1>
      <div className=" grid grid-cols-2  gap-5">
        {Descriptions1.map((item) => (
          <div key={item.id}>
            <p className="flex ">
              <img
                className="w-[50px] h-[50px] border-2 border-green px-[10px] rounded-full mx-5"
                src={item.icons}
                alt="icon"
              />
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <Button name="Увидеть ассортимент" />
    </section>
  );
}
