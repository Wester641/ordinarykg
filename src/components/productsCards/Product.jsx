import React from "react";

const Product = (props) => {
  return (
    <div className="sm:max-w-72 max-w-32 relative group rounded bg-[#f4f4f4] shadow-3xl cursor-pointer hover:shadow-4xl">
      <div className="sm:max-w-80 sm:max-h-80 max-w-32 max-h-32 relative overflow-y-hidden box-border">
        <div className="mt-2 sm:w-[270px] sm:h-[270px] m-auto border border-[#d9d9d9]">
          <img
            className="w-full h-full object-contain bg-[#fff]"
            src={props.img}
            alt="img"
          />
        </div>
      </div>
      <div className="sm:max-w-80 py-6 flex flex-col gap-1 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="sm:text-lg text-[5px] text-primeColor font-bold">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-[5px] sm:text-[14px]">
            ${props.price}
          </p>
        </div>
        <div>
          <p className="text-[#767676] text-[5px] sm:text-[14px]">
            {props.color}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
