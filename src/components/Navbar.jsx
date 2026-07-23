import search from "../assets/search-2.png";
import shopping from "../assets/shopping-bag.png";
import user from "../assets/user-login.png";
import {Link} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className=" fixed w-full h-18 bg-white px-4 flex items-center  text-[#64748B]">
        <Link to="/"><div className="font-bold text-3xl text-black ">ZARA</div></Link>
        <div className="flex  w-full justify-center gap-4 text-[14px]">
          <Link to="/"  className="text-black border-b-2 font-thik hover:border-black font-bold transition-all duration-200">
            Home
          </Link>
          <Link  to="/collection" className="">NEW COLLECTION</Link>
          <Link  to="/testimonials" className="">TESTIMONIALS</Link>
          <Link  to="/occasions" className="">OCCASIONS</Link>
          <Link  to="/stock" className="">LIMITED STOCK</Link>
        </div>

        <div className="w-10">
          <img src={search} alt="Search" className="w-4 h-4" />
        </div>
        <Link to="/collection"  className="text-black w-10">
          <img src={shopping} alt="Search" className="w-4 h-4" />
        </Link>
        <Link to="/login"  className="text-black w-10">
          <img src={user} alt="Search" className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}
