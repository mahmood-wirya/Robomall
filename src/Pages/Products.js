import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingIcon from "../components/LoadingIcon";
import ProductsList from "../components/ProductsList";
import ReactSearch from "../components/ReactSearch";
import Layout from "../Layout/MainLayouts";
export default function Products() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setProducts(response.data);
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
      <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-400 lowercase pl-12 lg:pl-6 pt-5">
        Products
      </h1>
      <ReactSearch />
      <ProductsList products={products} />
    </Layout>
  );
}
