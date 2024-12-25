import React from 'react'

function BatteryInnovation({title,description,features}) {
  return (<> 
  <div className="p-6 flex flex-col  2xl:justify-center 2xl:items-center  xl:justify-center xl:items-center lg:justify-center lg:items-center">
    <h1 className="text-3xl font-medium w-[80%]  2xl:w-fit 2xl:text-6xl  xl:w-fit xl:text-5xl lg:w-fit lg:text-4xl ">{title}</h1>
    <p className="mt-3 text-lg opacity-50 2xl:text-3xl 2xl:opacity-70 2xl:font-medium 2xl:mt-5  xl:text-3xl xl:opacity-70 xl:font-medium xl:mt-5  lg:text-3xl lg:opacity-70 lg:font-medium lg:mt-5 ">{description} </p>
  </div>
 
  <div className="mt-10 flex flex-wrap justify-center gap-10 px-5">
    {features.map((feature, index) => (
      <div key={index} className="flex flex-col items-center gap-3 w-36 2xl:w-[25%] xl:w-44 lg:w-40 ">
        <img src={feature.icon} alt={`Feature ${index}`} className="h-16 w-16 2xl:h-32 2xl:w-32  xl:h-28 xl:w-28  lg:h-24 lg:w-24 " />
        <p className="text-center text-base 2xl:text-2xl  2xl:w-full ">{feature.text}</p>
      </div>
    ))}
  </div>
  </>
   
  )
}

export default BatteryInnovation