import React from 'react'
import CommonBtn from './CommonBtn'

function RelationshipSection({title,description,items}) {
  return (
    <div className="p-4  2xl:mt-10 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center  xl:mt-10 xl:flex xl:flex-col xl:justify-center xl:items-center  lg:mt-10 lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h1 className="text-3xl font-semibold w-2/3 2xl:w-fit  2xl:text-6xl  xl:text-5xl   lg:text-5xl ">{title}</h1>
        <p className="text-lg mt-1 opacity-70  2xl:text-2xl 2xl:mt-10  xl:text-2xl xl:mt-10  lg:text-2xl lg:mt-10">{description}</p>
        <div className="w-full overflow-x-auto scrollbar-hide flex gap-4 p-4 2xl:justify-center 2xl:items-center  xl:justify-center xl:items-center  lg:justify-center lg:items-center 2xl:gap-16 2xl:mt-10 xl:gap-10 xl:mt-10">
          {items.map((item, index) => (
            <div key={index} className="flex-none   2xl:w-[50rem] xl:w-[35rem]  lg:w-[28rem]">
              <img
                src={item.image}
                alt={`relationship-${index}`}
                className="w-96 h-[50vh] object-cover rounded-lg shadow-md  2xl:w-[50rem]  xl:w-full  lg:w-full lg:h-[37rem] "
              />
              <h1 className="text-xl font-bold mt-3 2xl:text-3xl 2xl:mt-10  xl:text-3xl xl:mt-10  lg:text-3xl lg:mt-10">{item.title}</h1>
              <p className="opacity-70 2xl:text-2xl 2xl:mt-5 xl:text-2xl xl:mt-5 lg:text-2xl lg:mt-5">{item.description}</p>
            </div>
          ))}
        </div>
        <CommonBtn btnText={" View our Network "}/>
       
      </div>

  )
}

export default RelationshipSection