import Image from "next/image";
import React from "react";
import Button from "./UI/Button";

const plantData = [
  {
    Pinfo:
      "I recently added a beautiful desk decoration plant to my workshop, and it has made such a positive difference!",
    Price: "599",
    image: "/heroplant1.png"
  },
  {
    pinfo:
      "The greenary adds a touch of nature and serenity to my desk, making it feel mpre inviting and calming",
    Price: "399",
    image: "/heroplant2.png"
  },
];

const Trendyplants = (plantData) => {
  return (
    <div>
      <div>
        <svg
          width="1619"
          height="526"
          viewBox="0 0 1619 526"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <foreignObject x="-40" y="-40" width="1699" height="606">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={"backdrop-filter:blur(20px);clip-path:url(#bgblur_0_67_81_clip_path);height:100%;width:100%"}
            ></div>
          </foreignObject>
          <rect
            data-figma-bg-blur-radius="40"
            x="1"
            y="1"
            width="1617"
            height="524"
            rx="150"
            fill="white"
            fill-opacity="0.05"
            stroke="url(#paint0_linear_67_81)"
            stroke-width="2"
          />
          <defs>
            <clipPath
              id="bgblur_0_67_81_clip_path"
              transform="translate(40 40)"
            >
              <rect x="1" y="1" width="1617" height="524" rx="150" />
            </clipPath>
            <linearGradient
              id="paint0_linear_67_81"
              x1="83.9376"
              y1="62.0365"
              x2="337.159"
              y2="861.232"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.27" />
              <stop offset="0.615" stop-color="white" stop-opacity="0" />
              <stop offset="1" stop-color="white" stop-opacity="0.33" />
            </linearGradient>
          </defs>
        </svg>

        <div>
          <Image 
          src={"{plantData.image}"}
            width={601}
            height={732}
            
          />

          <div>
            <h1>For Your Desks Decorations</h1>
            <p>{plantData.pin}</p>
            <h1>Rs.{plantData.Price}</h1>
            <div>
              <Button>Explore</Button>
              <button>
                <Image
                src="/bag-icon.png"
                width={34}
                height={34}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trendyplants;
