import search from "../assets/search-2.png";
import shopping from "../assets/shopping-bag.png";
import user from "../assets/user-login.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className=" bg-gray-20"
    >
      <div className=" w-full h-40 bg-[#110d0df8] px-4 flex items-center  text-[#747a82]">
        <Link to="/">
          <div className="font-bold text-4xl text-whit p-4 text-white ">
            ZARA
          </div>
        </Link>
        <div className="flex  w-full justify-center gap-4 text-[14px]">
          <div className="hover:text-white">Journal</div>
          <div className="hover:text-white">Sustainability</div>
          <div className="hover:text-white">Shipping</div>
          <div className="hover:text-white">Returns</div>
          <div className="hover:text-white">Privacy</div>
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
    </motion.section>
  );
}
