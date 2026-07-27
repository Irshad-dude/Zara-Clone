import image from "../assets/image.png";
import screen1 from "../assets/screen1.png";
import screen2 from "../assets/screen2.png";
import {Link} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
export default function Hero() {
  return (
    <section>
      <div className="w-[1450px] h-[700px] bg-[#EDC7FF] ">
        <div className="flex p-12 gap-16 ">
          <div className="max-w-sm w-full h-[500px] bg-[#542772]/80 rounded-2xl mt-20 p-4 shadow-xl flex flex-col">
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
              <div className="w-20 h-20 bg-[#DFFF00] rounded-full"></div>
              <h1 className="text-[14px] w-80 ">
                Explore an extensive collection, curated to redefine your
                wardrobe. Elevate your fashion quotient effortlessly.
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
      </div>
      <div className="w-full h-100 bg-white ">
        <h1 className="text-5xl  pt-20 pl-16 text-black ">
          Fueling fashion aspirations, our platform embodies style evolution,
          offering a curated collection that defines oo contemporary elegance.
        </h1>
        <div className="flex w-full h-20 gap-12 justify-center  mt-8">
          <Link to = "/collection" >
          <button className="w-40 h-12 rounded-full border border-black bg-[#DFFF00] flex items-center justify-center text-black">
            View Collection
          </button>
          </Link>
          <h1 className="text-x w-60 h-12 ">
            Discover Fashion Excellence: Your Destination for Trendsetting
            Apparel
          </h1>
        </div>
      </div>
      <div className="w-full h-150 ">
        <div className="flex justify-between p-4  ">
          <div className="w-60 h-12  text-black text-xl ">
            Our New Collection
          </div>
          <Link to="/collection">
          <div className="w-36 h-5  border-black border-b ">
            View All Collection
          </div>
          </Link>
        </div>
        <div className="flex gap-8 p-4">
          <div className="flex flex-1 bg-[#E1E1F5]  rounded-3xl overflow-hidden p-5">
            <img
              src={screen1}
              alt="Product"
              className="w-[45%] object-cover rounded-2xl hover:scale-105 duration-300"
            />
            <div className="flex flex-col justify-center ml-8">
              <h2 className="text-3xl font-semibold">
                Oversize Linen Blend Shirts
              </h2>
              <p className="text-2xl font-medium mt-2">49.95 EUR</p>
              <button className="mt-6 w-fit border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white duration-300">
                Buy
              </button>
            </div>
          </div>
          <div className="w-[380px] bg-[#F5F5F5] rounded-3xl p-5 flex flex-col">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">
                  Lyocell - Linen Shirts
                </h2>
                <p className="text-xl font-medium mt-1">99.95 EUR</p>
              </div>
              <button className="border border-black rounded-full w-12 h-12 hover:bg-black hover:text-white duration-300">
                +
              </button>
            </div>
            <img
              src={screen2}
              alt="Product"
              className="w-full h-48 object-cover rounded-2xl mt-5 hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
