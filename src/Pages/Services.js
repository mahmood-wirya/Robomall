import { React, useEffect, useState } from "react";
import ServiceList from "../components/ServicePage/ServiceList";
import Layouts from "../Layout/MainLayouts";
import LoadingIcon from "../components/LoadingIcon";
import axios from "axios";
import Footer from "../components/Footer";

export default function Services() {
  const [services, setServices] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/users`)
      .then((response) => {
        console.log("list of services", response.data);
        setServices(response.data);
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
    <Layouts>
      <h1 className=" title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-400 first-letter:uppercase pl-12 lg:pl-6 pt-5">
        Select Your Services
      </h1>
      <ServiceList services={services} />
      <Footer/>
    </Layouts>
  );
}
