
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("");
  const { addItem } = useCart();

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data.product);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) =>
      prevCount > 1 ? prevCount - 1 : 1
    );
  };

  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size");
      return;
    }

    addItem(product, size, count);
    alert("Added to cart!");
  };

  return (
    <section className="flex flex-col gap-12">
      <Navbar />

      <div className="w-full flex gap-4 p-12">

        <div className="flex flex-col gap-4">
          <div className="w-20 h-20 rounded-full bg-white text-[#454c3e4a] flex border absolute justify-center items-center font-bold">
            SALE
          </div>

          <img
            src={product.image}
            alt={product.title}
            className="object-cover rounded-2xl h-90 w-full transition-transform duration-300"
          />

          <div className="flex gap-6">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover rounded-lg h-30 w-50"
            />
            <img
              src={product.image}
              alt={product.title}
              className="object-cover rounded-lg h-30 w-50"
            />
            <img
              src={product.image}
              alt={product.title}
              className="object-cover rounded-lg h-30 w-50"
            />
          </div>
        </div>


        <div className="flex flex-col gap-4 p-4">
          <span className="text-[#7b5858] text-[16px]">
            {product.category}
          </span>

          <span className="text-black text-3xl font-serif">
            {product.title}
          </span>

          <div className="flex gap-2">
            <span className="text-[13px] text-black">
              ⭐️⭐️⭐️⭐️⭐️ 4.9
            </span>
            <span className="text-[13px] text-[#5b6850]">
              (68 reviews)
            </span>
          </div>

          <span className="text-black font-bold text-3xl">
            ${product.price}
          </span>


          <span className="text-black text-xl font-serif">
            Select Size
          </span>

          <div className="flex gap-2">
            {["S", "M", "L", "XL"].map((item) => (
              <button
                key={item}
                onClick={() => setSize(item)}
                className={`w-12 h-10 border rounded-lg ${
                  size === item
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>


          <span className="w-20 h-6 rounded-lg bg-[#ede8bd] text-center">
            Quantity
          </span>

          <div className="flex gap-2 items-center">
            <button
              onClick={handleDecrement}
              className="w-8 h-8 rounded-full bg-[#cbbe4d]"
            >
              -
            </button>

            <div className="w-13 h-8 rounded-full bg-[#c8c183] text-center flex items-center justify-center">
              {count}
            </div>

            <button
              onClick={handleIncrement}
              className="w-8 h-8 rounded-full bg-[#cbbe4d]"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-80 h-12 bg-black rounded-2xl text-white font-serif hover:bg-[#cbbe4d]"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
}