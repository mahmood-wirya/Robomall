import {React, useEffect, useState } from "react";
import Layout from "../Layout/MainLayouts";
import axios from "axios";
import LoadingIcon from "../components/LoadingIcon";
import CategoriesList from "../components/CategoriesList";





export default function Categories() {
  const [catgories, setCatgories] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/categories`)
      .then((response) => {
        console.log("list of categories", response.data);
        setCatgories(response.data);
        setIsLoading(false);
      })
      .catch((arr) => {
        console.log(arr);
      });
  }, []);

  if (isLoading) {
    return <LoadingIcon />;
  }
  return (
    <Layout>
      <div>
      <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-400 lowercase pl-12 lg:pl-6 pt-5">Select category</h1>
     <CategoriesList catgories ={catgories} />
      </div>
    </Layout>
  );
}
