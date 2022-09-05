import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServiceList({ services }) {
  return (
    <div className="flex flex-wrap container mx-auto gap-x-8 justify-center mb-14 ">
      {services.map((services) => {
        return <ServiceCard services={services} />;
      })}
    </div>
  );
}
