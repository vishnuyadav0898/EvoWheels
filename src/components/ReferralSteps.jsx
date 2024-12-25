import React from 'react'
import Steps from './Steps'

function ReferralSteps({title,description,steps}) {
  return (
     <div className="p-4 2xl:px-20 xl:px-20  lg:px-16">
        <h1 className="text-2xl font-semibold w-2/3 2xl:text-6xl 2xl:w-[40%] xl:text-5xl xl:w-[40%] lg:text-5xl lg:w-[40%]">{title}</h1>
        <p className="text-lg opacity-70 2xl:text-3xl xl:text-2xl lg:text-2xl">{description}</p>
        <div className="flex overflow-x-auto scrollbar-hide w-full mt-5 2xl:flex-wrap 2xl:justify-center  xl:flex-wrap xl:justify-center  lg:flex-wrap lg:justify-center ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex-none  rounded-2xl w-full overflow-hidden  mt-5 2xl:w-[27%]  xl:w-[33%]  lg:w-[33%]"
            >
            <Steps step={step}/>
            </div>
          ))}
        </div>
       

      </div> 
  )
}

export default ReferralSteps