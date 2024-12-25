import React from 'react'
import CommonBtn from './CommonBtn'

function ExtendWarranty({title,images}) {
  return (
    <div className="p-4 2xl:px-32 xl:px-28 lg:px-24 ">
    <h1 className="text-2xl mt-4 mb-4 font-semibold 2xl:text-6xl 2xl:p-10 xl:text-5xl xl:p-8 lg:text-5xl lg:p-7">{title}</h1>
    <div className='flex flex-col gap-4 justify-center items-center 2xl:flex-row 2xl:flex-wrap xl:flex-row xl:flex-wrap lg:flex-row lg:flex-wrap'>
        {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`battery_warranty_img-${index}`}
        className="object-cover  2xl:w-[39vw]  xl:w-[38vw]  lg:w-[37vw]"
      />
    ))}</div>
    <div className=' 2xl:px-14  xl:px-14  lg:px-14'> 
      <CommonBtn btnText={"Book Now"}/>
      </div>
  
  </div>
  )
}

export default ExtendWarranty