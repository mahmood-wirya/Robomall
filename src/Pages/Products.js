import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingIcon from "../components/LoadingIcon";
import ProductsList from "../components/ProductsList";
import ReactSearch from "../components/ReactSearch";
import Layout from "../Layout/MainLayouts";
import ReactPaginate from "react-paginate";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const nextButton = (
    <button className="block py-2 px-3 leading-tight text-[#2DBCB7] bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-[#2DBCB7] ">
      <svg
        aria-hidden="true"
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
  const prevButton = (
    <button className="block py-2 px-3 leading-tight text-[#2DBCB7] bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-[#2DBCB7] ">
      <svg
        aria-hidden="true"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );

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

  useEffect(() => {
    /* calculations for the react paginate */

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(products.slice(itemOffset, endOffset));

    console.log("current items:", currentItems);
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  if (isLoading) {
    return <LoadingIcon />;
  }

  return (
    <Layout>
      <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-400 lowercase pl-12 lg:pl-6 pt-5">
        Products
      </h1>
      <ReactSearch />
      <ProductsList products={currentItems} />
      {/* pagination component here */}
      <div className="container mx-auto flex justify-center mb-10">
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          className="flex"
          previousLabel={prevButton}
          nextLabel={nextButton}
          pageClassName="py-2 px-3 leading-tight text-[#2DBCB7] bg-white border border-gray-300 hover:bg-gray-100 hover:text-[#2DBCB7]"
          activeClassName="z-10 py-2 px-3 leading-tight text-[#2DBCB7] bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-[#2DBCB7]"
          renderOnZeroPageCount={null}
        />
      </div>
    </Layout>
  );
}
