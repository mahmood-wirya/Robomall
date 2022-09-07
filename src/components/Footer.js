import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <hr className="mb-4 bg-gray-400" />
      <div className="container flex flex-row-reverse flex-wrap justify-evenly  ">
        <div className="w-full lg:w-1/5 pb-3 flex flex-col items-center">
          <Link to={"/"} className="text-3xl font-bold text-[#2DBCB7]">
            Logo
          </Link>
          <p className="text-gray-400 pt-4">Have Fun With Our New Tech</p>
        </div>
        <div className="p-2 md:w-1/5 w-1/2">
          <h3 className="text-2xl font-bold pb-3 tracking-wide text-[#2DBCB7]">
            Pages
          </h3>
          <ul className="text-base font-medium text-gray-400 space-y-2">
            <li>
              <Link to={"/"} className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/products"} className="hover:text-gray-600">
                Products
              </Link>
            </li>
            <li>
              <Link to={"/categories"} className="hover:text-gray-600">
                Categories
              </Link>
            </li>
            <li>
              <Link to={"/services"} className="hover:text-gray-600">
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-2 md:w-1/5 sm:w-1/2">
          <h3 className="text-2xl font-bold pb-3 text-[#2DBCB7]">Help</h3>
          <ul className="text-base font-medium text-gray-400 space-y-2">
            <li>
              <Link to={"/about"} className="hover:text-gray-600">
                About Us
              </Link>
            </li>
            <li>
              <Link to={"/services"} className="hover:text-gray-600">
                Feedback
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-2 md:w-1/5 w-1/2">
          {/* my social medias */}
          <h3 className="text-2xl font-bold pb-3 text-[#2DBCB7]">
            Social Media
          </h3>

          {/* my social Twitter */}
          <div className=" flex text-gray-400 space-x-2">
            <a
              href="https://twitter.com/mahmudwomer2"
              target={"_blank"}
              className="hover:text-gray-600"
            >
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
            </a>
            
            {/* my social linkedin */}
            <a
              href="https://www.linkedin.com/in/mahmood-wirya/"
              target={"_blank"}
              className="hover:text-gray-600"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              </svg>
            </a>
            {/* my social github */}
            <a
              href="https://github.com/mahmood-wirya"
              target={"_blank"}
              className="hover:text-gray-600"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
              </svg>
            </a>
          </div>
          <ul className="text-base font-medium text-gray-400 space-y-2">
            <h3 className="text-2xl font-bold pt-5 pb-3 text-[#2DBCB7]">
              Contact Us
            </h3>
            <li>+9647512052061</li>
            <li>Mahmudhaji28@gmail.com</li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="mb-2">
        <hr className="lg:mt-3 border" />
        <p className="text-sm text-gray-400 flex justify-center  sm:text-center ">
          RoboMall®. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
