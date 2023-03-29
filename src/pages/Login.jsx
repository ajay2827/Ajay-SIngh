import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Saly from "../assets/Saly-10.png";
import Facebook from '../assets/Facebook.png'
import Google from '../assets/google.png'
import Apple from '../assets/apple.png'
import yourName from "../assets/YourLogo.png";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  // defing roast option
  const toastOptions = {
    position: "top-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
  //defing state
  const [email, setEmail] = useState();
  const [password, setPasword] = useState();
 
  

  const handlesubmit = (e) => {
    e.preventDefault();

    // getting user information
    const exitinguser = JSON.parse(localStorage.getItem("user"));
    if (!exitinguser) {
      toast.error("Sign up first", toastOptions);
      return;
    }
    console.log(exitinguser);

    // checking state
    if (!email || !password) {
      toast.error("Please Fill all the Feilds.", toastOptions);
      return;
    }

    const userinfoemail = exitinguser.email;
    const userinfopassword = exitinguser.password;
 

    if (userinfoemail !== email || userinfopassword !== password) {
      toast.error("Wrong credential", toastOptions);
      return;
    }
    toast.success("Login Successfull", toastOptions);
    setTimeout(()=>{
      navigate("/home");
    },"1500")
  };

  return (
    <div className="relative flex items-center justify-between w-full h-screen p-5">
      {/* left */}
      <div className="flex flex-col items-start h-full max-w-3xl max-h-screen justify-items-start">
        {/* logo */}
        <div>
          <img src={yourName} alt="logo" className=" w-36" />

          {/* Sign-up form */}
          <form
            className="relative flex flex-col justify-center max-w-md left-20 top-12 min-h-min"
            onSubmit={handlesubmit}
          >
            <div>
              <h2 className="mb-4 text-4xl font-black font-popin text-darkblack">
                Sign in
              </h2>
              <p className="mb-1 text-sm font-semibold font-popin text-darkblack">
                if you don't have an account register
              </p>
              <p className="text-sm font-semibold font-popin text-darkblack">
                You can{" "}
                <Link
                  className="text-base font-semibold whitespace-nowrap text-link font-popin"
                  to="/"
                >
                  {" "}
                  Register here !
                </Link>
              </p>
            </div>

            <div className="relative flex flex-col top-10 ">
              {/* email */}
              <div class="relative z-0 w-border mb-6 group">
                <label
                  for="email"
                  className="block text-sm text-gray-500 font-popin"
                >
                  Email
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="relative w-5 h-5 text-darkblue top-2 right-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className=" placeholder:text-left block py-2.5 text-center px-0 w-full text-base text-darkblue bg-transparent font-popin font-medium border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-darkblue peer placeholder:text-darkblue placeholder:text-base placeholder:font-popin  placeholder:font-medium "
                  placeholder="        Enter your email address "
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              </div>

              {/* password */}

              <div class="relative z-0 w-full mb-4 group">
                <label
                  for="email"
                  className="block text-sm text-darkblue font-popin"
                >
                  Password
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="relative w-5 h-5 text-gray-900 top-2 right-3"
                    viewBox="0 0 13 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0033 7.2296V4.53742C11.0105 3.31927 10.524 2.14798 9.65545 1.29383C8.81572 0.457706 7.7165 0 6.55242 0C6.5344 0 6.51277 0 6.49475 0C4.01161 0.00360399 1.99338 2.03625 1.99338 4.53742V7.2296C1.05634 7.34132 0.371582 8.12699 0.371582 9.07844V15.1259C0.371582 16.1531 1.19329 17 2.22043 17H10.7799C11.807 17 12.6287 16.1531 12.6287 15.1259V9.07844C12.6251 8.13059 11.9404 7.34132 11.0033 7.2296ZM2.71057 4.53742H2.71417C2.71417 2.43269 4.41165 0.709985 6.49836 0.709985H6.50196C7.49306 0.706381 8.44451 1.09922 9.14729 1.79839C9.8789 2.52279 10.2861 3.51028 10.2789 4.53742V7.2332H9.48606V4.53742C9.49327 3.71931 9.16891 2.93364 8.58867 2.35701C8.04086 1.8092 7.29844 1.49926 6.52359 1.49926H6.50196C4.84413 1.49926 3.50345 2.86156 3.50345 4.53381V7.2332H2.71057V4.53742ZM8.76887 4.53742V7.2332H4.22785V4.53742C4.22785 3.26161 5.24417 2.22366 6.50557 2.22366H6.52719C7.11104 2.22366 7.67326 2.45792 8.08771 2.87238C8.5274 3.31206 8.77608 3.91393 8.76887 4.53742ZM11.9404 15.1367C11.9404 15.7674 11.4286 16.2792 10.7979 16.2792H2.23484C1.60414 16.2792 1.09238 15.7674 1.09238 15.1367V9.09646C1.09238 8.46576 1.60414 7.954 2.23484 7.954H10.7979C11.4286 7.954 11.9404 8.46576 11.9404 9.09646V15.1367Z"
                      fill="#000842"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  name="floating_email"
                  id="floating_email"
                  className=" placeholder:text-left block py-2.5 text-center px-0 w-full text-base text-darkblue bg-transparent font-popin font-medium border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-darkblue peer placeholder:text-darkblue placeholder:text-base placeholder:font-popin  placeholder:font-medium "
                  placeholder="        Enter your Password "
                  onChange={(e) => setPasword(e.target.value)}
                
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="relative w-4 h-4 text-gray-900 cursor-pointer top-3 left-72"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.89355 4.78272L8.89765 6.78681L8.90719 6.68184C8.90719 5.62888 8.05148 4.77318 6.99853 4.77318L6.89355 4.78272Z"
                      fill="#ABABAB"
                    />
                    <path
                      d="M6.99819 3.50075C8.75415 3.50075 10.1793 4.9259 10.1793 6.68186C10.1793 7.09222 10.0966 7.4835 9.95344 7.84295L11.8144 9.70389C12.7751 8.90225 13.5322 7.86523 13.9998 6.68186C12.896 3.88887 10.1825 1.91022 6.99821 1.91022C6.1075 1.91022 5.25498 2.06926 4.46289 2.35556L5.83712 3.7266C6.19655 3.58664 6.58782 3.50075 6.99819 3.50075Z"
                      fill="#ABABAB"
                    />
                    <path
                      d="M0.636209 1.76711L2.08679 3.21769L2.37628 3.50718C1.32652 4.3279 0.496251 5.41903 0 6.6819C1.10067 9.4749 3.81731 11.4535 6.99842 11.4535C7.98457 11.4535 8.92616 11.2627 9.78825 10.9159L10.0587 11.1863L11.9132 13.0441L12.7244 12.2361L1.44739 0.955933L0.636209 1.76711ZM4.15452 5.28223L5.13748 6.26519C5.10885 6.40199 5.08976 6.53875 5.08976 6.6819C5.08976 7.73486 5.94547 8.59056 6.99842 8.59056C7.14157 8.59056 7.27836 8.57147 7.41197 8.54284L8.39493 9.5258C7.97183 9.73576 7.50105 9.86301 6.99842 9.86301C5.24245 9.86301 3.81731 8.43787 3.81731 6.6819C3.81731 6.1793 3.94457 5.70849 4.15452 5.28223Z"
                      fill="#ABABAB"
                    />
                  </svg>
                </div>
              </div>

              {/* remember me */}
              <div className="relative z-0 flex justify-between w-full">
                <span className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4  border-gray-800 "
                  />
                  <label
                    for="default-checkbox"
                    class="ml-2 mb-1 text-xs font-medium font-popin text-gray-500 "
                  >
                    Remember me
                  </label>
                </span>

                <span>
                <p className="text-xs text-gray-400 cursor-pointer font-popin">Forget Password ?</p>
               </span>
              </div>
              {/* button */}
              <button
                type="submit"
                className="h-10 mt-5 text-base font-medium text-white rounded-3xl hover:bg-opacity-90 bg-button font-popin"
              >
                Login
              </button>
               
               <p className="text-sm text-center text-gray-400 mt-7 font-popin" >or continue with</p>

               <div className="flex items-center w-full mt-8 justify-evenly">
                <img className="cursor-pointer " src={Facebook} alt="facebook" />
                <img  className="cursor-pointer " src={Apple} alt="apple" />
                <img  className="cursor-pointer " src={Google} alt="google" />
               </div>

            </div>
          </form>
        </div>
      </div>
      {/* right */}
      <div className="relative flex flex-col items-center max-w-5xl min-h-full mr-16 left-64 justify-items-center bg-darkblue rounded-2xl">
        <span className="relative flex items-center w-full mt-2 space-x-2 text-white justify-items-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-3 h-3 mr-2 text-white right-32 top-3"
          >
            <path
              d="M13.6189 10.2746L11.6652 8.32085C10.9674 7.62308 9.7812 7.90222 9.50209 8.80928C9.29276 9.4373 8.595 9.78618 7.96701 9.6466C6.57148 9.29772 4.68751 7.48353 4.33863 6.01822C4.1293 5.39021 4.54796 4.69244 5.17595 4.48314C6.08304 4.20403 6.36215 3.01783 5.66438 2.32007L3.71064 0.366327C3.15243 -0.122109 2.31511 -0.122109 1.82668 0.366327L0.500926 1.69208C-0.824827 3.08761 0.640479 6.78576 3.91997 10.0653C7.19947 13.3448 10.8976 14.8799 12.2931 13.4843L13.6189 12.1586C14.1074 11.6003 14.1074 10.763 13.6189 10.2746Z"
              fill="white"
            />
          </svg>
          <span className="absolute text-sm right-4 font-popin top-2">
            +94 0116 789 754
          </span>
        </span>
        <div className="flex items-start justify-center w-svg h-svg">
          <img
            src={Saly}
            className="relative max-w-md scale-110 bottom-6"
            alt="pic"
          />
        </div>
        <span className="relative flex flex-col justify-start text-white right-36 bottom-5 gap-y-2">
          <h1 className="text-3xl font-semibold font-popin">Sign Up to name</h1>
          <p className="text-sm font-extralight font-popin">
            Lorem Ipsum is simply
          </p>
        </span>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
