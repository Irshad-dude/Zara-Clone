import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import screen15 from "../assets/screen15.png";
import screen16 from "../assets/screen16.png";
import screen17 from "../assets/screen17.png";
import screen18 from "../assets/screen18.png";
import screen19 from "../assets/screen19.png";
import Contact from "../components/Contact";
// className ="w- h- bg-[#] rounded- border"
// className ="text- text- bg-[#] font-"
export default function Testimonial() {
  return (
    <>
      <section className=" flex flex-col gap-18 w- h- bg-[#] ">
        <Navbar />
          <div className="relative w-full h-140 bg-[#F2F2F8] flex justify-center items-center gap-8">
            <div className="absolute right-0 top-1 w-60 h-60 bg-[#DFFF00] opacity-20 rounded-full "></div>
            <div className="w-140 h-105  p-10 flex flex-col gap-6 ">
              <h3 className=" w-44 h-6 bg-[#DFFF00] rounded-full text-center font-medium text-[15px]">
                COMMUNITY VOICE
              </h3>
              <h1 className="text-6xl text-black bg-[#] font-bold">
                50k+ User Love Our Brand
              </h1>
              <p className="text- text- bg-[#] font-">
                Read testimonials that echo satisfaction, quality, and style,
                making us their top choice for trendy fashion. Our community is
                at the heart of everything we curate.
              </p>
              <div className="flex gap-4">
                <button className="w-32 h-8 font-medium  bg-[#DFFF00] text-[15px] rounded-full ">
                  Shop Arrivals
                </button>
                <button className="w-36 h-8 text-black font-medium text-[15px]  hover:bg-[#000000] hover:text-white rounded-full border border-black ">
                  View Lookbook
                </button>
              </div>
            </div>
            <div className="w-85 h-115 bg-pink-200 shadow-sm rounded-xl  ">
              <img
                src={screen19}
                alt="Search"
                className="w-full h-full object-cover rounded-2xl  transition-transform duration-300 hover:scale-100"
              />
            </div>
          </div>
          {/* 2 */}
          <div className="w-full h-full  p-8 flex flex-col gap-4 ">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl text-black bg-[#] font-bold">
                Style Statements
              </h1>
              <div className="flex justify-between">
                <p className="text-[#5c7238]">
                  What our global community has to say.
                </p>
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-[#] rounded-full border hover:bg-black hover:text-white flex items-center justify-center">
                    ←
                  </div>
                  <div className="w-10 h-10 bg-[#] rounded-full border hover:bg-black hover:text-white flex items-center justify-center">
                    →
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className=" relative w-180 h-80 bg-[#dcfa18] rounded-4xl p-8 ">
                <h1 className="absolute right-0 top-0  text-[100px]  text-[#647400] font-">
                  ，{" "}
                </h1>
                <h1 className="text-3xl text-[#647400] bg-[#] font-bold">
                  "Absolutely love the range! The clothes fit perfectly, and the
                  shopping experience is seamless. ZARE has become my ultimate
                  fashion destination."
                </h1>
                <div>
                  <div className="w-16 h-16 bg-[#] rounded-full  mt-6 flex gap-4">
                    <img
                      src={screen17}
                      alt="Search"
                      className="w-full h-full object-cover rounded-full  transition-transform duration-300 hover:scale100"
                    />
                    <div>
                      <h1 className="w  h-4 text- bg-[#] font-  ">EmilyS.</h1>
                      <p className="italic text-[14px] bg-[#] font- mt-2 ">
                        Stylist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-110 h-80 bg-[#F2F2F8] rounded-4xl  p-8 flex flex-col gap-4">
                <h1 className="text-xl">☆ ☆ ☆ ☆ ☆</h1>
                <h3 className="text-xl">
                  "Incredible variety and quality! Found my style essentials
                  here, and the service is exceptional. Every piece feels
                  custom-made."
                </h3>
                <div className="w-12 h-12 bg-[#] rounded-full  mt-6 flex gap-4">
                  <img
                    src={screen15}
                    alt="Search"
                    className="w-full h-full object-cover rounded-full  transition-transform duration-300 hover:scale100"
                  />
                  <div>
                    <h1 className="w  h-4 text- bg-[#] font-  ">SarahK.</h1>
                    <p className="text-[12px] bg-[#] w-30 font- mt-2 ">
                      FASHION BLOGGER
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-110 h-70 bg-[#efecec59] rounded-4xl  shadow-sm  p-6 flex flex-col gap-4">
                <h3 className="text-xl italic ">
                  "Impressed by the trendy selections! My go-to for every
                  occasion now. From work essentials to weekend vibes, they have
                  it all."
                </h3>
                <div className="w-12 h-12 bg-[#] rounded-full  mt-6 flex gap-4">
                  <img
                    src={screen16}
                    alt="Search"
                    className="w-full h-full object-cover rounded-full  transition-transform duration-300 hover:scale100"
                  />
                  <div>
                    <h1 className="w  h-4 text- bg-[#] font-  ">Alex.</h1>
                    <p className="text-[12px] bg-[#] w-30 font- mt-2 ">
                      Creative Director
                    </p>
                  </div>
                </div>
              </div>
              <div className=" relative w-180 h-60 rounded-4xl  ">
                <img
                  src={screen18}
                  alt="Search"
                  className="w-full h-full object-cover rounded-4xl  transition-transform duration-300 hover:scale100"
                />
              </div>
            </div>
          </div>
          <Contact/>
          <Footer/>
        </section>

    </>
  );
}
