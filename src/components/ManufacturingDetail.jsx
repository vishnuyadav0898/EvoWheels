import React from "react";
import GeneralSection from "./GeneralSection";
import ManufacturingMainSection from "./ManufacturingMainSection";
import ManufacturingFacilities from "./ManufacturingFacilities";
import BackButton from "./BackButton";
import CommonFooter from "./CommonFooter";
import{Data} from "../ComponentData/Technologies/ManufacturingData"

function ManufacturingDetail({ images, onClose }) {
   
  return (
    <div className="fixed inset-0  z-20 flex flex-col w-full overflow-y-auto bg-white pb-10">
      {/* Header Section */}
      <GeneralSection subtitle={Data.MFdata.subtitle}images={images}units={Data.MFdata.units}/>

      {/* Main Sections */}
      <ManufacturingMainSection title={Data.sectiondata.title}sections={Data.sectiondata.sections}/>
     

      {/* Our Facilities Section */}
      <ManufacturingFacilities title={Data.facilitidata.title}facilities={Data.facilitidata.facilities}/>
     
      {/* Close Button */}
     
      <BackButton onClose={onClose}/>
      <CommonFooter/>
    </div>
  );
}

export default ManufacturingDetail;
