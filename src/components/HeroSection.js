import React from "react";
import Reactcarousel from "./Reactcarousel";

export default function HeroSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900 uppercase">
            Welcome
          </h1>
          <p className="mb-8 text-2xl leading-relaxed uppercase">
            Have fun, and buy new technology
          </p>
          <div className="flex justify-center ">
            <button className="inline-flex text-white bg-[#2DBCB7] border-0 py-2 px-6 focus:outline-none hover:bg-[#437D7B] rounded-md text-2xl">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-md text-2xl">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
          <Reactcarousel />
        </div>
      </div>
    </section>
  );
}
