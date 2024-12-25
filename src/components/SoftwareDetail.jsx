import React from "react";
import SoftwareDetailCard from "./SoftwareDetailCard";
import Regen from "./Regen";
import BackButton from "./BackButton";
import CommonFooter from "./CommonFooter";
import { Data } from "../ComponentData/Technologies/SoftwareData";
import { useMediaQuery } from "react-responsive";
function SoftwareDetail({ images, onClose }) {

  const isLarge = useMediaQuery({ query: "(min-width: 825px)" }); 
  
  
  return (
    <>
      <div className="fixed inset-0 flex flex-col z-20 w-full pb-10 bg-gray-100 overflow-y-auto p-2">
        {/* Header Section */}
        <div className="text-center p-4 mt-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:mt-5">Discover Move OS</h1>
          <p className="text-lg sm:text-xl lg:text-2xl mt-6 2xl:mt-5">
            Explore the cutting-edge technology and seamless experience powered by Move OS.
          </p>
        </div>

        {/* What's New Section */}
        <div className="text-center px-10">
          <h2 className="text-xl 2xl:mt-5 sm:text-2xl lg:text-3xl bg-black 2xl:w-1/2 2xl:mx-[25%] md:w-1/2 md:mx-[26%] text-white py-4 font-semibold">
            What's New with Move OS 4
          </h2>
        </div>

        {/* Full-Width Image with Text Overlay */}
        <div className="relative w-full 2xl:mx-auto 2xl:w-[80vw] h-auto p-3 mt-1">
        <img
        src={
          images.length === 1
            ? images[0] 
            : isLarge
            ? images[1] 
            : images[0] 
        }
  alt="Move OS"
  className="w-full h-full object-cover"
/>

</div>

        {/* Make the Most Section */}
        <div className="text-center py-5  2xl:mt-7">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Make the Most with Move OS 4
          </h2>
          <p className="text-md sm:text-lg lg:text-xl mt-5">
            Unlock the potential of your rides with features designed for convenience and efficiency.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  2xl:gap-10 gap-5 bg-gray-200 p-4 2xl:px-40 xl:px-14  md:px-10 lg:px-10  mt-10">
          {Data.cardsData.map((card, index) => (
            <div
              key={index}
              className="relative rounded-xl shadow-lg overflow-hidden h-64 sm:h-72 lg:h-80 md:h-80 "
            >
              <SoftwareDetailCard
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </div>
          ))}
        </div>

        {/* Back Button */}
        <BackButton onClose={onClose} />

        {/* Regen Section */}
        <Regen RegenData={Data.RegenData} />

        {/* Personalize Section */}
        <div className="flex flex-col items-center justify-center mt-5 mb-5 p-3">
          <h1 className="text-2xl sm:text-4xl lg:text-4xl font-semibold">
            Personalize Your Ride
          </h1>
          <p className=" sm:text-2xl lg:text-2xl mx-3 text-center mt-5">
            Customize the look and feel of your HMI and the companion app whenever, wherever. Match
            the look, to your vibe.
          </p>
        </div>

        {/* Footer */}
        <CommonFooter />
      </div>
    </>
  );
}
export default SoftwareDetail;
