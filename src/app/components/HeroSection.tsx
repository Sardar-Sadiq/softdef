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
      <section className="h-[300vh] bg-[url('/HeroBG.png')] text-white bg-no-repeat bg-cover bg-center relative">
        <main className="flex flex-col lg:flex-row">
          <div>
            {/* left first box */}
            <div className="">
              <div className="flex flex-col">
                <h1>Earth&#39;s Exhale</h1>
                <p>
                  &quot;Earth Exhale&quot; symbolizes the purity and vitality of
                  the Earth&#39;s natural environment and its essential role in
                  sustaining life.
                </p>
              </div>

              <div className="flex flex-col mt-10">
                <Button />
                <div className="flex">
                  <Image
                    src={`/livedemo.png`}
                    alt="livedemo"
                    width={70}
                    height={70}
                    className="w-17.5 h-17.5"
                  />
                  <a href="#">Live demo</a>
                </div>
              </div>
            </div>

            {/* left second box */}
            <div>
              <div className="flex ">
                <Image
                  src={`/reviewer0.png`}
                  alt="reviewer pic"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
                <div className="flex flex-col">
                  <h1>Ronnie Hamill</h1>
                  <Image
                    src={`/stars.png`}
                    alt="rating"
                    width={103.5}
                    height={15}
                    className="w-[6.469rem] h-[0.938rem]"
                  />
                </div>
                <p>I can&#39;t express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
              </div>
            </div>

            {/* right box */}
            <div>
              <Heroplant />
              
            </div>

          </div>
        </main>
      </section>
    </>
  );
};

export default HeroSection;
