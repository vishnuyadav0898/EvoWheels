import React from 'react'

function EngSpec({title,spec}) {
  return (
    <div className='p-5'>
    <h1 className='text-3xl font-semibold text-center mb-6 2xl:text-6xl xl:text-5xl lg:text-5xl 2xl:mt-10'>{title}</h1>
    <div className='flex items-center justify-end  2xl:px-[42%] gap-5 mt-5 text-2xl font-semibold '>
      <span className='relative'>Gen1<div className='w-full h-1 bg-gray-300 absolute bottom-0 mt-2'></div></span>
      <span className='relative text-green-500'>Gen2<div className='w-full h-1 bg-green-500 absolute bottom-0 mt-2'></div></span>
    </div>
    <div className='grid 2xl:grid-cols-none   grid-cols-1 sm:grid-cols-2 gap-5 mt-2  2xl:justify-around 2xl:w-full  '>
      {spec.map((spec, index) => (
        <div key={index} className='flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-md  2xl:w-[90rem]  '>
          <div className='flex  items-center 2xl:w-full '>
            <img src={spec.icon} alt='spec-icon' className='w-12 h-12 mr-4 2xl:w-40' />
            <div>
              <p className='text-sm text-gray-600'>{spec.label}</p>
              <p className='text-lg font-semibold'>{spec.subLabel}</p>
            </div>
          </div>
          <div className='flex gap-5 text-right'>
            <div>
              <span className='text-xl block'>{spec.gen1Value}</span>
              <p className='text-sm text-gray-500'></p>
            </div>
            <div>
              <span className='text-xl block text-green-500'>{spec.gen2Value}</span>
              <p className='text-sm text-gray-500'></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default EngSpec