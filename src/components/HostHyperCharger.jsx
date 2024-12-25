import React from 'react'

function HostHyperCharger({title,Data}) {
  return (
    <div className="px-4 2xl:px-24">
    <h1 className="text-2xl mt-5 font-semibold w-2/3 2xl:text-6xl 2xl:w-[35%] ">{title}</h1>
   <div className='  2xl:flex 2xl:gap-5 2xl:mb-10'>
     {Data.map((element, index) => (
      <div key={index} className=' 2xl:p-5'>
        <img
          src={element.image}
          alt={`contact-${index}`}
          className="rounded-xl mt-10 w-full "
        />
        <h1 className="text-2xl font-medium mt-5 2xl:text-4xl">{element.Title}</h1>
        <p className="text-lg opacity-70 mt-2 2xl:text-2xl">{element.Description}</p>
      </div>
    ))}</div>
   
   
  </div>
  )
}

export default HostHyperCharger