import { Routes, Route } from "react-router-dom";
import { useState, useRef } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Occasion from "./pages/Occasion";
import Testimonial from "./pages/Testimonial";
import Collection from "./pages/Collection";
import ProductCard from "./pages/ProductCard";
import BoxAnimation from "./pages/BoxAnimation";
import Cart from "./pages/Cart";
import { motion } from "framer-motion";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>

      <Routes>
      {/* <Route path="/" element={<BoxAnimation/>} /> */}
      <Route path="/products/:id" element={<ProductCard />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/occasions" element={<Occasion />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/testimonials" element={<Testimonial />} />
      </Routes>
    </>
  );
}

export default App;
