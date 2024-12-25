import React from 'react'

function InnovationSection({title,description,image,innovations}) {
  return (
   <>
    <div className="bg-black text-white  mt-5 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:mt-48  xl:flex xl:flex-col xl:justify-center xl:items-center xl:mt-48  lg:flex lg:flex-col lg:justify-center lg:items-center lg:mt-48 p-6">
          <h1 className="text-3xl w-[80%] 2xl:w-fit 2xl:text-6xl 2xl:mt-5  xl:w-fit xl:text-5xl xl:mt-5  lg:w-fit lg:text-5xl lg:mt-5">{title}</h1>
          <p className="opacity-90 mt-3 2xl:text-3xl 2xl:opacity-70 2xl:font-medium 2xl:mt-5 xl:text-2xl xl:opacity-70 xl:font-medium xl:mt-5 lg:text-2xl lg:opacity-70 lg:font-medium lg:mt-5  "> {description}</p>
          <img src={image} alt="4680-cell" className="rounded-xl mt-5  2xl:w-[95%]  xl:w-[95%]  lg:w-[95%]" />

          <div className="mt-5 flex flex-col 2xl:flex-row 2xl:flex-wrap 2xl:px-3 2xl:w-full 2xl:justify-center 2xl:mt-10 2xl:mb-10 xl:flex-row xl:flex-wrap xl:px-3 xl:w-full xl:justify-center xl:mt-10 xl:mb-10 lg:flex-row lg:flex-wrap lg:px-3 lg:w-full lg:justify-center lg:mt-10 lg:mb-10 gap-5">
            {innovations.map((innovation, index) => (
              <div key={index} className="flex items-start  px-5  gap-3  2xl:flex-col 2xl:gap-0 2xl:justify-center 2xl:items-center 2xl:w-[17rem]  2xl:rounded-md 2xl:bg-blue-50  2xl:bg-opacity-20 2xl:p-3  xl:flex-col xl:gap-0 xl:justify-center xl:items-center xl:w-[17rem]  xl:rounded-md xl:bg-blue-50  xl:bg-opacity-20 xl:p-3  lg:flex-col lg:gap-0 lg:justify-center lg:items-center lg:w-[17rem]  lg:rounded-md lg:bg-blue-50  lg:bg-opacity-20 lg:p-3">
                <img src={innovation.icon} alt={`Innovation ${index}`} className="h-10 w-10 2xl:h-28 2xl:w-28 2xl:opacity-100 xl:h-28 xl:w-28 xl:opacity-100 lg:h-28 lg:w-28 lg:opacity-100" /> <br />
                <p className="text-lg">{innovation.text}</p>
                
              </div> 
              
            ))}
            <hr />
          </div>
         
        </div>
   </>
  )
}

export default InnovationSection