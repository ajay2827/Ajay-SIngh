import React from 'react'
import Logo1 from '../assets/logo-1.png'
import Logo2 from '../assets/logo-2.png'
import Logo3 from '../assets/logo-3.png'
import Logo4 from '../assets/logo-4.png'
import Logo5 from '../assets/logo-5.png'
import Logo6 from '../assets/logo-6.png'
import Logo7 from '../assets/logo-7.png'


const Logo = () => {
  return (
    <div className='relative bottom-20 flex flex-col items-center space-y-8 '>
      <p className=' text-text text-opacity-50 text-sm' >Trusted by forward-thinking software teams around the world</p>
      <div className='flex gap-x-9' >
        <img src={Logo1} alt="netfix" />
        <img src={Logo2} alt="drawkit" />
        <img src={Logo3} alt="figma" />
        <img src={Logo4} alt="cinemax" />
        <img src={Logo5} alt="stripe" />
        <img src={Logo6} alt="google" />
        <img src={Logo7} alt="disney" />
      </div>
    </div>
  )
}

export default Logo
