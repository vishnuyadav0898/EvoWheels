import React from 'react'
import LeaderCard from './LeaderCard'

function LeaderBoard({title,data}) {
  return (
    <div className="p-4 2xl:p-20 xl:p-20 lg:p-16">
        <h1 className="text-2xl font-semibold w-2/3 2xl:text-6xl 2xl:w-1/2  xl:text-5xl xl:w-1/2  lg:text-5xl lg:w-1/2 ">{title}</h1>
        <div className="flex   items-center overflow-x-auto scrollbar-hide w-full mt-5 2xl:mt-10 2xl:justify-center   xl:mt-8 xl:justify-center   lg:mt-5  ">
          {data.map((entry, index) => (
            <div
                key={index}
                className={`relative flex-none rounded-2xl w-72  overflow-hidden shadow-lg mx-3  2xl:mt-16 ${entry.background} 
                ${ 
                  index === 0 
                    ? '2xl:h-[25rem] 2xl:w-[25rem] xl:h-[25rem] xl:w-[25rem]  lg:h-[25rem] lg:w-[25rem]  w-[20rem] h-[20rem]' 
                    : index === 1 
                    ? ' 2xl:w-[22rem] 2xl:h-[22rem]  xl:w-[22rem] xl:h-[22rem]  lg:w-[22rem] lg:h-[22rem] w-[18rem] h-[18rem] ' 
                    : index === 2 
                    ? '  2xl:h-[18rem] 2xl:w-[20rem]  xl:h-[18rem] xl:w-[20rem]  lg:h-[18rem] lg:w-[20rem] w-[15rem] h-[15rem]' 
                    : 'h-[10rem]'
                }
                `} >
                <LeaderCard data={entry}/>
              </div>
           ))}
        </div>
      </div>
  )
}

export default LeaderBoard
