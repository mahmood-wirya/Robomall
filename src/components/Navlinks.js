import React from "react";

export default function Navlinks() {
  const links = [{ name: "Men" }, { name: "women" }, { name: "Kid's" }];
  return (
    <>
      {links.map((links) => (
        <div>
          <div>
            <h1>{links.name}</h1>
          </div>
        </div>
      ))}
    </>
  );
}
