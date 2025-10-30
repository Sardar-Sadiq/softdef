import React from "react";
import Image from "next/image";
import SectionTitle from "./UI/SectionTitle";


interface Review { 
  id: number;
  name: string;
  text: string;
  image: string;
}

const reviewersData: Review[] = [
  {
    id: 1,
    name:"Shelly Russel",
    text:"Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
    image:"/review-1.png",
  }
]


const Reviews = () => {
  return (
    <>
      <section className="h-180 px-4 sm:px-8 lg:px-20 py-0 text-white ">
        <div className="flex  justify-center">
          <SectionTitle >Customer Review</SectionTitle>
        </div>

        <div className="relative ">
          <svg
            width="500"
            height="447"
            viewBox="0 0 549 507"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject x="-6.6" y="-15.6001" width="562" height="522.555">
              <div 
               
                style={{
                  backdropFilter: "blur(12.5px)",
                  clipPath:"url(#bgblur_0_11_150_clip_path)",
                  height:"100%",
                  width:"100%",
                }}
              
              />
            </foreignObject>
            <g filter="url(#filter0_d_11_150)" data-figma-bg-blur-radius="25">
              <path
                d="M18.4 87.7244C18.4 41.0784 59.5363 5.02568 105.934 9.82989C157.814 15.2018 223.208 20.6714 274.4 20.6714C325.592 20.6714 390.986 15.2018 442.866 9.82989C489.264 5.02568 530.4 41.0784 530.4 87.7244V402.555C530.4 445.081 495.926 479.555 453.4 479.555H95.4C52.8741 479.555 18.4 445.081 18.4 402.555V87.7244Z"
                fill="white"
                fill-opacity="0.05"
                shape-rendering="crispEdges"
              />
              <path
                d="M442.968 10.8242C488.794 6.07923 529.4 41.6895 529.4 87.7246V402.555C529.4 444.528 495.374 478.555 453.4 478.555H95.4C53.4264 478.555 19.4 444.528 19.4 402.555V87.7246C19.4 41.6895 60.0056 6.07923 105.832 10.8242C157.718 16.1967 223.154 21.6719 274.4 21.6719C325.646 21.6719 391.082 16.1967 442.968 10.8242Z"
                stroke="url(#paint0_linear_11_150)"
                stroke-width="2"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_11_150"
                x="-6.6"
                y="-15.6001"
                width="562"
                height="522.555"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="9" />
                <feGaussianBlur stdDeviation="9.2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_11_150"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_11_150"
                  result="shape"
                />
              </filter>
              <clipPath
                id="bgblur_0_11_150_clip_path"
                transform="translate(6.6 15.6001)"
              >
                <path d="M18.4 87.7244C18.4 41.0784 59.5363 5.02568 105.934 9.82989C157.814 15.2018 223.208 20.6714 274.4 20.6714C325.592 20.6714 390.986 15.2018 442.866 9.82989C489.264 5.02568 530.4 41.0784 530.4 87.7244V402.555C530.4 445.081 495.926 479.555 453.4 479.555H95.4C52.8741 479.555 18.4 445.081 18.4 402.555V87.7244Z" />
              </clipPath>
              <linearGradient
                id="paint0_linear_11_150"
                x1="30.4"
                y1="44.6479"
                x2="325.683"
                y2="547.273"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.2" />
                <stop offset="0.52" stop-opacity="0" />
                <stop offset="1" stop-color="white" stop-opacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 z-10">
                  <div>
                    <div className="flex  gap-5">
                      <Image src={`/review-1.png`} alt='review-pic' width={88} height={88} />
                      <div className="flex flex-col">
                        <h1>Shelly Russel</h1>
                        <Image src={`/stars.png`} alt='' width={131.1} height={19} />
                      </div>
                    </div>
                   <p className="">Just got my hands on some absolutely awesome plants, and I couldn&apos;t</p>
                  </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
