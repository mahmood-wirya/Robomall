import React from 'react'
import { Link } from "react-router-dom";

export default function CategoriesCard({categories}) {
  return (
    <div className='container bg-white p-7 rounded-3xl w-[350px] h-full mt-10 shadow-lg'>
    <img
        src={categories.image}
        alt="products"
        className="w-full object-contain shadow-md  rounded-full"
      />
      <div>
      <h2 className='text-xl text-gray-700 font-semibold mt-6 text-center'>{categories.name}</h2>
      </div>
      
      <div className='text-center pt-6'>
      <Link to="./" className="border-2 rounded-lg border-[#2DBCB7] text-[#2DBCB7] p-2 px-7 hover:bg-[#2DBCB7] hover:text-white">Select</Link>
      </div>
      
    </div>
  )
}
