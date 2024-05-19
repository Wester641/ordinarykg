import React from "react";
import ProductCustom from "./ProductCustom";
import { products } from "../../constans/productsCard";
// import Button from "../../ui/Button";

export default function ProductsCardsCustom() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 ss:grid-cols-3 sm:grid-cols-4  gap-3 mx-3 my-3  ">
          {products.map((card) => (
            <div className=" w-full grid place-items-center " key={card.id}>
              <ProductCustom
                image={card.img}
                title={card.productName}
                color={card.color}
                price={card.price}
                // layout="fill"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
