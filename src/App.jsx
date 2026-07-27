import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Occasion from "./pages/Occasion";
import Testimonial from "./pages/Testimonial";
import Collection from "./pages/Collection";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/occasions" element={<Occasion />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/testimonials" element={<Testimonial />} />
      </Routes>
    </>
  );
}

export default App;
