import React from "react";
import Navbar from "./UI/Navbar";

const HeroSection = () => {
  return (
    <>
    <div className='absolute top-0 left-0 w-full z-20'>
      <Navbar/>
    </div>
      <section className="h-[300vh] bg-[url('/HeroBG.png')] bg-no-repeat bg-cover bg-center relative"></section>
    </>
  );
};

export default HeroSection;
