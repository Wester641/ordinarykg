import React from "react";

export default function Button({ name }) {
  return (
    <div className="flex justify-center">
      <a href="/#">
        <button className="text-base rounded py-3 px-11 text-green font-bold border border-green hover:bg-green hover:text-[#fff] ">
          {name}
        </button>
      </a>
    </div>
  );
}
