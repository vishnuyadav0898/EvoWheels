import React from "react";
import CommonBtn from "./CommonBtn";

const CenterCard = ({ name, address }) => {
  return (
   
    <div className="bg-white text-black mt-2 mb-10 flex flex-col justify-center w-full h-full items-center rounded-xl shadow-md border border-gray-200 p-5 2xl:items-start 2xl:gap-2 2xl:px-3 xl:items-start xl:gap-4 xl:px-4 lg:items-start lg:gap-3 lg:px-3 md:items-start md:gap-2 md:px-1 sm:gap-1">
    <h1 className="font-semibold text-2xl px-5 2xl:text-3xl 2xl:text-gray-700 2xl:mt-0 2xl:ml-0 xl:mt-0 xl:ml-0 lg:mt-0 lg:ml-0 md:mt-0 md:ml-0">
      {name}
    </h1>
    <p className="text-gray-600 mb-5 px-5 2xl:text-xl 2xl:mb-0 2xl:ml-0 xl:text-xl xl:mb-0 xl:ml-0 lg:text-lg lg:mb-0 lg:ml-0 md:text-xl md:mb-0 md:ml-0  sm:mt-3">
      {address}
    </p>
    <div className="2xl:mt-5 xl:mt-5  ">
      <CommonBtn btnText={"Schedule a visit"} />
    </div>
  </div>
  

  );
};

export default CenterCard;

