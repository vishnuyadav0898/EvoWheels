import React from 'react'
import { useMediaQuery } from 'react-responsive'

function TestRideSection({title,description,images}) {

  
   const isLarge = useMediaQuery({ query: "(min-width: 825px)" }); // 2xl and xl start from 1280px
  return (
    <div className="p-4 mt-3 2xl:mt-10 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center  xl:mt-10 xl:flex xl:flex-col xl:justify-center xl:items-center  lg:mt-10 lg:flex lg:flex-col lg:justify-center lg:items-center">
    <h1 className="text-2xl font-semibold 2xl:text-6xl  xl:text-5xl   lg:text-5xl   ">{title}</h1>
    <p className="text-lg mt-1 opacity-70 2xl:text-2xl 2xl:mt-10  xl:text-2xl xl:mt-10  lg:text-2xl lg:mt-10">{description}</p>
    <img
       src={
        images.length === 1
          ? images[0] 
          : isLarge
          ? images[1] 
          : images[0] 
      }
      alt="E-store-img-six"
      className=" object-contain mt-3 2xl:h-screen 2xl:w-full  2xl:mt-10 xl:mt-10 xl:w-full lg:mt-10 lg:w-full   "
    />
  </div>
  )
}

export default TestRideSection