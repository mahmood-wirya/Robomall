import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import ServiceModal from "../components/ServiceModal";

const yellowStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-4 h-5 text-yellow-300 fill-current"
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
    class="w-4 h-5 text-gray-400 fill-current"
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

export default function ServiceCard({ services }) {
  return (
    <div className="container bg-white p-7 rounded-3xl w-[350px] h-full mt-10 shadow-lg">
      <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-6 text-center">
        Computer repair technician
      </p>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt="products"
        className="w-full object-contain shadow-md rounded-full border-2 border-slate-300"
      />
      <div>
        <h2 className="text-xl text-gray-700 font-semibold mt-6 text-center">
          {services.name.firstname} {services.name.lastname}
        </h2>
        <p className="text-base text text-gray-400 font-semibold mt-2 text-center">
          small bio for the employees that explainces about their experience and
          skiils...
        </p>
        <div className="flex justify-around">
          <div className="my-6 flex">
            <Rating
              initialRating={3.7}
              fullSymbol={yellowStar}
              emptySymbol={grayStar}
              readonly={true}
            />
            <p className="pl-1 pt-1 text-[10px] title-font text-gray-500 tracking-widest">
              (3.7)
            </p>
          </div>
          <div className="text-center pt-3">
            <button
              className="border-2 rounded-lg border-[#2DBCB7] text-[#2DBCB7] p-2  hover:bg-[#2DBCB7] hover:text-white inline-block text-blank"
            
              >
              <ServiceModal services={services} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
