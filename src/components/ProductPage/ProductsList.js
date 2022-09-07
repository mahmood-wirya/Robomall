import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {
  return (
    <div>
      <div className="flex flex-wrap container mx-auto gap-x-8 justify-center mb-14 ">
        {products.map((product) => {
          return <ProductCard key={product.id} productCard={product} />;
        })}
      </div>
    </div>
  );
}
