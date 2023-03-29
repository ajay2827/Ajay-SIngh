import React from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'


const Testimonials = () => {
  return (
    <div className='w-full items-center mt-24 h-about flex flex-col '>
      
      <div className=' mb-12'>
         <h1 className=" tracking-tight text-center text-3xl font-DM text-mblue font-bold"  >What others are saying</h1>
      </div>

      <div className='flex w-full space-x-10 justify-center'>
        
    <div className="w-full h-96 p-2 max-w-sm flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow sm:p-6">
      <p className='relative mt-3 text-base tracking-tight font-DM text-text text-left ' >Completely beautiful website and <br/> amazing support! This is my second <br/> website from this author and I love <br/> both of the sites so much and she <br/> has helped me so well when I <br/> needed it!</p>
       <img src={p1} className="relative w-14 h-14 top-5" alt="p1" />
      <p className=' relative top-10 tracking-tight text-center text-xl font-DM text-mblue font-bold' >Happy User</p>
      <p className='relative top-10 tracking-tight text-center text-sm text-opacity-60 font-DM text-mblue font-bold' >tempy.club</p>
    </div>

    <div className="w-full h-96 p-2 max-w-sm flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow sm:p-6">
      <p className='relative mt-3 text-base tracking-tight font-DM text-text text-left ' >Really easy to use and customize. easy <br/> to understand. Darinka helped me with <br/> my site! She answers very quickly, a <br/> good service! Thank you very much!</p>
       <img src={p2} className="relative mt-10 w-14 h-14 top-5" alt="p2" />
      <p className=' relative top-10 tracking-tight text-center text-xl font-DM text-mblue font-bold' >Halyard Display</p>
      <p className='relative top-10 tracking-tight text-center text-sm text-opacity-60 font-DM text-mblue font-bold' >tempy.club</p>
    </div>

    <div className="w-full h-96 p-2 max-w-sm flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow sm:p-6">
      <p className='relative mt-3 text-base tracking-tight font-DM text-text text-left ' >Really pleasing to look at!<br/>Documentation including installation <br/> instructions are clear and that is <br/>coming from a relatively new <br/> WordPress user. </p>
       <img src={p3} className="relative mt-5 w-14 h-14 top-5" alt="p3" />
      <p className=' relative top-10 tracking-tight text-center text-xl font-DM text-mblue font-bold' >Happy User</p>
      <p className='relative top-10 tracking-tight text-center text-sm text-opacity-60 font-DM text-mblue font-bold' >tempy.club</p>
    </div>

      </div>
    </div>
  )
}

export default Testimonials
