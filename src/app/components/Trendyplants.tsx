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
            <div className="w-auto h-131.5 mx-5 md:mx-10 lg:mx-20 px-5 md:px-10 lg:px-20  flex flex-row justify-center items-center gap-25 border-2 bg-white/5 border-white/33 backdrop-blur-xl rounded-[9.438rem] ">
          {/* image div */}
          <div className="-mt-44">
            <Image src={`/heroplant1.png`} alt="" width={600} height={600} 
              className="w-150 h-164"
            />
          </div>
          {/* info div */}
          <div className="flex flex-col">
            <div className="inter font-semibold">
              <h1 className=" text-[clamp(1.75rem,3vw,2.375rem)] mb-8.5">For your Desks Decorations</h1>
              <p className="text-[clamp(1rem,2.5vw,1.25rem)] mb-6">
                I recently added a beautiful desk decoration plant to my
                workshop, and it has made such a positive difference!
              </p>
              <h1 className="text-[clamp(1.75rem,3vw,2.375rem)] mb-6">Rs.599/-</h1>
            </div>

            <div className="flex gap-8">
              <Button className="font-medium">Explore</Button>
              <div className="border border-white p-2.5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <Image
                src={`/bag.png`}
                alt=""
                width={30}
                height={30}
                className="w-8 h-8 p-0.5"
              />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trendyplants;
