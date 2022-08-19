import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-[40px]">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}
