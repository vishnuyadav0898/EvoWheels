import React from 'react';
import GeneralSection from './GeneralSection';
import BatteryInnovation from './BatteryInnovation';
import Facility from './Facility';
import InnovationSection from './InnovationSection';
import Footerimagesection from './Footerimagesection';
import BackButton from './BackButton';
import CommonFooter from './CommonFooter';
import{Data} from "../ComponentData/Technologies/CellData"

function CellDetail({ images, onClose }) {

  return (
    <>
      <div className="fixed inset-0  z-20 flex flex-col w-full overflow-y-auto bg-white pb-10">
        
         {/* headersection */}
         <GeneralSection subtitle={Data.cellTechData.SubTitle}images={images}extrapara={Data.cellTechData.title}/>
         
           {/* Features Section */}
         <BatteryInnovation title={Data.featuresdata.title}description={Data.featuresdata.description}features={Data.featuresdata.features}/>
        
         {/* Features Section */}
         <Facility title={Data.FacilityData.title}description={Data.FacilityData.Description}image={Data.FacilityData.image}scrollData={Data.FacilityData.scrollBoxes}/>

         {/* Innovation Section */}
         <InnovationSection title={Data.innovationsdata.title}description={Data.innovationsdata.description}image={Data.innovationsdata.image}innovations={Data.innovationsdata.innovations}/>
       
         {/* Closing Section */}
         <Footerimagesection title={Data.footersectiondata.title}para={Data.footersectiondata.description}images={Data.footersectiondata.images}/>
      
         {/* Close Button */}
         <BackButton onClose={onClose}/>
         <CommonFooter/>
      </div>
    </>
  );
}
export default CellDetail;
