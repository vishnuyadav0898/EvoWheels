import React from 'react'

function Facility({title,description,scrollData,image}) {
  return (<>
  <div className='mt-10 flex flex-col 2xl:justify-center 2xl:items-center xl:items-center  lg:justify-center lg:items-center   gap-4 '>
    <img src={image} alt={title} className=' 2xl:w-full  xl:w-full  lg:w-full ' />
    <h1 className='text-3xl font-medium px-5 mt-3 w-[55%] 2xl:w-fit 2xl:text-6xl xl:w-fit xl:text-5xl  lg:w-fit lg:text-5xl'>{title}</h1>
    <p className='px-7 opacity-50 2xl:text-3xl 2xl:opacity-70 2xl:font-medium 2xl:mt-5  xl:text-3xl xl:opacity-70 xl:font-medium xl:mt-5  lg:text-3xl lg:opacity-70 lg:font-medium lg:mt-5 '>{description}</p>
   </div>
 {/* Scrollable Images Section */}
 <div className="relative w-full mt-5 h-full py-4 shadow-lg rounded-lg">
   <div className="flex  2xl:flex-wrap 2xl:justify-center 2xl:gap-10 xl:gap-10  lg:gap-5  xl:flex-wrap xl:justify-center  lg:flex-wrap lg:justify-center  overflow-x-auto scrollbar-hide">
     {scrollData.map((box, index) => (
       <div key={index} className="relative flex-none rounded-lg  shadow-md overflow-hidden p-3">
         <img src={box.image} alt={`Scroll Box ${index}`} className="w-[20rem] h-[300px] 2xl:w-[40rem] 2xl:h-[30rem]  xl:w-[35rem] xl:h-[25rem] lg:w-[27rem] lg:h-[25rem] md:w-[25rem] md:h-[20rem]  rounded-xl" />
         <div className="absolute inset-0 bg-black bg-opacity-0 flex items-start justify-center py-10  2xl:py-5">
           <p className="text-xl font-semibold  2xl:text-4xl 2xl:font-normal  xl:text-3xl lg:text-2xl ">{box.text}</p>
         </div>
       </div>
     ))}
   </div>
 </div>
   </>
  )
}

export default Facility