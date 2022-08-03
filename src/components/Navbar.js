import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../src/img/1.png";
import Button from "./Button";
import Navlinks from "./Navlinks.js";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#EFE6D8]">
      <div className="flex iteme-center font-medium justify-around">
        <div className="z-50 p-5 md:w-full w-auto flex justify-between">
          <img
            src={Logo}
            alt="Logo"
            className="md:cursor-pointer w-24 h-24"
          />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
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
        <ul
          className={`
            "md:hidden bg-[#EFE6D8] absolute w-full h-full bottom-0 py-24 pl-4 
            duration-300 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <Navlinks />
          <div>
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
}
