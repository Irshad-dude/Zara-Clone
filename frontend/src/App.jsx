import { Routes, Route } from "react-router-dom";
import { useState, useRef } from "react";
import Home from "./pages/Home";
import Occasion from "./pages/Occasion";
import Testimonial from "./pages/Testimonial";
import Collection from "./pages/Collection";
import BoxAnimation from "./pages/BoxAnimation";
import { motion } from "framer-motion";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //   const carouselRef = useRef(null);

  // const nextSlide = () => {
  //   carouselRef.current.scrollBy({
  //     left: 1450,
  //     behavior: "smooth",
  //   });
  // };

  // const previousSlide = () => {
  //   carouselRef.current.scrollBy({
  //     left: -1450,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <>
      <Routes>
      {/* <Route path="/" element={<BoxAnimation/>} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/occasions" element={<Occasion />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/testimonials" element={<Testimonial />} />
      </Routes>
 
    </>
  );
}

export default App;
