import React from 'react'
import CommonBtn from './CommonBtn'

function HyperChargerAbout({title,sections}) {

return (
  <>
  <div className='2xl:p-10 xl:p-8 lg:p-5'>
     <h1 className="text-2xl font-semibold px-5 py-5 2xl:text-6xl 2xl:w-2/3  xl:text-5xl xl:w-2/3  lg:text-5xl lg:w-2/3">{title}</h1>
    <div className="flex flex-wrap w-full  2xl:flex-nowrap 2xl:justify-center 2xl:items-center 2xl:p-10  xl:flex-nowrap xl:justify-center xl:items-center xl:p-5  lg:flex-nowrap lg:justify-center lg:items-center ">
      {sections.map((section, index) => (
        <div key={index} className="px-4  relative">
          <img
            src={section.image}
            alt={`section-${index}`}
            className="mt-5 object-cover w-full 2xl:w-[30rem] 2xl:h-[35rem] 2xl:rounded-xl  xl:w-[30rem] xl:h-[30rem] xl:rounded-xl  lg:w-[20rem] lg:h-[25rem] lg:rounded-xl "
          />
          <div className="absolute top-3 flex flex-col gap-2 px-3 mt-10 2xl:mt-0  2xl:p-5  xl:mt-0  xl:p-7  lg:mt-1  lg:p-5 ">
            <h1 className="text-xl w-3/4 2xl:text-3xl 2xl:w-[50%] xl:text-2xl xl:w-[50%] lg:text-xl lg:w-[50%]  ">{section.title}</h1>
            <p className="opacity-70 w-3/4 2xl:text-xl">{section.description}</p>
          </div>
          <CommonBtn btnText={"View Our Network"} />
        </div>
      ))}
    </div>
    </div>
   
  </>
);

}

export default HyperChargerAbout