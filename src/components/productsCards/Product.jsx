import React from "react";
// import { BsSuitHeartFill } from "react-icons/bs";
// import { GiReturnArrow } from "react-icons/gi";
// import { FaShoppingCart } from "react-icons/fa";
// import { MdOutlineLabelImportant } from "react-icons/md";

const Product = (props) => {
  return (
    <div className="max-w-72 relative group rounded bg-[#f4f4f4] ">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden box-border">
        <div className="mt-2 w-[270px] h-[270px] m-auto border border-[#d9d9d9]">
          <img
            className="w-full h-full object-contain"
            src={props.img}
            alt="img"
          />
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{props.color}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
