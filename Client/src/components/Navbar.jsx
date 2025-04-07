import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";


const Navbar = () => {
    const {user, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate();
    return (
    <motion.div
    initial={{opacity:0.4, y:-20}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}  
    viewport={{once:true}}
    className="flex items-center justify-between py-4">
      <Link to="/">
        <img
          className="w-28 sm:w-28 md:w-32 lg:w-40"
          src={assets.logo}
          alt=""
        />
      </Link>

      <div>
        {user ? 
          <div className="flex items-center gap-2 sm:gap-3" >
            <button onClick={()=> navigate('/buy')} className="flex items-center gap-[4px] bg-blue-100 px-4 sm:px-4 py-1.5 sm:py-2 rounded-full hover:scale-105 transition-all">
                <img src={assets.credit_star} className="w-5" alt="" />   
                <p className="text-xs sm:text-sm font-medium text-gray-600">Credits left : 50</p>
            </button>
            
            <h3 className="text-gray-600 max:sm-hidden pl-4" >Hi, Yuvraj</h3>
            <div className="relative group">
                <img src={assets.profile_icon} className="w-10 drop-shadow" alt="" />   
                <div className=" absolute hidden group-hover:block top-0 right-[-50px] z-10 text-black rounded p-12">
                    <ul className="list-none text-sm bg-white p-2 rounded-md border m-0">
                        <li className="cursor-pointer pr-4 ">LogOut</li>
                    </ul>
                </div>
            </div>


          </div>
         : 
          <div className="flex items-center gap-3 sm:gap-5">
            <h3 onClick={() => navigate("/buy")} className="cursor-pointer">
              Pricing
            </h3>
            <button onClick={()=> setShowLogin(true)} className="px-7 py-2 bg-zinc-800 rounded-full text-white sm:px-3 ">
              Login
            </button>
          </div>
        }
      </div>
    </motion.div>
  );
};

export default Navbar;
