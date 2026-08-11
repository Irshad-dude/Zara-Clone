import image from "../assets/image.png";
import screen1 from "../assets/screen1.png";
import screen2 from "../assets/screen2.png";
import screen14 from "../assets/screen14.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
const text =
  "Fueling fashion aspirations, our platform embodies style evolution offering a curated collection that defines oo contemporary elegance.".split(
    "",
  );
const text1 =
  "Explore an extensive collection, curated to redefine your wardrobe. Elevate your fashion quotient effortlessly.".split(
    "",
  );
export default function Hero() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/products?page=collection")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="w-full h-[700px] bg-[#EDC7FF] "
      >
        <div className="flex p-12 gap-16 ">
          <div className="max-w-sm w-full h-[500px] bg-[#542772] rounded-2xl mt-20 p-4 shadow-xl flex flex-col">
            <div className="w-full h-full overflow-hidden rounded-xl">
              <img
                src={image}
                alt="Search"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className=" w-[700px] h-[500px] mt-20 ">
            <div className="text-black flex flex-col gap-12 font-thik ">
              <h1 className="text-[70px] mt-4 ">We're unveiling</h1>
              <h1 className="text-[70px] ">Chic, your ultimate</h1>
              <h1 className="text-[70px] ">fashion destination </h1>
            </div>
            <div className="flex gap-8 mt-8">
              <div className="relative w-20 h-20 bg-[#DFFF00] rounded-full flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full animate-[spin_5s_linear_infinite]"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <path
                      id="circle"
                      d="M50,50 m-32,0 a32,32 0 1,1 64,0 a32,32 0 1,1 -64,0"
                    />
                  </defs>
                  <text fontSize="10" fontWeight="medium">
                    <textPath href="#circle">
                      BLACK FRIDAY 50% OFF BLACK FRIDAY 50% OFF
                    </textPath>
                  </text>
                </svg>
              </div>
              <h1 className="text-[14px] w-80 ">
                {text1.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(3px)",
                      scale: 0.7,
                      opacity: 0.5,
                    }}
                    animate={{
                      filter: ["blur(4px)", "blur(0px)"],
                      opacity: [0.5, 1],
                    }}
                    transition={{
                      duration: 1,
                      delay: index * 0.02,
                      ease: "linear",
                    }}
                    viewport={{ once: true }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </div>
            <div className="flex items-center justify-center text-sm font-medium gap-4 mt-16">
              <div className="w-32 h-8 bg-white rounded-full flex items-center justify-center text-black">
                New Arrivals
              </div>
              <div className="w-32 h-8 bg-[#DFFF00] rounded-full flex items-center justify-center">
                Best Sellers
              </div>
              <div className="w-32 h-8 bg-white rounded-full flex items-center justify-center text-black">
                Collections
              </div>
              <div className="w-32 h-8 bg-white rounded-full flex items-center justify-center text-black">
                Black Friday
              </div>
            </div>
            <div className="flex items-center justify-center text-sm font-medium  gap-4 mt-4">
              <div className="w-28 h-8 bg-[#DFFF00] rounded-full flex items-center justify-center">
                Low Prize
              </div>
              <div className="w-20 h-8 bg-white rounded-full flex items-center justify-center text-black">
                30% Off
              </div>
              <div className="w-32 h-8 bg-[#DFFF00] rounded-full flex items-center justify-center">
                Formal Attire
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="w-full h-100 bg-white ">
        <h1 className="text-5xl  pt-20 pl-16 text-black">
          {text.map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                filter: "blur(3px)",
                scale: 0.7,
                opacity: 0.5,
              }}
              animate={{
                filter: ["blur(4px)", "blur(0px)"],
                opacity: [0.5, 1],
              }}
              whileInView={{
                opacity: 0.9,
                scale: 1,
              }}
              transition={{
                delay: index * 0.04,
                ease: "linear",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <div className="flex w-full h-20 gap-12 justify-center  mt-8">
          <Link to="/collection">
            <button className="w-40 h-12 rounded-full border border-black bg-[#DFFF00] flex items-center justify-center text-black hover:bg-[#EDC7FF] ">
              View Collection
            </button>
          </Link>
          <motion.h1
            initial={{
              opacity: 0,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-x w-60 h-12 "
          >
            Discover Fashion Excellence: Your Destination for Trendsetting
            Apparel
          </motion.h1>
        </div>
      </div>
      {/* 2 */}
      <div className="w-full  h-240  p-6 pl-20  ">
        <h3 className="text-[14px] text-[#5c7238] font-medium">
          SPRING/SUMMER 24
        </h3>
        <div className="flex justify-between pt-5">
          <h1 className="text-[50px] text-black font-bold">Our New Collection</h1>
          <div className="flex gap-4 text-black text-thin">
            <div className="w-full h-10    flex text-[12px] justify-center items-center hover:underline ">
              VIEW ALL COLLECTION
            </div>

          </div>
        </div>
        <div className="w-full h-230 pt-12 flex gap-12">
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 3,
              type: "spring",
            }}
            className=" group relative w-120 h-150  rounded-2xl"
          >
            <div className=" absolute  w-44 h-6 bg-[#DFFF00] rounded-full text-center text-[15px]">
              EDITORIAL PICK
            </div>
            <img
              src={screen14}
              alt="Search"
              className="w-full h-130 object-cover rounded-2xl  transition-transform duration-300 hover:scale-100"
            />
            <div className="absolute bottom-24 right-4 w-14 h-14 bg-[#DFFF00] rounded-full text-[30px] font-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ">
              +
            </div>
            <div className="flex justify-between pt-2">
              <h1 className="text-black text-2xl  font-medium">
                Stretchy Oxford Shirt
              </h1>
              <h1 className="text-[#4d5f2f] ">$185.00</h1>
            </div>
            <p className="text-[13px] text-  font-">
              Modern tailoring, unparalleled comfort.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-12 ">
            {products.map((product) => (
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 3,
                  type: "spring",
                }}
                key={product.id}
                className="relative group w-60 h-94  rounded- borde"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover rounded-2xl  transition-transform duration-300 hover:scale-100"
                />
                <div className="absolute bottom-16 right-2 w-10 h-10 bg-[#DFFF00] rounded-full text-[20px] font-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                  +
                </div>
                <div className=" pt-2">
                  <h1 className="text-black text-l  font-medium">
                    {product.title}
                  </h1>
                  <h1 className="text-[#4d5f2f] ">{product.price}</h1>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ scale: 0.7 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 3,
                type: "spring",
              }}
              className="w-60 h-94 bg-[#E1E1F5] rounded-2xl p-6 flex flex-col gap-8"
            >
              <div className="w-12 h-12 bg-[#DFFF00] rounded-full text-[30px] flex justify-center items-center">
                +
              </div>
              <h1 className="text-3xl text-black  font-medium">
                Discover the Fit Guide
              </h1>
              <p>
                Find your perfect avant-garde silhouette with our interactive
                sizing tool.
              </p>
              <h1 className="text- text-[#4d5f2f]   font-medium underline">
                {" "}
                Explore Now↗{" "}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
