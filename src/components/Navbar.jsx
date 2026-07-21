import search from "../assets/search-2.png";
import shopping from "../assets/shopping-bag.png";
import user from "../assets/user-login.png";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className=" fixed w-full h-18 bg-white px-4 flex items-center  text-[#64748B]">
        <div className="font-bold text-3xl text-black ">ZARA</div>
        <div className="flex  w-full justify-center gap-4 text-[14px]">
          <div className="text-black border-b-2 font-thik hover:border-black font-bold transition-all duration-200">
            Home
          </div>
          <div className="">NEW COLLECTION</div>
          <div className="">TESTIMONIALS</div>
          <div className="">OCCASIONS</div>
          <div className="">LIMITED STOCK</div>
        </div>

        <button className="w-10">
          <img src={search} alt="Search" className="w-4 h-4" />
        </button>
        <button className="text-black w-10">
          <img src={shopping} alt="Search" className="w-4 h-4" />
        </button>
        <button className="text-black w-10">
          <img src={user} alt="Search" className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
