import Image from "next/image";
import React from "react";
import Button from "./UI/Button";

// interface Plant {
//   id: number;
//   info: string;
//   price: string;
//   image: string;
// }

// const plantData: Plant[] = [
//   {
//     id: 1,
//     info: "I recently added a beautiful desk decoration plant to my workshop, and it has made such a positive difference!",
//     price: "599",
//     image: "/heroplant1.png",
//   },
//   {
//     id: 2,
//     info: "The greenary adds a touch of nature and serenity to my desk, making it feel more inviting and calming.",
//     price: "399",
//     image: "/heroplant2.png",
//   },
// ];

const Trendyplants: React.FC = () => {
  return (
    <>
      <section>
        <div className="w-[101.188rem] h-[31.25rem] bg-red-500 mx-auto flex justify-center items-center gap-20 ">
          <div className="-mt-20">
            <Image src={`/heroplant1.png`} alt="" width={601} height={732} />
          </div>
          <div>
            <div className="inter font-semibold">
              <h1 className="text-[clamp(1.75rem,3vw,2.375rem)  ]">For your Desks Decorations</h1>
              <p className="text-[clamp(1rem,2.5vw,1.25rem)]">
                I recently added a beautiful desk decoration plant to my
                workshop, and it has made such a positive difference!
              </p>
              <h1 className="text-[clamp(1.75rem,3vw,2.375rem)">Rs.599/-</h1>
            </div>

            <div className="flex gap-5">
              <Button className="font-medium">Explore</Button>
              <Image
                src={`/bag-icon.png`}
                alt=""
                width={34}
                height={34}
                className="w-8.5 h-8.5 flex mt-2.5 "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trendyplants;
