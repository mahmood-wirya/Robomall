import React from "react";
import Layout from "../Layout/MainLayouts";
import Footer from "../components/Footer";
import { useFormik } from "formik";
import * as Yup from 'yup';
export default function Feedback() {



  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        
        .max(15, 'Must be 15 characters or less')
        .required('Name is Required'),
      message: Yup.string()
        .max(180, 'Must be 180 characters or less')
        .required('Message is Required'),
      email: Yup.string().email('Invalid email address').required('Email is Required'),
    }),
    onSubmit: (values) => {
      // make a post request

      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout>
      <div className="bg-gradient-to-r from-[#2DBCB7] via-[#287e7d] to-[#106764]  ">
        <h1 className="title-font sm:text-3xl text-2xl mb-4 ml-20 font-medium sm:ml-[170px] text-white pl-12 lg:pl-6 pt-5 first-letter:uppercase">
          Feedback
        </h1>
        <div className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative sm:ml-36">
              {/*the map should be here */}
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Photo booth tattooed prism, portland taiyaki hoodie neutra
                    typewriter
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-[#2DBCB7]  leading-relaxed">
                    example@email.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 sm:mr-32">
              <h2 className="text-white text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-white">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <form onSubmit={formik.handleSubmit}>
                <div className="relative mb-4">
                  <input
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className="w-full placeholder:text-gray-300 bg-white rounded border border-gray-300 focus:border-[#2DBCB7]  focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <div >
                  {formik.touched.name && formik.errors.name ? <div className="text-white">{formik.errors.name}</div> : null}
                  </div>
                </div>
                <div className="relative mb-4">
                  <input
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="w-full bg-white placeholder:text-gray-300 rounded border border-gray-300 focus:border-[#2DBCB7]  focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {formik.touched.email && formik.errors.email ? <div className="text-white">{formik.errors.email}</div> : null}
                </div>
                <div className="relative mb-4">
                  <textarea
                    id="message"
                    name="message"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    className="w-full bg-white placeholder:text-gray-300 rounded border border-gray-300 focus:border-[#2DBCB7]  focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                  {formik.touched.message && formik.errors.message ? <div className="text-white">{formik.errors.message}</div> : null}
                </div>
                <button
                  type="submit"
                  className="text-white bg-[#2DBCB7] border-0 py-2 px-6 focus:outline-none hover:bg-[#1e7a77] rounded text-lg"
                >
                  Send your feedback
                </button>
              </form>
              <p className="text-xs text-white mt-3">
                “We all need people who will give us feedback. That’s how we
                improve.” Bill Gates
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
