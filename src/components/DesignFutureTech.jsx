import React from 'react'

function DesignFutureTech({title,Technology}) {
  return (
          <div className="bg-black mt-4 p-5 text-white ">
            <h1 className="text-2xl font-semibold  2xl:text-6xl 2xl:px-16  xl:text-6xl xl:px-14  lg:text-6xl lg:px-14">{title}</h1>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide mt-5 p-2 2xl:flex-col xl:flex-col  lg:flex-col">
            {Technology.map((item, index) => (
              <div key={index} className={`relative flex-none shadow-md  overflow-hidden w-full mt-3 2xl:flex
              ${ index % 2 === 0
                ? "2xl:flex-row xl:flex-row lg:flex-row 2xl:justify-center"
                : "2xl:flex-row-reverse xl:flex-reverse lg:flex-row-reverse"
            } xl:flex
              ${ index % 2 === 0
                ? "2xl:flex-row xl:flex-row lg:flex-row 2xl:justify-center"
                : "2xl:flex-row-reverse xl:flex-reverse lg:flex-row-reverse"
            }  lg:flex
              ${ index % 2 === 0
                ? "2xl:flex-row xl:flex-row lg:flex-row 2xl:justify-center"
                : "2xl:flex-row-reverse xl:flex-reverse lg:flex-row-reverse"
            }2xl:justify-center xl:justify-center lg:justify-center}`}>
                <img src={item.imgSrc} alt={item.title} className="w-full  rounded-sm 2xl:w-[65rem] 2xl:h-[40rem] xl:h-[30rem]  xl:w-[75rem]  lg:h-[20rem]  lg:w-[65rem] 2xl:rounded-xl xl:rounded-xl lg:rounded-xl " />
                <div className="mt-2 flex flex-col gap-2   justify-center items-center p-3 2xl:justify-start 2xl:items-center 2xl:w-[55rem] 2xl:p-10 2xl:gap-10  xl:justify-start xl:items-center xl:w-[55rem] xl:p-7 xl:gap-5  lg:justify-start lg:items-center lg:w-[50rem] lg:p-5 lg:gap-5">
                  <h1 className="opacity-70 2xl:text-4xl 2xl:w-full 2xl:opacity-100  2xl:flex 2xl:justify-center">{item.date}</h1>
                  <p className="text-xl font-medium 2xl:text-3xl 2xl:w-full  2xl:flex 2xl:justify-center">{item.title}</p>
                  <p className="opacity-90 2xl:text-2xl 2xl:w-full  2xl:flex 2xl:justify-center">{item.description}</p>
                </div>
              </div>
            ))}
         
           </div>
         </div> 
  )


  
}

export default DesignFutureTech