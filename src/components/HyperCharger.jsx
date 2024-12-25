import React from 'react';
import GeneralSection from './GeneralSection';
import HyperChargerAbout from './HyperChargerAbout';
import HyperChargerStats from './HyperChargerStats';
import SavingSection from './SavingSection';
import HostHyperCharger from './HostHyperCharger';
import BackButton from './BackButton';
import CommonFooter from './CommonFooter';
import {Data} from "../ComponentData/Ownership/HyperChargerData"


function HyperCharger({ onClose, images }) {
 
 
  return (
    <div className="fixed inset-0 z-10 flex flex-col w-full overflow-y-auto bg-white pb-10">

      {/* Header Section */}
      <GeneralSection images={images} title={Data.header.title} subtitle={Data.header.subtitle}stats={Data.header.stats} />

      {/* Sections */}
      <HyperChargerAbout title={Data.sectiondata.title} sections={Data.sectiondata.section}/>

      {/* hyperchargerstats */}
     <HyperChargerStats title={Data.charge.title}specs={Data.charge.chargesections}image={Data.charge.image}/>
     
      {/* Savings Section */}
      <SavingSection title={Data.savings.title} description={Data.savings.description}cards={Data.savings.cards}bottomtext={Data.savings.bottomtext}/>
     
      {/* Contact Section */}
      <HostHyperCharger title={Data.contact.heading}Data={Data.contact.Host}/>
    
      <BackButton onClose={onClose}/>
      <CommonFooter/>
      
    </div>
  );
}

export default HyperCharger;
