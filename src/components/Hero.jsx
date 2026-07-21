import image from "../assets/image.png";
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
      <div className="w-full h-120 bg-white ">
        <h1 className="text-5xl  pt-20 pl-16 text-black ">
          Fueling fashion aspirations, our platform embodies style evolution,
          offering a curated collection that defines oo contemporary elegance.
        </h1>
        <div className="flex w-full h-20 gap-12 justify-center  mt-8">
            <button className="w-40 h-12 rounded-full border border-black bg-[#DFFF00] flex items-center justify-center text-black">View Collection</button>
             <h1 className="text-x w-60 h-12 ">
          Discover Fashion
Excellence: Your Destination for Trendsetting Apparel
        </h1>
        </div> 
      </div>
    </section>
  );
}
