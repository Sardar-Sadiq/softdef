import React from "react";
import Navbar from "./UI/Navbar";
import Image from "next/image";
import Heroplant from "./UI/Heroplant";
import Button from "./UI/Button";
const HeroSection = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <section className="h-[300vh] bg-[url('/HeroBG.png')] text-white bg-no-repeat bg-cover bg-center relative ">
        <main className="flex flex-col items-center pt-40 px-4 sm:px-8 lg:pl-20 lg:pr-0 lg:items-start lg:flex-row lg:gap-120">
          <div>
            {/* left first box */}
            <div className="flex items-center flex-col mt-10  lg:items-start">
              <div className="flex flex-col items-start inter lg:ml-0 ml-30 gap-0 ">
                <h1 className=" text-[clamp(2rem,8vw,118px)]  font-semibold">Earth&#39;s Exhale</h1>
                <p className="text-[clamp(1.5rem,2vw+1rem,1.875rem) ml-1 font-medium  opacity-75 max-w-xl">
                  &quot;Earth Exhale&quot; symbolizes the purity and vitality of
                  the Earth&#39;s natural  environment and its essential role in
                  sustaining life.
                </p>
              </div>

              <div className="flex  items-start lg:ml-0 md:-ml-15  mt-5 gap-5">
                <Button />
                <div className="flex gap-5">
                  <Image
                    src={`/livedemo.png`}
                    alt="livedemo"
                    width={70}
                    height={70}
                    className="w-17.5 h-17.5 -mt-1"
                  />
                    <a href="#" className="indie text-[1.563rem] mt-3">Live demo</a>
                </div>
              </div>
            </div>

            {/* left second box */}
         
             <div className="flex-col items-center lg:ml-0 ml-30   lg:mt-40 md:mt-20 mt-10 rounded-[2.813rem] px-6 py-9 w-max border-2 border-white/28 bg-white/5 backdrop-blur-md">
              <div className="flex gap-8">
                <Image
                  src={`/reviewer0.png`}
                  alt="reviewer pic"
                  width={64}
                  height={64}
                  className="w-16 h-16 soft-card-review-shadow"
                />
                <div className="flex flex-col mt-3">
                  <h1 className="text-[1.375rem] inter font-normal">Ronnie Hamill</h1>
                  <Image
                    src={`/stars.png`}
                    alt="rating"
                    width={103.5}
                    height={15}
                    className="w-[6.469rem] h-[0.938rem]"
                  />
                </div>
                
              </div>
              <p className="w-[21.313rem] h-[3.938rem] opacity-75 text-[1.063rem] mt-6 mb-5 inter">I can&#39;t express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
            </div>
           </div>

            {/* right box */}
            <div className="lg:-ml-20 lg:mt-10  sm:mt-25">
              <Heroplant  />
              
            </div>

          
        </main>
      </section>
    </>
  );
};

export default HeroSection;
