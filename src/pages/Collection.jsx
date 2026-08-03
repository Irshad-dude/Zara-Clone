import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import screen2 from "../assets/screen2.png";
import screen9 from "../assets/screen9.png";
import screen10 from "../assets/screen10.png";
import screen11 from "../assets/screen11.png";
import screen12 from "../assets/screen12.png";
import screen13 from "../assets/screen13.png";
import screen14 from "../assets/screen14.png";
import {motion} from "framer-motion"
// className ="w- h-  rounded- border"
// className ="text- text-  font-"
const text ="The New Narrative".split("");
const text1 ="  Our new linen-blend garments are treated with a proprietary stone-wash process, resulting in a fabric that flows like water yet retains its structural integrity. It's breathable, sustainable, and designed to age with character.".split("")

export default function Collection() {
  const products = [
  {
    id: 1,
    title: "Oversize Linen Blend Shirt",
    price: "$145.00",
    image: screen13,
  },
  {
    id: 2,
    title: "Modular Utility Vest",
    price: "$101.00",
    image: screen12,
  },
  {
    id: 3,
    title: "Architectural Trouser",
    price: "$165.00",
    image: screen10,
  },
];
  return (
    <>
      <Navbar />
      <section className="flex flex-col gap-16 pt-18">
        <div className="w-full  h-140   relative flex items-center ">
          <img
            src={screen2}
            alt="Search"
            className="w-full h-full object-cover  transition-transform duration-300 hover:scale-100"
          />
          <div className=" absolute w-140 h-60  ml-12 flex flex-col gap-4">
            <h1 className="text-black text-6xl  font-bold">
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
                    transition={{
                      duration: 1,
                      delay: index * 0.3,
                      ease: "linear",
                    }}
                    viewport={{ once: true }}
                  >
                    {letter}
                  </motion.span>
                ))}
            </h1>
            <p className="text-[#4d5f2f] text-  font- w-100">
              Exploring the intersection of architectural structure and fluid
              movement. Our latest collection redefines the avant-garde
              silhouette for the modern wardrobe.
            </p>
            <div className="flex gap-4">
              <button className="w-32 h-12 font-medium  bg-[#DFFF00] rounded-full ">
                Shop Arrivals{" "}
              </button>
              <button className="w-44 h-12 text-black font-medium  hover:bg-[#000000] hover:text-white rounded-full border border-black ">
                View Lookbook{" "}
              </button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-full  h-240  p-6  ">
          <h3 className="text-[14px] text-[#5c7238] font-medium">
            SPRING/SUMMER 24
          </h3>
          <div className="flex justify-between pt-5">
            <h1 className="text-[50px] text-black font-bold">New In</h1>
            <div className="flex gap-4 text-black text-thin">
              <div className="w-10 h-10 border-[#5c7238] rounded-full border flex text-[25px] justify-center items-center hover:bg-black hover:text-white ">
                ←
              </div>
              <div className="w-10 h-10 rounded-full border border-[#5c7238] flex text-[25px] justify-center items-center  hover:bg-black hover:text-white  ">
                →
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

             className=" group relative w-120 h-150  rounded-2xl">
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
               key={product.id} className="relative group w-60 h-94  rounded- borde">
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
               className="w-60 h-94 bg-[#E1E1F5] rounded-2xl p-6 flex flex-col gap-8">
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
        {/* 3 */}
        <div className="w-full h-120 bg-[#F3F3F3] rounded-  flex">
          <div className="relative w-120 h-120   flex justify-center items-center">
            <div className="w-70 h-70 ">
              <img
                src={screen11}
                alt="Search"
                className="w-full h-full object-cover rounded-2xl  transition-transform duration-300 hover:scale-100"
              />
            </div>
            <div className="w-30 h-30 absolute mt-60 ml-60 border-4 border-white rounded-2xl ">
              <img
                src={screen9}
                alt="Search"
                className="w-full h-full object-cover rounded-2xl  transition-transform duration-300 hover:scale-100"
              />
            </div>
          </div>
          <div className="w- h-  rounded-  pt-22 flex flex-col gap-8">
            <h3 className="text-[14px] text-[#4d5f2f]  font-">
              FABRIC & CRAFT
            </h3>
            <h1 className="text-6xl text-black  font-medium">
              The Alchemy of Linen
            </h1>
            <p className="w-140 text-  ">
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
                      delay: index * 0.03,
                      ease: "linear",
                    }}
                    viewport={{ once: true }}
                  >
                    {letter}
                  </motion.span>
                ))}
            </p>
            <div className="flex flex-between gap-8 w-">
              <div>
                <h1 className="text text-black  font-medium">
                  Sustainable Sourcing
                </h1>
                <h3 className="text">100% Traceable European flax.</h3>
              </div>
              <div>
                <h1 className="text text-black  font-medium">
                  Artisan Finish
                </h1>
                <h3>Hand-finished seams and buttons.</h3>
              </div>
            </div>
            <button className="w-60 h-12  rounded-full bg-black text-white hover:bg-[#DFFF00] hover:text-gray-600">
              Learn About Our Process{" "}
            </button>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
