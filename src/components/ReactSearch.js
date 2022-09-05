import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import LoadingIcon from "./LoadingIcon";

export default function ReactSearch() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log("list of products:", response.data);
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (products == "") {
      return products;
    } else if (products) {
      const filtered = products.map(({ id, title, price, ...rest }) => {
        return { value: price, label: title };
      });
      console.log("successfully filtered users", filtered);
      setOptions(filtered);
    }
  }, [products]);

  if (isLoading) {
    return <LoadingIcon />;
  }
  return (
    <div className="items-center">
      <Select
        className=" border rounded-lg block w-full p-2.5 focus:border-[#2DBCB7]"
        options={options}
        onChange={(selected) => alert(JSON.stringify(selected.label))}
      />
    </div>
  );
}
