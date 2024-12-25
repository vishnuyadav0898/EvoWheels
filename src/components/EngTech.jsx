import React from 'react'
import GreenStarlist from './GreenStarlist'

function EngTech({title,image,Features}) {
  
  return (
    <div className="mt-5 p-5">
    <h1 className="text-3xl mt-3 font-semibold 2xl:text-6xl xl:text-5xl lg:text-5xl">{title}</h1>
    <div className=' 2xl:flex 2xl:justify-center 2xl:items-center 2xl:p-10 2xl:gap-20'>  <img
      src={image}
      alt="engin-img"
      className="mt-3 2xl:mt-7 2xl:h-[40rem] "
    />
    
   <GreenStarlist items={Features}/>
   </div>
  
  </div>
  )
}

export default EngTech