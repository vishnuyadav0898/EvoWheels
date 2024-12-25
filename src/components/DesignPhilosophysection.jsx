import React from 'react'

function DesignPhilosophysection({title,cards}) {
  return (
    <div className="mt-5 p-5">
    <h1 className="text-2xl font-semibold  w-2/5 2xl:text-6xl  2xl:w-full 2xl:px-20 xl:text-5xl  xl:w-full xl:px-20 lg:text-5xl  lg:w-full lg:px-20">Our Design Philosophy</h1>
    <div className="flex gap-3 overflow-x-auto scrollbar-hide mt-5 2xl:gap-6 2xl:justify-center 2xl:mb-16 2xl:mt-16 xl:gap-6 xl:justify-center xl:mb-16 xl:mt-16 lg:gap-6 lg:justify-center lg:mb-16 lg:mt-16">
      {cards.map((item, index) => (
        <div key={index} className="relative flex-none rounded-lg shadow-md overflow-hidden mt-3">
          <img src={item.imgSrc} alt={item.title} className=" object-cover w-[20rem] h-[400px] rounded-xl 2xl:w-[32rem] 2xl:h-[40rem]  xl:w-[25rem] xl:h-[30rem]  " />
          <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col items-start p-5 justify-start 2xl:p-10">
            <h1 className="text-2xl font-medium 2xl:text-4xl">{item.title}</h1>
            <p className="mt-2 opacity-50 2xl:text-2xl">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default DesignPhilosophysection