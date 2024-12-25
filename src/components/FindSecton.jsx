import React from 'react'
import CommonBtn from './CommonBtn'

function FindSecton({title,description,cities}) {
  return (
    <div className="p-4 2xl:p-20">
    <h1 className="text-3xl font-semibold 2xl:text-6xl xl:text-5xl lg:text-5xl">{title}</h1>
    <p className="text-lg mt-1 opacity-70 2xl:text-4xl xl:text-4xl lg:text-3xl">{description}</p>
    <CommonBtn btnText={"View All Cities"}/>
    <div className="flex flex-wrap justify-center items-center w-full gap-4 mt-5 2xl:gap-10">
      {cities.map((city, index) => (
        <div key={index} className="relative  overflow-hidden shadow-lg">
          <img
            src={city.image}
            alt={`city-${index}`}
            className="w-[43vw] h-[35vw] 2xl:w-[34rem]  2xl:h-[35rem] xl:w-[24rem]  xl:h-[25rem]"
          />
           <div className="absolute bottom-0 left-0 w-full p-2 2xl:bottom-5 2xl:left-5  xl:bottom-5 xl:left-5">
          <span className="text-white  font-semibold 2xl:text-2xl xl:text-xl">{city.name}</span>
         </div>
         
        </div>
      ))}
    </div>
  </div>
  )
}

export default FindSecton