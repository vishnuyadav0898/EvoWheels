import React from 'react'
import BatterySpec from './BatterySpec';
import GeneralSection from './GeneralSection';
import EngMotersection from './EngMotersection';
import EngTech from './EngTech';
import EngFrame from './EngFrame';
import EngSpec from './EngSpec';
import Footerimagesection from './Footerimagesection';
import BackButton from './BackButton';
import CommonFooter from './CommonFooter';
import{Data} from "../ComponentData/Technologies/EngineeringData"

function EngineeringDetail({ images, onClose }) {
     
  return (<>

   <div className="fixed inset-0  z-20 flex flex-col w-full overflow-y-auto bg-white pb-10 ">

      {/* Header Section */}
      <GeneralSection subtitle={Data.engidata.subtitle}images={images}endata={Data.engidata.Header}/>

      {/* powerspec */}
      <EngMotersection title={Data.powerData.title}power={Data.powerData.power}image={Data.powerData.image}/>

      {/* Batteryspec */}
      <BatterySpec/>

      {/* TechSpec */}
      <EngTech title={Data.techFeatures.title}image={Data.techFeatures.image}Features={Data.techFeatures.Features}/>

      {/* Framespec */}
      <EngFrame title={Data.frameFeatures.title}image={Data.frameFeatures.image}Features={Data.frameFeatures.Features}/>

      {/* spec */}
       <EngSpec title={Data.specsData.title}spec={Data.specsData.data}/> 
       
      {/* Footersection */}
      <Footerimagesection title={Data.footerimagesData.title}para={Data.footerimagesData.description}images={Data.footerimagesData.images}/>

      <BackButton onClose={onClose}/>
      <CommonFooter/>
   </div>
    </>
   
  )
}

export default EngineeringDetail
