import React from 'react'

function WarrantyFeatures({title,features,footertext}) {
  return (
    <div className="p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold 2xl:text-6xl 2xl:w-[80%] 2xl:px-[5rem] 2xl:mt-20  xl:text-5xl xl:w-[80%] xl:px-[5rem] xl:mt-16 lg:text-4xl lg:w-[80%] lg:px-[4rem] lg:mt-14  md:text-2xl md:w-[70%] md:px-3 md:mt-5">
        {title}
        </h1>
        <div className=' flex flex-col gap-4 2xl:flex-row 2xl:justify-center  2xl:items-center  xl:flex-row xl:justify-center xl:items-center xl:mt-10 lg:flex-row lg:justify-center lg:items-center lg:mt-10   md:flex-row md:justify-center  md:items-center md:mt-7'>
          {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-blue-50 rounded-xl p-4 2xl:flex-col-reverse 2xl:h-[28rem] 2xl:w-[24rem] 2xl:items-start 2xl:p-6 xl:flex-col-reverse xl:h-[24rem] xl:w-[20rem] xl:items-start xl:p-3 lg:flex-col-reverse lg:h-[20rem] lg:w-[20rem] lg:items-start lg:p-3  md:flex-col-reverse md:h-[18rem] md:w-[18rem] md:items-start md:p-4"
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl  2xl:text-4xl 2xl:ml-3  xl:text-4xl xl:ml-3 xl:mb-5  lg:text-3xl lg:ml-3 lg:mb-4  md:text-2xl  ">{feature.title}</h1>
              <p className=' 2xl:text-2xl 2xl:ml-3 2xl:mt-3 2xl:opacity-70 xl:text-xl xl:ml-3 xl:mb-3 xl:opacity-70 lg:text-lg lg:ml-3 lg:mb-3 lg:opacity-70 md:text-md md:ml-3 md:mt-3 md:opacity-70'>{feature.description} </p>
            </div>
            <div>
              <img
                src={feature.icon}
                alt={`icon-${index}`}
                className="w-20 2xl:w-32  xl:w-28  lg:w-24 md:w-20"
              />
            </div>
          </div>
        ))}
        </div>
        
        <h1 className="text-sm font-semibold opacity-50 2xl:ml-[75%] 2xl:text-base 2xl:mt-5 xl:ml-[75%] xl:text-base xl:mt-5 lg:ml-[70%] lg:text-base lg:mt-3">
      {footertext}
        </h1>
      </div>
  )
}

export default WarrantyFeatures