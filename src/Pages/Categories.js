import { React, useEffect, useState } from "react";
import Layout from "../Layout/MainLayouts";
import axios from "axios";
import LoadingIcon from "../components/LoadingIcon";
import CategoriesList from "../components/CategoriesList";

export default function Categories() {
  const [categories, setcategories] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/categories`)
      .then((response) => {
        setcategories(response.data);
        setIsLoading(false);
      })
      .catch((arr) => {
      });
  }, []);

  if (isLoading) {
    return <LoadingIcon />;
  }
  return (
    <Layout>
      <div>
        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-400 lowercase pl-12 lg:pl-6 pt-5">
          Select category
        </h1>
        <CategoriesList categories={categories} />
      </div>
    </Layout>
  );
}
