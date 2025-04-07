import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useOnClickHandler } from "../utils/Utils";


const Header = () => {
    
    const {user , setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()
    const onClickHandler = useOnClickHandler();

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="inline-flex gap-2 text-stone-400 text-center bg-white px-6 py-1 rounded-full border-neutral-500 border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        <p>Text To Image Generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>

      <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[600px] mx-auto mt-5 text-center">
        Turn Thoughts into{" "}
        <motion.span
          className="text-blue-600 drop-shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 2 }}
        >
          Image
        </motion.span>
        , in seconds.
      </h1>

      <motion.p
        className="mt-5 mx-auto max-w-xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Unleash Your Creativity with AI, Turn your imagination into visuals.
        Just type, and watch
      </motion.p>

      <motion.button
        onClick={onClickHandler}
        className="flex gap-2 sm:text-lg text-white bg-black items-center w-auto  px-12 py-2.5 rounded-full mt-8"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="" />
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-2  mt-5 rounded-md "
      >
        {Array(6)
          .fill("")
          .map((item, index) => (
            <motion.img
              whileHover={{ scale: 1.05, duration: 0.1 }}
              className="rounded-[2vw] hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10 "
              src={index % 2 ? assets.sample_img_1 : assets.sample_img_2}
              alt=""
              key={index}
              width={70}
            />
          ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-2 text-neutral-600"
      >
        Generated Images
      </motion.p>
    </motion.div>
  );
};

export default Header;
