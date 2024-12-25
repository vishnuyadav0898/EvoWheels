import React, { useState } from "react";
import FAQSection from "./FAQSection";
import HyperServiceHeader from "./HyperServiceHeader";
import HyperServiceContent from "./HyperServiceContent";
import BackButton from "./BackButton";
import CommonFooter from "./CommonFooter";
import {Data}from "../ComponentData/Ownership/HyperServiceData"

function HyperService({ onClose }) {
  
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle FAQ visibility
    const toggleFAQ = (index) => {
       setActiveIndex(activeIndex === index ? null : index);
    };
  return (
  <div className="fixed inset-0  z-10 flex flex-col w-full h-screen bg-gray-100 overflow-y-auto p-2">

      {/* Header Section */}
      <HyperServiceHeader title={Data.title}subtitle={Data.subtitle}btntext={Data.headerButtonText}/>
    
      {/* Content Sections */}
      <HyperServiceContent sections={Data.sections}/>
    
      {/* FAQ Section */}
      <FAQSection title={Data.faqTitle} description={Data.faqSubtitle}questions={Data.faqs}toggleFAQ={toggleFAQ}activeIndex={activeIndex}/>

      {/* Close Button */}
      <BackButton onClose={onClose}/>
      <CommonFooter/>
  </div>
  );
}

export default HyperService;
