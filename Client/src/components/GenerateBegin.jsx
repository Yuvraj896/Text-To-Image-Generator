import React from 'react'
import { assets } from '../assets/assets'

const GenerateBegin = () => {
  return (
    <div className='pb-16 flex flex-col items-center '>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 py-6 md:py-10' >See the magic. Try now</h1>
      <button  className='inline-flex gap-2 items-center px-12 py-5 rounded-full m-auto bg-black text-white hover:scale-105 transition-all duration-500'>
            <img className='h-6' src={assets.star_group} alt=""  />
            <p>Generate Now</p>  
      </button>
    </div>
  )
}

export default GenerateBegin
