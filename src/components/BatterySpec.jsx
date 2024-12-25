import React from 'react'
import{Data} from "../ComponentData/BatterySpecData"

function BatterySpec() {
  return (
      <div className="relative w-full  p-5 py-10 shadow-lg mt-5 bg-black text-white">
        <h1 className="text-2xl font-medium  2xl:text-6xl xl:text-5xl lg:text-4xl">Battery. Reimagined.</h1>
        <p className="mt-2 mb-5 text-lg 2xl:text-4xl xl:text-3xl lg:text-2xl">Safer than the safest.</p>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {Data.map((item, index) => (
            <div key={index} className="relative flex-none rounded-lg shadow-md overflow-hidden">
              <img
                src={item.imgSrc}
                alt={`battery-img-${index}`}
                className="w-[20rem] h-[400px] rounded-xl 2xl:w-[35rem]  2xl:h-[30rem] xl:w-[24rem] lg:w-[25rem]"
              />
              <div className="absolute inset-0 2xl:left-20 bg-black bg-opacity-0 flex flex-col items-start px-5 justify-start py-16">
                <h1 className="text-2xl font-medium 2xl:text-3xl">{item.title}</h1>
                <p className="text-lg text-white opacity-70 2xl:text-xl">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> 
  )
}

export default BatterySpec;