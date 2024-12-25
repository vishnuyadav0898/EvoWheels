import React from 'react';
import GeneralSection from './GeneralSection';
import DesignPhilosophysection from './DesignPhilosophysection';
import DesignFutureTech from './DesignFutureTech';
import VrDesignsection from './VrDesignsection';
import Footerimagesection from './Footerimagesection';
import BackButton from './BackButton';
import CommonFooter from './CommonFooter';
import{Data} from "../ComponentData/Technologies/DesignData"

function DesignDetail({ images, onClose }) {

 
  
  return (
    <>
       <div className="fixed inset-0  z-20 flex flex-col w-full overflow-y-auto bg-white pb-10">

        {/* Headersection */}
         <GeneralSection subtitle={Data.designdata.subtitle}images={images}/>

        {/* Design Philosophy Section */}
        <DesignPhilosophysection title={Data.designPhilosophy.title}cards={Data.designPhilosophy.Philosophy}/>
      
        {/* Future Technology Section */}
        <DesignFutureTech title={Data.futureTechnology.title}Technology={Data.futureTechnology.Technologies}/>
       
        {/* Designing The Future Section */}
        <VrDesignsection titles={Data.vrdesigndata.titles}paras={Data.vrdesigndata.descriptions}image={Data.vrdesigndata.image}/>
      
        {/* Join Us Section */}
       <Footerimagesection title={Data.DesignFooterSection.title}para={Data.DesignFooterSection.description}images={Data.DesignFooterSection.images}btntext={Data.DesignFooterSection.btntext}/>

        {/* Close Button */}
        <BackButton onClose={onClose}/>
        <CommonFooter/>
       </div>
    </>
  );
}

export default DesignDetail;
