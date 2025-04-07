import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImage, setIsImage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {};

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col min-h-[90vh] justify-center items-center "
      onSubmit={onSubmitHandler}
      action=""
    >
      <div>
        <div className="relative">
          <img className="max-w-sm rounded" src={image} alt="" />
          <span
            className={`bg-blue-500 absolute bottom-0 left-0 h-1  
          ${loading ? "w-full transition-all duration-[10s]" : "w-0"}`}
          />
        </div>
        <p className={!loading ? "hidden" : ""}>Loading ...</p>
      </div>

      {!isImage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="flex max-w-xl w-full bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full"
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color "
            type="text"
            placeholder="Describe what you want to generate "
          />
          <button
            onClick={() => {
              setIsImage(true);
            }}
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
          >
            {" "}
            Generate{" "}
          </button>
        </motion.div>
      )}
      {isImage && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            onClick={() => {
              setIsImage(false);
            }}
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>
          <a
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
            download
            href={image}
          >
            Download{" "}
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
