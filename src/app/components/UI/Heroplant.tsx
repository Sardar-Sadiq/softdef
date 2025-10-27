import React from "react";
import Image from "next/image";
import Button from "./Button";
import { ChevronRight } from "lucide-react";
import Card from "./Card";
const Heroplant = () => {
  return (
    <div className="p-2  sm:p-6 md:p-8  lg:p-10">
      <Card className="w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-md lg:w-lg mx-auto">
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8 text-white">
          <div className="-mt-39   md:-mt-40 lg:-mt-50 flex justify-center">
            <Image
              src={`/plant1.png`}
              alt="Aglaonema plant"
              width={600}
              height={600}
              className="h-auto w-80 sm:w-96 md:w-120 lg:w-150 drop-shadow-2xl transform scale-110 sm:scale-115 md:scale-120 lg:scale-125"
              priority
            />
          </div>
          <div className="w-full mt-4 sm:mt-5 md:mt-6 space-y-1 sm:space-y-2">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] opacity-50 font-normal">Indoor plant</h2>
            <div className="flex justify-between items-center gap-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-medium">Aglaonema plant</h1>
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 opacity-60" />
            </div>
            <div className="mt-6 sm:mt-8">
              <Button />
            </div>
          </div>
          <div className="flex justify-center space-x-1.5 sm:space-x-2 mt-6 sm:mt-7 md:mt-8">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 rounded-full"></span>
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white rounded-full"></span>
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 rounded-full"></span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Heroplant;

