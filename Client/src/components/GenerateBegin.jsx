import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion";
import { useOnClickHandler } from '../utils/Utils';

const GenerateBegin = () => {
  const onClickHandler = useOnClickHandler();

  return (
    <motion.div 
    initial={{opacity:0.2 , y:100}}
    transition={{duration:1 , delay:0.5}} 
    whileInView={{opacity:1, y:0}}  
    viewport={{once:true}}
    className='pb-16 flex flex-col items-center '>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 py-6 md:py-10' >See the magic. Try now</h1>
      <button onClick={onClickHandler}  className='inline-flex gap-2 items-center px-12 py-5 rounded-full m-auto bg-black text-white hover:scale-105 transition-all duration-500'>
            <img className='h-6' src={assets.star_group} alt=""  />
            <p>Generate Now</p>  
      </button>
    </motion.div>
  )
}

export default GenerateBegin
