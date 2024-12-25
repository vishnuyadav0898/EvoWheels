import React from 'react'

function EngFrame({title,image,Features}) {
  return (
    <div className="p-5 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center xl:flex xl:flex-col xl:justify-center xl:items-center lg:flex lg:flex-col lg:justify-center lg:items-center">
    <h1 className="text-3xl mt-3 font-semibold 2xl:text-6xl xl:text-5xl lg:text-5xl">{title}</h1>
    <img
      src={image}
      alt="engin-img"
      className="mt-16"/>
    <div className="mt-10 flex overflow-x-auto  2xl:justify-center xl:justify-center lg:justify-center  scrollbar-hide space-x-4 w-full  ">
      {Features.map((feature, index) => (
        <div key={index} className="flex-none w-64 p-4 rounded-xl 2xl:">
          <img src={feature.imgSrc} alt={`icon-${index}`} className="w-14 2xl:w-28" />
          <h1 className="text-3xl font-semibold mt-2">{feature.title}</h1>
          <p className="text-lg opacity-50 mt-2">{feature.description}</p>
          <div className="bg-black h-[1px] w-2/3"></div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default EngFrame