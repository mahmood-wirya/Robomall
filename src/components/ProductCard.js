import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="col-span-3 bg-white p-7 rounded-t-2xl w-[350px] h-full mt-10 shadow-lg">
      <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-3">
        In stock
      </p>
      <img
        src={product.image}
        className="h-[200px] w-full object-contain shadow-md rounded-3xl"
      />
      <h2 className="text-lg text-gray-900 font-semibold mt-6">
        {product.title}
      </h2>

      <p className="text-base text-gray-500 font-medium mt-4">
        {product.description}
      </p>
    </div>
  );
}
