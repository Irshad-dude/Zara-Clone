import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import screen from "../assets/screen.png";
// className="w- h- border border-black rounded- bg-[#]"
function Occasion() {
  return (
    <>
      <Navbar />
      <section className=" p-12 pt-24 flex flex-col gap-20">
        <div className="w-full h-100  rounded-2xl bg-[#EDEDE8] flex gap-12 ">
          <div className="w-140 h-100  rounded-tl-2xl rounded-bl-2xl bg-[#E1E1F5] p-12  flex flex-col gap-4 ">
            <div className="w-60 h-10 border border-black rounded-full bg-[#DFFF00] text-center text-[16px]">
              CURATED COLLECTIONS
            </div>
            <h2 className="w- h- rounded- bg-[#] text-6xl font-bold text-black ">
              Dress for Every Narrative.
            </h2>
            <p className="text-xl">
              From weekend whispers to boardroom power plays, ZARE defines the
              silhouette of your contemporary lifestyle.
            </p>
            <div className="flex gap-4">
              <button className="w-36 h-14 border border-black rounded-full bg-[#DFFF00]">
                Explore All
              </button>
              <button className="w-52 h-14 border border-black rounded-full text-black ">
                View Lookbook
              </button>
            </div>
          </div>
          <div className=" ml-30 overflow-hidden  rounded-xl">
            <img
              src={screen}
              alt="Search"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div className=" w-full h-160 border border-black rounded- bg-[#]">
          <div className="w-full h-26 rounded- bg-[#] flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-black">Style by Occasion</h1>
            <div className="flex justify-between">
              <p className="text-[15px]" >Find your perfect fit for every chapter of your day.</p>
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
         <div className="w-40 h-40 border border-black rounded- bg-[#]" ></div>
        </div>
      </section>
    </>
  );
}

export default Occasion;
