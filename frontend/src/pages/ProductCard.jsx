import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// className = "w- h- border "
export default function ProductCard() {
  return (
    <section className=" flex flex-col gap-12 ">
      <Navbar />
      <div className="w-full  border p-6 ">
        <div className="flex gap-4 ">
          <div className="w-150 h-150 border">
            <img scr="" alt="" />
          </div>
          <div className="w-150  border p-8">
            <div className="flex flex-col gap-20">
              <div className="flex flex-col gap-4 text-4xl text-black ">
                <span className="w-24 h-8 bg-black text-xl text-white text-center rounded-lg">
                  Tag
                </span>
                <span>Name</span>
                <span className="text-2xl">Price</span>
              </div>
            <div className = "flex flex-col gap-2 ">
                <button className="w-full h-10 bg-black text-white rounded-lg hover:bg-[#281c1c]">BUY</button>
                <button className="w-full h-10 bg-black text-white rounded-lg hover:bg-[#281c1c]">ADD TO CART</button>

            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
