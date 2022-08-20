import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { delimiter } from "../utils/delimiter";

const yellowStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-6 h-6 text-yellow-300 fill-current"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const grayStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-6 h-6 text-gray-400 fill-current"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

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
      <div className="my-6 flex">
        <Rating
          initialRating={product.rating.rate}
          fullSymbol={yellowStar}
          emptySymbol={grayStar}
          readonly={true}
        />
        <p className="pl-2 pt-1 text-sm title-font text-gray-500 tracking-widest">({product.rating.rate})</p>
      </div>

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
