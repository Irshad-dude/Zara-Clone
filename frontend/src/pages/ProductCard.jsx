import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// className = "w- h- border "
export default function ProductCard() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count,setCount] = useState(0)
  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data.product);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  }, [id]);
  if (!product) {
    return <div>Loading...</div>;
  }
 const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
 const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <section className=" flex flex-col gap-12 ">
      <Navbar />
      <div className = "w-full  flex gap-4 p-12">
        <div className = "  flex flex-col gap-4 ">
          <div className = "w-20 h-20 rounded-full bg-white text-[#454c3e4a] flex  border absolute  justify-center items-center font-bold ">SALE</div>
           <img
              src={product.image}
              alt={product.title}
              className=" object-cover rounded-2xl h-90 w-full  transition-transform duration-300 "
            />
            <div className = "flex  gap-6">
                <img
              src={product.image}
              alt={product.title}
              className=" object-cover rounded-lg h-30 w-50  transition-transform duration-300 "
            />
                <img
              src={product.image}
              alt={product.title}
              className=" object-cover rounded-lg h-30 w-50  transition-transform duration-300 "
            />
                <img
              src={product.image}
              alt={product.title}
              className=" object-cover rounded-lg h-30 w-50  transition-transform duration-300 "
            />
            </div>
        </div>
        <div className = "  flex flex-col gap-4 p-4">
          <spna className = "text-[#7b5858] font-sm text-[16px]" >{product.title}</spna>
          <spna className = "text-[#000000] font-sm text-3xl font-serif" >{product.title}</spna>
          <div className = "flex ">
          <span className = "text-[13px]  text-black">⭐️⭐️⭐️⭐️⭐️  4.9</span>
          <span className = "text-[13px]  text-[#5b6850] ">(68 review)</span>
          </div>
          <spna className = "text-[#000000] font-bold text-3xl font-sans" >${product.price}</spna>
          <spna className = "text-[#000000]  text-xl font-serif" >Size-Medium</spna>
          <span className="w-20 h-6 rounded-lg bg-[#ede8bd] text-center"> Quantity </span>
          <div className="flex gap-2">
            <button onClick ={handleDecrement}
            className="w-6 h-6 rounded-full bg-[#cbbe4d]  text-center ">-</button>
            <div className="w-13 h-6 rounded-full bg-[#c8c183]  text-center"> {count} </div>
            
            <button onClick ={handleIncrement}
             className="w-6 h-6 rounded-full bg-[#cbbe4d]  text-center">+</button>
          </div>
          <button className="w-80 h-12 bg-black rounded-2xl text-white font-serif">Add To Cart</button>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
