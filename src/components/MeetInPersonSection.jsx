import React from 'react'

function MeetInPersonSection({title,description,cards}) {
  return (
    <div className="p-4  2xl:mt-10 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center  xl:mt-10 xl:flex xl:flex-col xl:justify-center xl:items-center  lg:mt-10 lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h1 className="text-2xl font-semibold 2xl:w-fit  2xl:text-6xl  xl:text-5xl   lg:text-5xl">{title}</h1>
        <p className="text-lg mt-1 opacity-70  2xl:text-2xl 2xl:mt-10  xl:text-2xl xl:mt-10  lg:text-2xl lg:mt-10">{description}</p>
        <div className="w-full overflow-x-auto scrollbar-hide flex gap-4 p-4 2xl:justify-center 2xl:items-center 2xl:mt-16">
          {cards.map((card, index) => (
            <div key={index} className={`flex-none h-[30vh] ${index===1 ?" bg-green-50":"bg-blue-50"}   gap-6 2xl:w-[46rem] 2xl:h-[20rem] 2xl:flex 2xl:flex-row-reverse 2xl:justify-center xl:w-[36rem] xl:h-[20rem] xl:flex xl:flex-row-reverse xl:justify-center lg:w-[28rem] lg:h-[20rem] lg:flex lg:flex-row-reverse lg:justify-center`}>
              <img
                src={card.image}
                alt={`meet-${index}`}
                className="w-96 h-44 object-contain rounded-lg shadow-md  2xl:object-cover 2xl:w-full 2xl:h-[80%]  xl:object-cover xl:w-full xl:h-[50%]  lg:object-cover lg:w-full lg:h-[40%]"
              />
              <div className=' 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:gap-6 xl:w-full xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-6 lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-10'>
                <h1 className={`text-2xl ${index===1?"text-green-700":"text-blue-400"}  font-semibold px-3 2xl:text-3xl xl:text-3xl`}>
                {card.title}
              </h1>
              <p className="font-light px-3 2xl:text-2xl xl:text-2xl">{card.description}</p></div>
            
            </div>
          ))}
          

        </div>
      </div>
  )
}

export default MeetInPersonSection