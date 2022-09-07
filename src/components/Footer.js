import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
   <div>
   <hr className="mb-4 bg-gray-400"/>
    <div className="h-[250px]   flex flex-row-reverse flex-wrap justify-evenly ">
      <div className="w-full lg:w-1/5 pb-3 flex flex-col">
        <Link to={"/"} className="text-3xl font-bold text-[#2DBCB7]" >Logo</Link>
        <p className="text-gray-400 pt-4">Have Fun With Our New Tech</p>
      </div>
      <div className="p-2 md:w-1/5 w-1/2">
        <h3 className="text-2xl font-bold pb-3 tracking-wide text-[#2DBCB7]">Pages</h3>
        <ul className="text-base font-medium text-gray-400 space-y-2">
          <li><Link to={"/"} className="hover:text-gray-600" >Home</Link></li>
          <li><Link to={"/products"} className="hover:text-gray-600">Products</Link></li>
          <li><Link to={"/categories"} className="hover:text-gray-600">Categories</Link></li>
          <li><Link to={"/services"} className="hover:text-gray-600">Services</Link></li>
        </ul>
      </div>
      <div className="p-2 md:w-1/5 w-1/2">
        <h3 className="text-2xl font-bold pb-3 text-[#2DBCB7]">Help</h3>
        <ul className="text-base font-medium text-gray-400 space-y-2">
          <li><Link to={"/services"} className="hover:text-gray-600">About Us</Link></li>
          <li><Link to={"/services"} className="hover:text-gray-600">Feedback</Link></li>
       
          </ul>
      </div>
      <div className="p-2 md:w-1/5 w-1/2">
       {/* my social medias */}
        <h3 className="text-2xl font-bold pb-3 text-[#2DBCB7]">Social Media</h3>
        
        {/* my social Twitter */}
          <div className=" flex text-gray-400 space-x-2">
          <Link to={"/services"} className="hover:text-gray-600">
           <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
        </Link>
        {/* my social Facebook */}
        <Link to={"/services"} className="hover:text-gray-600"><svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
      </svg></Link>
    {/* my social Instagram */}
      <Link to={"/services"} className="hover:text-gray-600"><svg
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-5 h-5"
      viewBox="0 0 24 24"
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
    </svg></Link>

        </div>
        <ul className="text-base font-medium text-gray-400 space-y-2">
          <h3 className="text-2xl font-bold pt-5 pb-3 text-[#2DBCB7]">Contact Us</h3>
          <li>+9647512052061</li>
          <li>Mahmudhaji28@gmail.com</li>
          </ul>
          
      </div>
      

    </div>
    <div className="mb-4">
    <hr className="mt-3 border" />
    <p className="text-sm text-gray-400 flex justify-center  sm:text-center "> RoboMall®. All Rights Reserved.</p>
    
    </div>
    </div>
  );
}
