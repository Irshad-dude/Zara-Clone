import search from "../assets/search-2.png";
import shopping from "../assets/shopping-bag.png";
import user from "../assets/user-login.png";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
export default function Navbar() {
const navigate = useNavigate();

const [currentUser, setCurrentUser] = useState(() => {
  const savedUser = localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) : null;
});

function handleLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
}
  const { cartCount } = useCart();
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
            className="w-full h-6 pl-4 pr-4 border rounded-r rounded-l  outline-none text-black  text-[15px]"
          />

          <img
            src={search}
            alt="Search"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4"
          />
        </div>
        <Link to="/cart" className="text-black w-10 realtive">
          <span className= "text-[12px] w-4 h-4 rounded-full bg-red-500 text-[#FFFFFF] flex justify-center items-center absolute top-4 right-12">{cartCount}</span>
          <img src={shopping} alt="Search" className="w-4 h-4" />
        </Link>
       {currentUser ? (
  <button
    onClick={handleLogout}
    className="text-black w-10"
  >
    <img src={user} alt="Logout" className="w-4 h-4" />
  </button>
) : (
  <Link to="/login" className="text-black w-10">
    <img src={user} alt="Login" className="w-4 h-4" />
  </Link>
)}
      </div>
    </nav>
  );
}
