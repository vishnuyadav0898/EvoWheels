import React from 'react'

function HyperChargerStats({title,specs,image}) {
  return (
  <div className="px-4 mt-5">
  <div className="flex flex-col  2xl:flex-row xl:flex-row lg:flex-row gap-3">
    {/* Title and Specs Section */}
    <div className="  2xl:flex 2xl:flex-col 2xl:items-center 2xl:w-[70%]  2xl:p-5  xl:w-[70%] xl:flex xl:flex-col xl:items-center   xl:p-5  lg:flex lg:flex-col lg:items-center lg:w-1/2 lg:p-5 ">
      <h1 className="text-2xl font-semibold w-2/3 2xl:text-6xl 2xl:w-2/3  xl:text-5xl xl:w-2/3 xl:mt-5 lg:text-5xl">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide w-full gap-6 py-4 2xl:flex-col 2xl:justify-center 2xl:overflow-hidden  xl:flex-col xl:justify-center xl:overflow-hidden  lg:flex-col lg:justify-center lg:overflow-hidden  ">
        {specs.map((e, index) => (
          <div
            key={index}
            className="relative flex-none  shadow-md overflow-hidden w-[70vw]  p-3 2xl:flex 2xl:px-[20%] 2xl:items-center 2xl:gap-5 xl:flex xl:px-[20%] xl:items-center xl:gap-5 lg:flex lg:px-[20%] lg:items-center lg:gap-5 lg:w-auto"
          >
            <h1 className="text-xl font-semibold 2xl:text-3xl xl:text-3xl">{e.heading}</h1>
            <p className="text-lg font-normal 2xl:text-xl xl:text-xl">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Image Section */}
    <div className="lg:w-1/2 2xl:w-full 2xl:flex 2xl:justify-center 2xl:items-center">
      <img
        src={image}
        alt={image}
        className="mt-5 lg:mt-0 rounded-xl w-full 2xl:w-[40rem]"
      />
    </div>
  </div>
</div>

  )
}

export default HyperChargerStats