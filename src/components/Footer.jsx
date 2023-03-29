import React from 'react'
import inst from '../assets/icon-instagram.png'
import face from '../assets/icon-facebook.png'
import dribble from '../assets/icon-dribbble.png'
import twi from '../assets/icon-twitter.png'
import env from '../assets/icon-envato.png'


const Footer = () => {
  return (
    <div className='flex flex-col w-full mt-16 h-ft gap-y-14 ' >
        {/* upper */}
      <div className='flex w-full justify-evenly' >
        {/* d1 */}
        <div className='flex flex-col justify-start gap-y-7' >
        <div>
          <svg
            className="w-20 h-6 "
            viewBox="0 0 81 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.1621 0.247648H18.0313V4.27196H22.8604V4.07759H18.1621V0.247648ZM42.0344 4.07759V4.27196H46.8636V4.07759H42.0344ZM10.8656 18.9762C9.84408 20.3073 8.29627 21.1431 6.46985 21.1431C2.72415 21.1431 0 18.2332 0 13.4969C0 8.91539 2.72415 5.78881 6.46985 5.78881C8.32722 5.78881 9.81312 6.59367 10.8037 7.92479V0H15.4781V20.7716H10.8656V18.9762ZM4.92204 13.6826C4.92204 16.4068 6.09837 17.6141 7.95575 17.6141C9.93694 17.6141 10.9895 16.1282 10.9895 13.5898V13.2493C10.9895 10.7108 9.9679 9.31782 7.95575 9.31782C6.12933 9.31782 4.92204 10.6489 4.92204 13.3731V13.6826ZM18.0932 6.16029H22.7985V20.7716H18.0932V6.16029ZM38.4711 11.299C38.4711 14.6732 35.8398 16.8092 31.7226 16.8092C30.8558 16.8092 30.051 16.7164 29.308 16.4997C28.658 16.5616 28.2246 16.8711 28.2246 17.2736C28.2246 17.7689 28.8746 18.1094 29.9272 18.1094H33.7348C38.2234 18.1094 40.638 19.7501 40.638 22.7528C40.638 26.0961 37.6662 27.9535 32.2489 27.9535C26.9863 27.9535 24.3241 26.5604 24.3241 23.9292C24.3241 22.5052 25.2528 21.4527 26.9554 20.8335C25.5314 20.4621 24.6956 19.5334 24.6956 18.2951C24.6956 17.0569 25.6242 16.0663 27.2649 15.54C25.8719 14.5804 25.067 13.0945 25.067 11.3609C25.067 8.17244 27.946 5.81977 31.9084 5.81977C34.3849 5.81977 36.397 6.77941 37.5114 8.32722C38.0377 6.96515 39.0283 6.16029 40.5142 6.16029V10.2465C39.8641 9.9679 39.0283 9.93694 38.3782 10.4322C38.4401 10.7108 38.4711 10.9895 38.4711 11.299ZM36.7994 23.4648C36.7994 22.3813 35.7779 21.917 33.2395 21.917H30.3915C28.9675 22.0408 28.0079 22.598 28.0079 23.5577C28.0079 24.5792 29.4319 25.1674 32.3417 25.1674C35.2207 25.1674 36.7994 24.5483 36.7994 23.4648ZM29.339 11.4228C29.339 12.8778 30.2986 13.8065 31.8155 13.8065C33.3633 13.8065 34.3229 12.9087 34.3229 11.3919V11.2371C34.3229 9.78216 33.3014 8.79156 31.8155 8.79156C30.3605 8.79156 29.339 9.81312 29.339 11.2371V11.4228ZM42.0963 6.16029H46.8017V20.7716H42.0963V6.16029ZM57.5522 17.3355V20.7716H54.0851C51.0514 20.5549 50.4632 19.1619 50.4013 16.5616V9.4726H48.4511V6.16029H50.4013V3.31231L55.0138 1.05251V6.16029H57.6451V9.4726H54.9828V16.3758C54.9828 17.0259 55.2924 17.3045 55.9425 17.3355H57.5522ZM71.86 16.283C71.86 19.1619 69.2287 21.236 65.6688 21.236C62.4803 21.236 60.1895 20.0596 58.6417 18.388L61.5206 16.1591C62.4803 17.2736 63.9043 18.0165 65.4521 18.0165C66.6594 18.0165 67.4023 17.5522 67.4023 16.7164C67.4023 15.9074 66.221 15.6515 64.5604 15.2917C64.3781 15.2522 64.1901 15.2114 63.9971 15.1685C61.5516 14.6423 58.8584 13.6207 58.8584 10.618C58.8584 7.83192 61.4587 5.78881 64.9258 5.78881C68.0214 5.78881 70.2503 6.93419 71.7362 8.66774C71.7362 8.72965 68.9501 10.7728 68.9501 10.7728C67.9595 9.65834 66.6284 8.9773 65.1735 8.9773C63.9971 8.9773 63.2851 9.44164 63.2851 10.2155C63.2851 11.0945 64.0863 11.2613 66.2116 11.7036L66.3498 11.7324C68.8573 12.2277 71.86 13.1873 71.86 16.283Z"
              fill="#1E266D"
            />
            <path
              d="M78.4605 20.4084C79.8481 20.4084 80.9729 19.2836 80.9729 17.896C80.9729 16.5084 79.8481 15.3835 78.4605 15.3835C77.0729 15.3835 75.9481 16.5084 75.9481 17.896C75.9481 19.2836 77.0729 20.4084 78.4605 20.4084Z"
              fill="#FF2E6A"
            />
            <path
              d="M78.4605 10.3586C79.8481 10.3586 80.9729 9.23375 80.9729 7.84617C80.9729 6.45859 79.8481 5.33374 78.4605 5.33374C77.0729 5.33374 75.9481 6.45859 75.9481 7.84617C75.9481 9.23375 77.0729 10.3586 78.4605 10.3586Z"
              fill="#FF2E6A"
            />
          </svg>
        </div> 
            <p className='text-lg leading-tight font-Dm text-text' >
            Digits is a website template built to <br/> work seamlesly with the WordPress<br/> block editor to create beautifully<br/> designed pages in minutes.
            </p>
        </div>
        {/* d2 */}
        <div className='flex flex-col gap-y-7' >
            <span className='font-bold font-DM text-mblue' >Pages</span>
            <ul className='flex flex-col text-text gap-y-2' >
                <li>Home</li>
                <li>About</li>
                <li>News</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </div>
        {/* d3 */}
        <div className='flex flex-col gap-y-7' >
        <span className='font-bold font-DM text-mblue' >Demos</span>
            <ul className='flex flex-col text-text gap-y-2' >
                <li>classis</li>
                <li>Boxy</li>
                <li>Gradient</li>
                <li>Minial</li>
                <li>Night</li>
            </ul>
        </div>
        {/* d4 */}
        <div className='flex flex-col gap-y-7' >
        <span className='font-bold font-DM text-mblue' >Resources</span>
            <ul className='flex gap-x-5' >
                <img src={face} alt="" />
                <img src={inst} alt="" />
                <img src={twi} alt="" />
                <img src={dribble} alt="" />
                <img src={env} alt="" />
            </ul>
            <span className=' font-DM text-mblue' >Download now <br/>Documentation</span>
           
        </div>
      </div>

    {/* lower part */}
      <div className='relative flex justify-around w-full top-10'>
        <span className='text-opacity-50 font-DM text-text' >Copyright © 2020 tempy.club</span>
         <span className='flex gap-x-5 text-text'>
            <span>Privacy Policy</span>
            <span>Term of Use</span>
            <span>GDPr</span>
         </span>
      </div>
    </div>
  )
}

export default Footer
