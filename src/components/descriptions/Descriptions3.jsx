import React from "react";
import { Descriptions33 } from "../../constans/descriptions";
import SectionDesc from "./SectionDesc";

export default function Descriptions3() {
  return (
    <section className="max-w-full text-[#4d4d4d] shadow-4xl mx-5 mb-10 py-5 pr-3 flex flex-col gap-5">
      <h2 className="text-center text-xl">
        Почему клиенты выбирают « DMR Company»
      </h2>
      <div className="grid grid-cols-2 gap-5 items-center">
        {Descriptions33.map((el) => (
          <div className="flex  gap-5 items-center" key={el.id}>
            <div className="border-2 text-3xl px-5 ml-5 text-green hover:bg-green hover:text-[#fff] border-[#777777] w-[50px] h-[50px] rounded-full flex items-center justify-center">
              <p>{el.number}</p>
            </div>
            <SectionDesc title="" icon={null} description={el.description} />
          </div>
        ))}
      </div>
    </section>
  );
}
