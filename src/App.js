import "./App.css";
// import Navbar from "./components/Navbar";
import { Routes, Route} from "react-router-dom"


import Home from "./Pages/Home"
import About from "./Pages/About"
import Carts from "./Pages/Carts"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Product from "./Pages/Product"
import Products from "./Pages/Products"
import Categories from "./Pages/Categories"
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Carts" element={<Carts />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Products" element={<Products />} />
        <Route path="Categories" element={<Categories />} />
        <Route path="Products/:id" element={<Product />} />
        </Routes>
    </div>
  );
}

export default App;
