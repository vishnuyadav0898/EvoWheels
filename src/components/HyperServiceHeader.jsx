import React from 'react'

function HyperServiceHeader({title,subtitle,btntext}) {
  return (
    <div className="p-5 flex flex-col justify-center items-center mt-10 gap-3 2xl:mt-20  xl:mt-20  lg:mt-20">
    <h1 className="text-4xl font-extrabold 2xl:text-6xl  xl:text-5xl  lg:text-5xl ">{title}</h1>
    <h1 className="text-3xl font-semibold 2xl:text-4xl xl:text-4xl lg:text-4xl">{subtitle}</h1>
  
    <button className="bg-black text-white p-2 text-lg font-normal mt-2">
      {btntext}<i className="fa-solid fa-arrow-right ml-2"></i>
    </button>
  </div>
  )
}

export default HyperServiceHeader