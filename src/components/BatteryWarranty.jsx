import React, { useState } from "react";
import BatterySpec from "./BatterySpec";
import GeneralSection from "./GeneralSection";
import WarrantyFeatures from "./WarrantyFeatures";
import ExtendWarranty from "./ExtendWarranty";
import FAQSection from "./FAQSection";
import BackButton from "./BackButton";
import CommonFooter from "./CommonFooter";
import {Data} from "../ComponentData/Ownership/BatteryWarrantyData"

function BatteryWarranty({ onClose, images }) {
 
  
  // State for active FAQ index
  const [activeIndex, setActiveIndex] = useState(null);

  
 
  // Toggle FAQ visibility
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="fixed inset-0 z-10 flex flex-col w-full overflow-y-auto bg-white pb-10">

      {/* Header Section */}
      <GeneralSection subtitle={Data.headerData.subTitle} title={Data.headerData.title}buttonText={Data.headerData.ctaText}images={images}listItems={Data.headerData.listItems}/>
  
      {/* Warranty Features Section */}
      <WarrantyFeatures title={Data.warrantydata.title}features={Data.warrantydata.Features}footertext={Data.warrantydata.bottompara}/>

      {/* Battery Specifications Section */}
      <BatterySpec />

      {/* Additional Images Section */}
      <ExtendWarranty title={Data.Extendwarranty.title}images={Data.Extendwarranty.Images}/>
    
      {/* FAQ Section */}
      <FAQSection title={Data.faqData.faqTitle}description={Data.faqData.faqSubtitle}questions={Data.faqData.faqs}toggleFAQ={toggleFAQ}activeIndex={activeIndex}/>

      {/* Close Button */}
      <BackButton onClose={onClose}/>
      <CommonFooter/>
    </div>
  );
}

export default BatteryWarranty;
