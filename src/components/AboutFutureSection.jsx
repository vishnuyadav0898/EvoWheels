import React from 'react'
import CommonBtn from './CommonBtn'

function AboutFutureSection({title,data}) {
  return (
    <div className='p-2 2xl:p-20  xl:p-16  lg:p-16 mt-10'>
    <h1 className='text-3xl font-semibold 2xl:px-20 2xl:text-6xl  xl:text-5xl lg:text-5xl'>{title}</h1>
    <div className="flex  mt-5 overflow-x-auto scrollbar-hide w-full 2xl:gap-16 2xl:mt-10  xl:gap-14 xl:mt-10 lg:gap-10 lg:mt-10 md:gap-10">
      {data.map((item, index) => (
        <div key={index} className="relative flex-none rounded-md overflow-hidden shadow-lg w-full  2xl:w-[50rem]  xl:w-[40rem] lg:w-[30rem]  p-1 ">
          <img
            src={item.imgSrc}
            alt={item.title}
            className="object-cover w-[22rem] h-[25rem] 2xl:w-full 2xl:h-[30rem] 2xl:rounded-xl  xl:w-full xl:h-[25rem] xl:rounded-xl  lg:w-full lg:h-[20rem] lg:rounded-xl md:w-full"
          />
          <div className='flex flex-col justify-center items-center p-2 2xl:items-start 2xl:mt-5 xl:items-start xl:mt-5 lg:items-start lg:mt-5'>
            <h1 className='text-2xl font-semibold mt- 5 2xl:text-3xl  xl:text-2xl  lg:text-2xl'>{item.title}</h1>
            <p className='opacity-70  2xl:text-lg 2xl:mt-3  xl:text-md xl:mt-3  lg:text-md lg:mt-3'>{item.description}</p>
            <CommonBtn btnText={item.linkText}/>
          
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default AboutFutureSection