import "./App.css";

import { Routes, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Carts from "./Pages/Carts";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from "./app/slices/authSlice";
import { updatecart } from "./app/slices/cartSlice";
import Services from "./Pages/Services";
import Feedback from "./Pages/Feedback";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      dispatch(login(username));
    }

    axios
      .get(`https://fakestoreapi.com/carts/5`)
      .then((response) => {
   
       
        dispatch(updatecart(response.data.products));
        // send the cart information to the store
      })
      .catch((err) => {
      
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Carts" element={<Carts />} />
        <Route path="Login" element={<Login />} />
        <Route path="Feedback" element={<Feedback />} />
        <Route path="Products" element={<Products />} />
        <Route path="Categories" element={<Categories />} />
        <Route path="Products/:id" element={<Product />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
