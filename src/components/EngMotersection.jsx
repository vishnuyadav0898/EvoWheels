import React from 'react'

function EngMotersection({title,power,image}) {
  return (
    <div className="mt-4 p-5 w-full">
      <h1 className="text-3xl font-medium text-wrap 2xl:text-6xl  xl:text-5xl  lg:text-5xl">{title}</h1>
      <img src={image} alt="engin-img" className="object-contain mt-5" />
      <div className="mt-10 flex overflow-x-auto scrollbar-hide space-x-4 w-full">
        {power.map((item, index) => (
          <div key={index} className="bg-slate-100 flex-none w-72 p-4 rounded-xl 2xl:w-[25rem] 2xl:h-[20rem] 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-around  xl:w-[24rem] xl:h-[20rem] xl:flex xl:flex-col xl:items-center xl:justify-around  lg:w-[25rem] lg:h-[20rem] lg:flex lg:flex-col lg:items-center lg:justify-around">
            <h1 className="text-xl font-medium w-2/3 2xl:w-full 2xl:text-4xl xl:w-full xl:text-4xl lg:w-full lg:text-4xl">{item.title}</h1>
            <p className="text-lg opacity-50 mt-3 2xl:text-2xl  xl:text-xl  lg:text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EngMotersection