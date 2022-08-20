import React from "react";
import { Link } from "react-router-dom";
import { delimiter } from "../utils/delimiter";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="col-span-3 bg-white p-7 rounded-3xl w-[350px] h-full mt-10 shadow-lg"
    >
      <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-3">
        In stock
      </p>
      <img
        src={product.image}
        alt="products"
        className="h-[200px] w-full object-contain shadow-md rounded-3xl"
      />
      <h2 className="text-lg text-gray-900 font-semibold mt-6">
        {delimiter(product.title, 29)}
      </h2>

      <p className="text-base text-gray-500 font-medium mt-4 mb-3">
        {delimiter(product.description, 90)}
      </p>
      <div className="flex justify-between">
        <p className="tracking-widest text-xl title-font font-medium text-gray-700">
          {product.price}$
        </p>
        <div className="border-2 rounded-3xl border-[#2DBCB7] text-[#2DBCB7] p-1">
          {product.category}
        </div>
      </div>
    </Link>
  );
}
