import React from "react";
import CategoriesCard from "./CategoriesCard";

export default function CategoriesList({ categories }) {
  return (
    <div className="flex flex-wrap container mx-auto gap-x-8 justify-center mb-14 ">
      {categories.map((categories) => {
        return <CategoriesCard key={categories.id} categories={categories} />;
      })}
    </div>
  );
}
