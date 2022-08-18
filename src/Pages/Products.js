import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingIcon from "../components/LoadingIcon";
import Layout from "../Layout/MainLayouts";
export default function Products() {

const [products,setProducts]= useState();
const [isLoading,setIsLoading]=useState(true);


  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        
        console.log("list of products:",response.data)
        setProducts(response.data)
        setIsLoading(false);

      })
      .catch((arr) => {
        console.log(arr);
        
      });
  }, []);
  if (isLoading){
    return(
    <LoadingIcon />
    )
  }

  return (
    <Layout>
      products
    </Layout>
  );
}
