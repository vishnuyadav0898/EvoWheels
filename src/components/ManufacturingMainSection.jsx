import React from 'react'

function ManufacturingMainSection({title,sections}) {
  return (<>
    <div className="p-5 flex flex-col gap-3 2xl:gap-0 2xl:justify-center 2xl:items-center  xl:gap-0 xl:justify-center xl:items-center ">
   <h1 className="text-2xl font-semibold 2xl:mb-20 2xl:text-6xl xl:text-5xl  xl:mb-16  ">
     {title}
   </h1>

{sections.map((section, index) => (
  <div
    key={index}
    className={`mt-4 flex flex-col gap-4 2xl:gap-14 xl:gap-10 lg:gap-8 bg-gray-100 rounded-lg ${
      index % 2 === 0
        ? "2xl:flex-row xl:flex-row-reverse lg:flex-row"
        : "2xl:flex-row-reverse xl:flex-row lg:flex-row-reverse"
    } 2xl:justify-center 2xl:w-full 2xl:px-16 xl:justify-center xl:w-full xl:px-16 lg:justify-center  lg:px-10`}
  >
    <div className="flex flex-col items-center w-full">
      <h1 className="text-2xl mt-3 lg:text-3xl xl:text-3xl 2xl:text-4xl lg:mt-5 xl:mt-[5%] 2xl:mt-[5%]   2xl:w-[80%]">
        {section.title}
      </h1>
      <p className="text-lg opacity-50 mt-3 lg:text-2xl xl:text-2xl 2xl:text-3xl 2xl:px-10 lg:px-4 xl:px-5  lg:mt-4 xl:mt-5 2xl:mt-10 lg:opacity-70 xl:opacity-60 2xl:opacity-60">
        {section.description}
      </p>
    </div>
    <img
      src={section.image}
      alt={`section-${index}`}
      className="lg:w-[55%] xl:w-[50%] 2xl:w-[45%] object-cover rounded-xl"
    />
  </div>
))}





 </div>
 </>
  )
}

export default ManufacturingMainSection