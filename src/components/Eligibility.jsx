import React from 'react'
import GreenStarlist from './GreenStarlist'

function Eligibility({title,data}) {
 
    
  return (
       <div className="p-3 2xl:p-20 xl:p-10">
        <h1 className="text-2xl font-semibold px-4 2xl:text-6xl xl:text-6xl">{title}</h1>
        <GreenStarlist items={data}/>
      
      </div> 
  )
}

export default Eligibility