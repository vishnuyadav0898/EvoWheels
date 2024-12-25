import React from 'react'
import CommonBtn from './CommonBtn'

function FinancingSection({title,description,images,}) {
  return (
    <div className="p-4 2xl:mt-10 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center  xl:mt-10 xl:flex xl:flex-col xl:justify-center xl:items-center  lg:mt-10 lg:flex lg:flex-col lg:justify-center lg:items-center">
    <h1 className="text-2xl font-semibold 2xl:text-6xl  xl:text-5xl   lg:text-5xl  ">{title}</h1>
    <p className="text-lg mt-1 opacity-70  2xl:text-2xl 2xl:mt-10  xl:text-2xl xl:mt-10  lg:text-2xl lg:mt-10">{description}</p>
    <div className="w-full overflow-x-auto scrollbar-hide flex gap-4 p-4 2xl:gap-10 2xl:items-center 2xl:justify-center">
      {images.map((item, index) => (
        <div key={index} className="flex-none  2xl:flex flex-col xl:flex  items-center justify-center">
          <img
            src={item.src}
            alt={`financing-${index}`}
            className="w-72 object-cover rounded-lg shadow-md 2xl:w-[30rem] xl:w-[24rem]"
          />
          {item.button && (
           
            <CommonBtn btnText={item.button}/>
          )}
        </div>
      ))}
    </div>
  </div>
  )
}

export default FinancingSection