import React from 'react'
import Scooters from './Scooters'
import Bikes from './Bikes'
import Gigs from './Gigs'
import Newpro from './Newpro'
import{Data}from "../data"


function Products() {

  return (
    <div className=' '>
     <Scooters Data={Data.scooters}/>
       <Bikes data={Data.bikes}/>
        <Gigs data={Data.gigs}/> 
      <Newpro data={Data.new}/> 
      
    </div>
  )
}

export default Products