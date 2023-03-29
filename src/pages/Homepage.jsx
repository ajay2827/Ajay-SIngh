import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";

const Homepage = () => {
  const navigate = useNavigate();

   useEffect(()=>{
    const exitinguser = () => {
      const exitinguser = JSON.parse(localStorage.getItem("user"));
      if (!exitinguser) {
        navigate("/");
      }
    };
    exitinguser();
   },[navigate])

  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Header/>
      <Hero/>
      <Logo/>
      <About/>
      <Portfolio/>
      <Testimonials/>
      <Cta/>
      <Footer/>
    </div>
  );
};

export default Homepage;
