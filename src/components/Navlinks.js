import React from "react";

export default function Navlinks() {
  const links = [{ name: "Men" }, { name: "women" }, { name: "Kid's" }];
  return (
    <>
      {links.map((links) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer">
            <h1 className="py-7">{links.name}</h1>
          </div>
        </div>
      ))}
    </>
  );
}
