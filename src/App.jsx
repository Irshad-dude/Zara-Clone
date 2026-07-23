import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from "./pages/Home";
import Occasion from "./pages/Occasion";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/occasions" element={<Occasion />} />
      </Routes>
    </>
  )
}

export default App
