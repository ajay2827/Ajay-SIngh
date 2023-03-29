import React from 'react'
import Graphic from '../assets/Graphic.png'

const Hero = () => {
  return (
    <div className=' w-full h-hero mt-5'>
      <div className=' w-full h-bg flex flex-col items-center bg-gradient-to-t from-lightblue1 to-white'>
       
       <div className='flex flex-col relative mt-14'>
        <h1 className=' text-4xl tracking-tight text-center font-DM font-bold text-mblue'>Good design meets</h1>
        <h1 className='text-4xl tracking-tight font-DM font-bold text-mblue' >great user experience</h1>
       </div>
        <p className='relative mt-3 text-base tracking-tight font-DM text-text text-center ' >For everyone, from begin to experts</p>
        <div className='flex gap-x-4 mt-5' >
            <button className='h-9 px-5 text-sm font-medium text-white rounded-3xl hover:bg-opacity-90 bg-button font-DM'>BuyDigits</button>
            <button className='h-9 px-5 text-sm font-medium text-button rounded-3xl hover:bg-opacity-90 bg-white shadow-gray-200  shadow-sm	font-DM' >See the Features</button>
        </div>
        <div className='relative top-20'>
          <img className='w-96 scale-150' src={Graphic} alt="graphic" />
        </div>
      </div>
    </div>
  )
}

export default Hero
