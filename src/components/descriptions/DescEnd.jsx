import React from "react";
import { DescEndSection } from "../../constans/descriptions";

export default function DescEnd() {
  return (
    <section className="max-w-full text-[#4d4d4d] shadow-4xl  m-5 py-6 flex flex-col gap-10">
      <div className="flex gap-5">
        {DescEndSection.map((el) => (
          <div className="text-center text-[0.8rem] flex flex-col gap-5">
            <h2 className="text-center text-xl">{el.title}</h2>
            <h2>{el.subTitle}</h2>
            <p>{el.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
