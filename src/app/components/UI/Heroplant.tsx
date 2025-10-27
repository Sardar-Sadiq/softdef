import React from "react";
import Image from "next/image";
import Button from "./Button";
import { ChevronRight } from "lucide-react";
import Card from "./Card";
const Heroplant = () => {
  return (
    <div className="p-10">
      {/* <svg width="512" height="624" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="-15" y="-15" width="542" height="653.157">
          <div
            style={{
              backdropFilter: 'blur(7.5px)',
              clipPath: 'url(#bgblur_0_82_36_clip_path)',
              height: '100%',
              width: '100%',
            }}
          />
        </foreignObject>
        <path
          data-figma-bg-blur-radius="15"
          d="M0.5 62.2178C0.500045 21.6648 40.3416 -7.51024 79.6914 2.46973C133.868 16.2102 205.805 30.9339 263.007 30.1572C315.825 29.44 381.619 15.6259 432.31 2.63184C471.644 -7.45121 511.5 21.6942 511.5 62.2588V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2178Z"
          fill="white"
          fillOpacity="0.05"
          stroke="url(#paint0_linear_82_36)"
        />
        <defs>
          <clipPath id="bgblur_0_82_36_clip_path" transform="translate(15 15)">
            <path d="M0.5 62.2178C0.500045 21.6648 40.3416 -7.51024 79.6914 2.46973C133.868 16.2102 205.805 30.9339 263.007 30.1572C315.825 29.44 381.619 15.6259 432.31 2.63184C471.644 -7.45121 511.5 21.6942 511.5 62.2588V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2178Z" />
          </clipPath>
          <linearGradient id="paint0_linear_82_36" x1="32.5" y1="25.1572" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg> */}
      <Card>
        <div className="-mt-50 -ml-14">
            <Image
            src={`/plant1.png`}
            alt=""
            width={600}
            height={600}
            className="w-full h-auto max-w-150 drop-shadow-lg"
          />
          </div>
        <div className="flex flex-col items-center justify-between h-full p-6 text-white">
          

          
            <div className="w-full px-4">
              <h2 className="text-sm opacity-70">Indoor plant</h2>
              <div className="flex justify-between items-center w-full mt-1">
                <h1 className="text-2xl font-semibold">Aglaonema plant</h1>
                
              </div>
              <button>
                  <ChevronRight  size={24}/>
                </button>
              <Button />
            </div>
            
            
          
        </div>
      </Card>
    </div>
  );
};

export default Heroplant;
