import React from "react";
import Product from "./Product";
import { products } from "../../constans/productsCard";

export default function ProductsCards() {
  return (
    <div className="container mx-auto my-10 bg-[#fff]">
      <h2 className="text-3xl font-bold text-gray-900 text-center bg-green text-white my-3 ">
        Продукция
      </h2>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
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
  );
}