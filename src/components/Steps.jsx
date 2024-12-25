import React from 'react'

function Steps({step}) {
  return (
    <div className="flex flex-col justify-center items-center">
    <span className="bg-black text-white px-4 py-2 rounded-full text-xl ">
      {step.step}
    </span>
    <h1 className="mt-3 text-xl font-semibold 2xl:text-2xl">{step.title}</h1>
    <img src={step.image} alt={step.title} className="mt-3 p-5 h-[35rem] 2xl:h-[45rem] xl:h-[45rem] lg:h-[25rem]" />
  </div>
  )
}

export default Steps