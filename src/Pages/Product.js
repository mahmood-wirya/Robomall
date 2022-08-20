import React, {useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import LoadingIcon from '../components/LoadingIcon';
import Layouts from "../Layout/MainLayouts";  
import axios from "axios";
import { ArrowLeftIcon } from "@heroicons/react/outline";
export default function Product() {
let {id} = useParams();

const [product, setProduct] = useState();
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      console.log("list of products:", response.data);
      setProduct(response.data);
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
    <section className="text-gray-600 body-font overflow-hidden">
    <Link to="/products" className="pt-8 lg:pl-[200px] flex lg:mx-10">
    <ArrowLeftIcon className="h-8 w-8 text-[#2DBCB7] rounded-full" />
  </Link>
    <div className="container px-5 py-24 mx-auto">
    
      <div className="lg:w-5/6 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">RoboMall</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{product.title}</h1>
          <div className="flex mb-4">
            <a className="flex-grow text-[#2DBCB7] border-b-2 border-[#2DBCB7] py-2 text-lg px-1">Description</a>
            <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
            <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
          </div>
          <p className="leading-relaxed mb-4">{product.description}</p>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Color</span>
            <span className="ml-auto text-gray-900">Black and White</span>
          </div>
          <div className="flex border-t border-b mb-6 border-gray-200 py-2">
            <span className="text-gray-500">Size</span>
            <span className="ml-auto text-gray-900">Medium</span>
          </div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
            <button className="flex ml-auto text-lg hover:text-lg text-[#2DBCB7] border-[#2DBCB7]  border py-2 px-6 focus:outline-none hover:bg-[#2DBCB7] hover:text-white rounded-3xl">{product.category}</button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
        <img alt="product" className="lg:w-1/2 w-full lg:h-[540px] h-64 object-contain object-center rounded" src={product.image}/>
      </div>
    </div>
 </section>
  </Layouts>
  )
}
