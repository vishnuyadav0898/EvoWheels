import React from 'react'

function AboutMain({title, sections, images, btpara}) {
  return (
    <>
      <div className='p-4 bg-gray-100 mt-5 2xl:px-20  xl:px-20  lg:px-10'>
        <h1 className='text-2xl font-semibold w-3/2 mt-5 2xl:text-6xl 2xl:w-[60%]  2xl:leading-normal xl:text-5xl xl:w-[60%]  xl:leading-normal lg:text-5xl lg:w-[80%]  lg:leading-normal'>
          {title}
        </h1>
       <div>
          {sections.map((section, index) => (
          <div key={index} className={`  2xl:flex ${index===1?"flex-row-reverse":" flex-row"}  xl:flex ${index===1?"flex-row-reverse":" flex-row"}  lg:flex ${index===1?"flex-row-reverse":" flex-row"}`}>
            <img src={section.image} alt={section.image} className='mt-4 object-cover 2xl:h-[40rem] 2xl:w-[50rem] 2xl:rounded-xl xl:h-[30rem] xl:w-[40rem] xl:rounded-xl lg:h-[25rem]  lg:rounded-xl' />
           <div className=' 2xl:p-40  xl:p-10 lg:p-10 '>
             <p className='mt-10 text-lg font-medium opacity-60 2xl:text-3xl 2xl:mt-0  xl:text-2xl xl:mt-10  lg:text-2xl  lg:mt-0'>
              {section.para1}
            </p>
            <p className='mt-3 text-lg font-medium opacity-60 2xl:text-3xl 2xl:mt-16  xl:text-2xl xl:mt-10  lg:text-2xl lg:mt-10'>
              {section.para2}
            </p>
            </div>
           
          </div>
        ))}
      </div>
      
      </div>

      <div className="flex gap-3 mt-5 overflow-x-auto scrollbar-hide w-full  2xl:justify-center  xl:justify-center  lg:justify-center">
        {images.map((image, index) => (
          <div key={index} className="relative flex-none  xl:mt-10 2xl:flex  xl:flex rounded-md overflow-hidden shadow-lg">
            <img
              src={image}
              alt={image}
              className="w-60 h-72 object-cover 2xl:h-[35rem] 2xl:w-[37rem]  xl:h-[32rem] xl:w-[30rem]  lg:h-[20rem] lg:w-[20rem]"
            />
          </div>
        ))}
      </div>

      <p className='mt-3 text-sm opacity-50 2xl:text-2xl  2xl:mt-7 2xl:mb-10 xl:text-xl  xl:mt-4 xl:mb-7  lg:text-lg  lg:mt-4 lg:mb-7'>
        {btpara}
      </p>
    </>
  )
}

export default AboutMain;
