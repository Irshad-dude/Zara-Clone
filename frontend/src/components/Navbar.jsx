import search from "../assets/search-2.png";
import shopping from "../assets/shopping-bag.png";
import user from "../assets/user-login.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white ">
      <div className=" fixed w-full h-18  bg-white px-4 flex items-center  text-[#64748B]">
        <Link to="/">
          <div className="font-bold text-3xl text-black ">ZARA</div>
        </Link>
        <div className="flex w-full justify-center gap-4 text-[14px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black border-b-2 border-black font-bold"
                : "text-[#64748B] hover:border-b-2 hover:border-black transition-all duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "text-black border-b-2 border-black font-bold"
                : "text-[#64748B] hover:border-b-2 hover:border-black transition-all duration-200"
            }
          >
           COLLECTION
          </NavLink>

          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              isActive
                ? "text-black border-b-2 border-black font-bold"
                : "text-[#64748B] hover:border-b-2 hover:border-black transition-all duration-200"
            }
          >
            TESTIMONIALS
          </NavLink>

          <NavLink
            to="/occasions"
            className={({ isActive }) =>
              isActive
                ? "text-black border-b-2 border-black font-bold"
                : "text-[#64748B] hover:border-b-2 hover:border-black transition-all duration-200"
            }
          >
            OCCASIONS
          </NavLink>
        </div>
        <div className="relative w-60 mr-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-4 pl-10 pr-4 border rounded-2xl outline-none "
          />

          <img
            src={search}
            alt="Search"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
          />
        </div>
        <Link to="/collection" className="text-black w-10">
          <img src={shopping} alt="Search" className="w-4 h-4" />
        </Link>
        <Link to="/login" className="text-black w-10">
          <img src={user} alt="Search" className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}
