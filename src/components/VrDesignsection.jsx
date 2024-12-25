import React from 'react'

function VrDesignsection({titles,paras,image}) {
  return (
    <div className="mt-5 bg-gray-100 pb-10 ">
    <h1 className="text-2xl font-semibold px-5  2xl:text-5xl  2xl:px-10  xl:text-5xl  xl:px-10  lg:text-5xl  lg:px-10">{titles[0]}</h1>
    <p className="mt-3 opacity-50 text-lg px-5 2xl:text-3xl 2xl:p-10  2xl:mt-0 xl:text-3xl xl:p-10  lg:text-3xl lg:p-10">
   {paras[0]}
    </p>
    <img src={image} alt="design-image" className="mt-5 w-full" />
    <h1 className="text-2xl font-semibold mt-10 px-5 2xl:text-5xl  2xl:px-10  xl:text-5xl  xl:px-10    lg:text-5xl  lg:px-10">{titles[1]}</h1>
    <p className="mt-3 opacity-50 text-lg px-5 2xl:text-3xl 2xl:p-10   2xl:mt-0 xl:text-3xl xl:p-10  lg:text-3xl lg:p-10">
    {paras[1]}
    </p>
  </div>
  )
}

export default VrDesignsection