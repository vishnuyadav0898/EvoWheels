import React from 'react'
import CommonBtn from './CommonBtn'

function ManufacturingFacilities({title,facilities}) {
  return (
   <>
     <div className="mt-1 flex flex-col gap-5  2xl:w-full 2xl:justify-center 2xl:items-center 2xl:mt-5 xl:justify-center xl:items-center xl:mt-5  lg:justify-center lg:items-center lg:mt-5">
        <h1 className="text-3xl ml-3 font-semibold  2xl:text-6xl  xl:text-6xl lg:text-6xl">{title}</h1>
        {facilities.map((facility, index) => (
          <div key={index} className=' 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center  xl:w-full'>
            <h1 className="text-2xl font-medium ml-3 mt-3 2xl:text-5xl xl:text-4xl  lg:text-3xl">{facility.title}</h1>
            <p className="text-lg opacity-50 ml-3 mt-2  2xl:text-3xl 2xl:opacity-80 xl:text-3xl xl:opacity-80  lg:text-3xl lg:opacity-80 ">{facility.description}</p>
            <img
              src={facility.image}
              alt={`facility-${index}`}
              className="mt-2 xl:mt-5 lg:mt-5 2xl:w-[80%] xl:w-full "
            />
           <CommonBtn btnText={" Learn More"}/>
          </div>
        ))}
      </div></>
  )
}

export default ManufacturingFacilities