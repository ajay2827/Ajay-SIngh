import React from "react";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'

const Portfolio = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center mt-28 h-about bg-portfolio">
      <h1 className=" mt-24 tracking-tight text-center text-3xl font-DM text-mblue font-bold">
      Simplicity meets innovative design
        </h1>
      <p className='relative mt-3 text-base tracking-tight font-DM text-text text-center '  >
        It's really easy to start using Digits.
        <br />
        Install the theme, choose a demo and
        <br />
        start designing the future of your business!
      </p>
      <button className="h-9 mt-5 px-5 text-sm font-medium text-white rounded-3xl hover:bg-opacity-90 bg-button font-DM">
        BuyDigits
      </button>

      <div className="w-full flex gap-x-5 relative top-4 ">
        <div className=" flex flex-col  w-72 h-img" >
            <img className=" scale-95  h-48" src={img1} alt="img1" />
            <img className=" relative bottom-5 scale-95  h-48" src={img2} alt="img2" />
            <img className=" relative bottom-5 scale-95  h-48" src={img3} alt="img3" />
        </div>
        <div className=" relative top-12 flex flex-col w-72 h-img" >
            <img src={img4} alt="img3" />
            <img src={img5} alt="img4" />
        </div>
        <div className="relative top-28  flex flex-col w-72 h-img" >
            <img src={img6} alt="img6" />
            <img src={img7} alt="img7" />
        </div>
        <div className=" relative top-40 flex flex-col w-72 h-img" >
            <img src={img8} alt="img8" />
            <img src={img9} alt="img9" />
        </div>
        <div className="  relative top-12 flex flex-col w-72 h-img" >
            <img src={img10} alt="img10" />
            <img src={img11} alt="img11" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
