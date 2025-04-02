import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col justify-center items-center my-32'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>How it Works</h1>

      <div className='space-y-4 w-full max-w-3xl text-sm mt-10'>
        {stepsData.map((item, index)=>(
          <div className='flex items-center gap-10 p-5 px-8 bg-white/20 cursor-pointer shadow-md hover:scale-[1.02] transition-all duration-300 border rounded-lg' key={index}>
            <img width={40} src={item.icon} alt="" />
            <div className='mt-3'> 
              <h2 className='text-xl font-medium'>{item.title}</h2>
              <p className='text-gray-500' >{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Steps
