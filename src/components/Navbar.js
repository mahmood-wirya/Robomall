import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../src/img/1.png";
import Button from "./Button";
import Navlinks from "./Navlinks.js";
export default function Navbar() {
  return (
    <nav className="bg-[#EFE6D8]">
      <div className="flex iteme-center font-medium justify-around">
        <div>
          {/*you can add logo img in here or brand name */}
          <img
            src={Logo}
            alt=""
            className="md:cursor-pointer h-24 w-24 rounded-full"
          />
        </div>
        <ul className="md:flex hidden px-40  uppercase items-center gap-8 font-[Poppins] ">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <Navlinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile Nav*/}
        <ul>
        <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
