import React, { useState } from "react";
import CenterCard from "./CanterCard";
import{Data} from "../ComponentData/CityStoreData"


function CityStore({}) {
  const [selectedCity, setSelectedCity] = useState("jaipur");

  // Get the centers based on the selected city
  const centers = Data[selectedCity] || [];

  return (
    <div className="p-4">
    {/* City Selector */}
    <div className="mb-4 w-full ">
      <select
        className="h-10 w-48 text-black outline-none border border-gray-300 rounded-xl font-medium text-lg p-2 2xl:h-14 2xl:w-48 2xl:text-2xl 2xl:px-4  xl:h-16 xl:w-48 xl:text-2xl xl:px-4  lg:h-14 lg:w-48 lg:text-3xl lg:px-4 md:h-14 md:w-48 md:text-2xl md:px-4  "
        name="city"
        id="city"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option value="jaipur">Jaipur</option>
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
        <option value="bangalore">Bangalore</option>
        <option value="hyderabad">Hyderabad</option>
        <option value="pune">Pune</option>
        <option value="kolkata">Kolkata</option>
        <option value="chennai">Chennai</option>
      </select>
    </div>

    {/* Centers Display */}
    <div className="flex overflow-x-auto scrollbar-hide w-full gap-5  2xl:w-[90%]   ">
      {centers.map((center, index) => (
        <div
          key={index}
          className="relative flex-none w-[70%] h-64 shadow-md overflow-hidden 2xl:w-[24rem] 2xl:h-[18rem]  xl:w-[24rem] xl:h-[18rem]  lg:w-[23rem] lg:h-[16rem]  md:w-[23rem] md:h-[15rem] sm:w-[25rem] sm:h-[15rem]"
        >
          <CenterCard name={center.name} address={center.address} />
        </div>
      ))}
    </div>
  </div>
  );
}

export default CityStore;
