import React from 'react'

function Regen({RegenData}) {
  return (
    <div className="bg-blue-50 p-2 2xl:px-44 xl:px-14 lg:px-16  rounded-xl mt-10 ">
    <h1 className="text-2xl mt-4 ml-3">Advanced Regen</h1>
    <p className=" ml-3">Keep charging, while you're riding.</p>
    <div className="flex 2xl:flex-col 2xl:w-2/4  xl:flex-col xl:w-2/4  lg:flex-wrap lg:w-2/4   gap-2 mt-3">
      {RegenData.map((regen,index)=>(
         <div key={index} className="bg-white  rounded-xl p-2 2xl:p-5 xl:p-4 lg:p-4  2xl:w-[60%] xl:w-[60%] lg:w-[62%] md:w-[15%] sm:w-[10%] w-[%]">
          <h1 className="font-bold text-[110%] ">{regen.title}</h1>
          <p className="text-xs 2xl:text-sm">{regen.description}</p>
         </div>
      ))}
    </div>
   </div>
  )
}

export default Regen


