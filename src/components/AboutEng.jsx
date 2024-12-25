import React from 'react'

function AboutEng({title,description,stats ,para}) {
  return (
    <>
    <div className=' 2xl:px-32 2xl:mt-20  xl:px-24 xl:mt-20  lg:px-20 lg:mt-10'> 
      <h1 className='text-2xl font-semibold w-1/2 mt-3 2xl:text-6xl  xl:text-5xl lg:text-5xl'>{title}</h1>
        <p className='opacity-70 mt-3 2xl:text-2xl 2xl:w-1/2 2xl:mt-10  xl:text-2xl xl:w-1/2 xl:mt-10  lg:text-2xl  lg:mt-10'>
         {description}
        </p>
         <div className='  justify-center items-center gap-10 2xl:flex 2xl:w-full 2xl:mt-28   xl:flex xl:w-full xl:mt-16  lg:flex lg:w-full lg:mt-10'>
           {stats.map((stat, index) => (
          <div key={index} className='justify-center items-center 2xl:bg-gray-800 2xl:h-[20rem] 2xl:w-[30rem] 2xl:rounded-xl 2xl:flex   xl:bg-gray-800 xl:h-[20rem] xl:w-full xl:rounded-xl xl:flex  lg:bg-gray-800 lg:h-[15rem] lg:w-full lg:rounded-xl lg:flex  '>
            <div className='flex items-center gap-5 mt-5 pb-2 2xl:flex-col 2xl:items-start xl:flex-col xl:items-start lg:flex-col lg:items-start  '>
              <img src={stat.icon} alt={`about-icon-${index + 1}`} className='w-[2.5rem] 2xl:w-24  xl:w-20  lg:w-14' />
              <div>
                <p className='text-3xl font-extrabold text-green-300 2xl:text-8xl 2xl:mt-5 2xl:font-normal xl:text-6xl xl:mt-4 xl:font-normal lg:text-5xl lg:mt-2 lg:font-normal'>{stat.number}</p>
                <p className='text-lg 2xl:text-xl 2xl:mt-5 xl:text-xl xl:mt-4 lg:text-lg lg:mt-3'>{stat.label}</p>
              </div>
            </div>
            {index < stats.length - 1 && <hr />}
          </div>
        ))}</div>
       
        <p className='mt-5 text-sm opacity-50 ml-5 2xl:text-xl '>
       {para}
        </p>
        </div>
    </>
  )
}

export default AboutEng