import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import screen from "../assets/screen.png";
import screen3 from "../assets/screen3.png";
import screen4 from "../assets/screen4.png";
import screen5 from "../assets/screen5.png";
import screen6 from "../assets/screen6.png";
import screen18 from "../assets/screen18.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// className="w- h- border border-black rounded- bg-[#]"
// className="text- text-[] m"
const text = "Dress for Every Narrative.".split("");
function Occasion() {
  const categoryData = {
    casual: {
      title: "Casual Comforts",
      subtitle: "Elevated everyday essentials.",
      linkText: "Explore Category",
      isHighlighted: true,
    },
    evening: {
      title: "Evening Elegance",
      subtitle: "Sophistication after sunset.",
      linkText: "Explore Category",
      isHighlighted: false,
    },
    lounge: {
      title: "Lounge & Relax",
      subtitle: "Maximum comfort, zero compromise.",
      linkText: "Explore Category",
      isHighlighted: false,
    },
    weekend: {
      title: "Weekend Vibes",
      subtitle: "Effortless style for downtime.",
      linkText: "Explore Category",
      isHighlighted: false,
    },
    active: {
      title: "Active Wear",
      subtitle: "Performance meets aesthetic.",
      linkText: "Explore Category",
      isHighlighted: false,
    },
    work: {
      title: "Work Essentials",
      subtitle:
        "Elevate your professional silhouette with tailored excellence.",
      linkText: "Shop Professional",
      isHighlighted: false,
      icon: "briefcase",
    },
    formal: {
      title: "Formal Attire",
      subtitle: "Impeccable tailoring for big moments.",
      linkText: "Explore Category",
      isHighlighted: true,
    },
    seasonal: {
      title: "Seasonal Trends",
      subtitle: "Stay ahead of the fashion curve.",
      linkText: "Explore Category",
      isHighlighted: false,
    },
  };
  const products = [
    {
      image: screen3,
      title: "Striped Linen Blend Shirt",
      subtitle: "Autumn Collection",
      price: "49.95 EUR",
    },
    {
      image: screen6,
      title: "Linen Shirt",
      subtitle: "Modern shirt",
      price: "79.00 EUR",
    },
    {
      image: screen4,
      title: "Classic Oxford Shirt",
      subtitle: "Core Essentials",
      price: "39.95 EUR",
    },
    {
      image: screen5,
      title: "Linen Oversize Shirt",
      subtitle: "Modern Fit",
      price: "55.00 EUR",
    },
  ];
  return (
    <>
      <Navbar />
      <section className=" p-12 pt-24 flex flex-col gap-20 bg-white">
        <div className="relative flex">
          <div className="w-140 h-100 rounded-l-2xl bg-[#E1E1F5] p-12 flex flex-col gap-4 z-10">
            <div className="w-60 h-10 rounded-full flex items-center justify-center text-[18px] font-medium">
              ⎯⎯ CURATED COLLECTIONS
            </div>
            <h2 className="text-6xl font-bold text-black">
              {text.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(3px)",

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
            </h2>
            <p className="text-xl text-gray-600">
              From weekend whispers to boardroom power plays, ZARE defines the
              silhouette of your contemporary lifestyle.
            </p>
            <div className="flex gap-4">
              <Link to="/collection">
                <button className="w-36 h-14 rounded-full bg-[#DFFF00] border border-black">
                  Explore All
                </button>
              </Link>
              <button className="w-52 h-14 rounded-full border border-black hover:bg-black hover:text-white">
                View Lookbook
              </button>
            </div>
          </div>
          <div className="relative w-160 h-100 overflow-hidden rounded-r-2xl">
            <img
              src={screen18}
              alt=""
              className="w-full h-full object-cover brightness-95"
            />
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#E1E1F5] via-[#E1E1F5]/60 to-transparent"></div>
          </div>
        </div>
        <div className=" w-full h-200 bg-[#]">
          <div className="w-full h-26 rounded- bg-[#] flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-black">Style by Occasion</h1>
            <div className="flex justify-between">
              <p className="text-[15px]">
                Find your perfect fit for every chapter of your day.
              </p>
              <div className="flex items-center justify-center text-sm font-medium gap-2 text-black text-[15px]  ">
                <div className="w-20 h-8 bg-[#E1E1F5] rounded-full flex items-center justify-center text-black">
                  Man
                </div>
                <div className="w-28 h-8 bg-[#e9e9e7] rounded-full flex items-center justify-center">
                  Women
                </div>
                <div className="w-20 h-8 bg-[#e9e9e7]  rounded-full flex items-center justify-center text-black">
                  Kids
                </div>
                <div className="w-28 h-8 bg-[#DFFF00] rounded-full flex items-center justify-center text-black">
                  30% Off
                </div>
                <div className="w-30 h-8 bg-[#e9e9e7]  rounded-full flex items-center justify-center text-black">
                  Collections
                </div>
                <div className="w-30 h-8 bg-[#e9e9e7] rounded-full flex items-center justify-center text-black">
                  Best Seller
                </div>
              </div>
            </div>
          </div>
          {/* I continue the work from there. */}
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(categoryData).map(([key, data]) => (
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 3,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className={`w-60 h-70   mt-10 p-4 flex flex-col gap-2 rounded-2xl  justify-between hover:bg-[#DFFF00] ${
                  data.isHighlighted ? "bg-[#E1E1F5]  " : "bg-[#F3F3F3]"
                }  `}
              >
                <div>
                  <h1 className="text-3xl text-black font-bold">
                    {data.title}
                  </h1>
                  <p className=" font-thik">{data.subtitle}</p>
                </div>
                <div className="flex justify-between  ">
                  <p className="text-[#829505] mt-2">{data.linkText}</p>
                  <Link to="/collection">
                    <div className="w-12 h-12 rounded-full  bg-white hover:bg-[#a3ba30] text-black  flex items-center justify-center">
                      ↗
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full h-130  rounded-2xl bg-white shadow-sm flex flex-col gap-10  p-6 ">
          <div className="flex justify-between ">
            <h1 className="text-3xl text-black font-bold m">
              In the Spotlight: Work Essentials
            </h1>
            <Link to="/collection">
              <h1 className="text-s text-[#829505] font-thin m hover:underline">
                View All Collection ➤
              </h1>
            </Link>
          </div>
          <div className="flex gap-6">
            {products.map((data) => (
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 3,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="w-62 h-100 relative group "
              >
                <div className="w-60 h-80  rounded-2xl">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-80   rounded-2xl object-cover"
                  />
                  <div className="absolute top-2 right-3 w-10 h-10 bg-[#DFFF00] rounded-full text-[20px] font-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                    +
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-black text-l  m">{data.title}</p>
                  <div className="flex justify-between w-60">
                    <h2>{data.subtitle}</h2>
                    <h1>{data.price}</h1>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Occasion;
