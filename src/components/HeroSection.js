import React from "react";
import Reactcarousel from "./Reactcarousel";
import { useFormik } from "formik";
import * as Yup from 'yup';


export default function HeroSection() {
  const formik = useFormik({
    initialValues: {
      email: "",
     
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is Required'),
    }),
    onSubmit: (values) => {
      // make a post request
  
      alert("your subscription has succesfully activated for this email "+ JSON.stringify(values, null, 2));
    },
  });
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl pl-12 mb-4 font-medium text-gray-900 uppercase">
            Welcome
          </h1>
          <p className="mb-8 pl-12 text-2xl leading-relaxed uppercase">
            Have fun, and buy new technology
          </p>
          <div className="flex justify-center flex-wrap">
          <div>
          <form onSubmit={formik.handleSubmit}>
          <div className="contaier relative mb-4 flex flex-row space-x-3">
               <label className="leading-7 text-base font-semibold text-white">Name</label>
                  <input
                    placeholder="Jack@company.com"
                    type="email"
                    id="email"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className="sm:w-96 placeholder:text-gray-300 bg-white rounded border border-gray-300 focus:border-[#2DBCB7]  focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <button type="submit" className="inline-flex text-white bg-[#2DBCB7] border-0 py-2 px-6 focus:outline-none hover:bg-[#437D7B] rounded-md text-2xl">
                  Button
                  </button>
                  </div>
                  <div className="pl-14" >
                  {formik.touched.email && formik.errors.email ? <div className="text-red-400">{formik.errors.email}</div> : null}
                  </div>
              
          
          </form>
          </div>


           
           
          </div>
        </div>
        <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
          <Reactcarousel />
        </div>
      </div>
    </section>
  );
}
