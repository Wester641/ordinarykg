import React from "react";
import Product from "./Product";
import { products } from "../../constans/productsCard";
import Button from "../../ui/Button";

export default function ProductsCards() {
  return (
    <>
      <div className="container mx-auto my-10 bg-[#fff]">
        <h2 className="text-3xl font-bold text-gray-900 text-center my-3 ">
          Продукция
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-3">
          {products.map((product, index) => (
            <Product
              key={index}
              _id={product._id}
              img={product.img}
              productName={product.productName}
              price={product.price}
              color={product.color}
            />
          ))}
        </div>
      </div>
      <Button name="Все товары и услуги" />
    </>
  );
}
