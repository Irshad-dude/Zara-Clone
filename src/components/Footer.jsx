import search from "../assets/search-2.png";
import shopping from "../assets/shopping-bag.png";
import user from "../assets/user-login.png";
export default function Footer() {
  return (
    <section className=" bg-gray-20">
      <div className=" w-full h-40 bg-[#110d0df8] px-4 flex items-center  text-[#747a82]">
        <div className="font-bold text-4xl text-whit p-4 ">ZARA</div>
        <div className="flex  w-full justify-center gap-4 text-[14px]">
          <div className="text-white border-b-2 font-thik hover:border-black font-bold transition-all duration-200">
            Journal
          </div>
          <div className="">Sustainability</div>
          <div className="">Shipping</div>
          <div className="">Returns</div>
          <div className="">Privacy</div>
        </div>
        <button className="text-black w-10">
          <img src={shopping} alt="Search" className="w-4 h-4" />
        </button>
        <button className="text-black w-10">
          <img src={user} alt="Search" className="w-4 h-4" />
        </button>
      </div>
      <div className="bg-[#110d0df8] flex justify-center  text-[#747a82] text-[12px] ">
        © 2024 ZARE editorial retail. All rights reserved.
      </div>
    </section>
  );
}
