import React from "react";
import PromoBannerImg from "../../Img/PromoSectionImg.png";

export default function PromoBanner() {
  return (
    <div className="w-full ">
      <h1 className=" text-3xl text-center font-bold py-5">
        Пломбировочная и упаковочная продукции от компании "ТОО DMR Company"
      </h1>
      <img className="m-auto" src={PromoBannerImg} alt="img..." />
    </div>
  );
}
