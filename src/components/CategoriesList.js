import React from "react";
import CategoriesCard from "./CategoriesCard";

export default function CategoriesList({ catgories }) {
  return (
    <div className="flex flex-wrap container mx-auto gap-x-8 justify-center mb-14 ">
      {catgories.map((categories) => {
        return <CategoriesCard categories={categories} />;
      })}
    </div>
  );
}
