import React from 'react'
import { useMediaQuery } from 'react-responsive'

function ProcessSection({title,description,image}) {
  const isLarge =  useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <div className="p-4  2xl:mt-10 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center  xl:mt-10 xl:flex xl:flex-col xl:justify-center xl:items-center  lg:mt-10 lg:flex lg:flex-col lg:justify-center lg:items-center">
    <h1 className="text-3xl font-semibold  2xl:w-fit  2xl:text-6xl  xl:text-5xl   lg:text-5xl">{title}</h1>
    <p className="text-lg mt-1 opacity-70  2xl:text-2xl 2xl:mt-10  xl:text-2xl xl:mt-10  lg:text-2xl lg:mt-10">{description}</p>
    <img src={ isLarge? image[0]:image[1]} alt="E-store-progress"  className=' 2xl:mt-20'/>
  </div>
 


  )
}

export default ProcessSection