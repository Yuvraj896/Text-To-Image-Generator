import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        <div className='inline-flex gap-2 text-stone-400 text-center bg-white px-6 py-1 rounded-full border-neutral-500 border' >
            <p >Text To Image Generator</p>
            <img src={assets.star_icon} alt="" />
        </div>

        <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[600px] mx-auto mt-5 text-center' >Turn Thoughts into  <span className='text-blue-600 drop-shadow'>Image</span>, in seconds.</h1>

        <p className='mt-5 mx-auto max-w-xl text-center'>Unleash Your Creativity with AI, Turn your imagination into visuals. Just type, and watch</p>

        <button className='flex gap-2 sm:text-lg text-white bg-black items-center w-auto  px-12 py-2.5 rounded-full mt-8'>
            Generate Images
            <img className='h-6' src={assets.star_group} alt="" />
        </button>
        
        <div className='flex flex-wrap justify-center gap-2  mt-5 rounded-md '>
            {Array(6).fill('').map((item, index) => (
                <img className='rounded-[2vw] hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10 ' src={index % 2 ? assets.sample_img_1 : assets.sample_img_2  } alt="" key={index} width={70} />
            ))}
        </div>

        <p className='mt-2 text-neutral-600'>Generated Images</p>
        
    </div>
  )
}

export default Header
