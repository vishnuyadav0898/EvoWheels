import React from "react";
import GeneralSection from "./GeneralSection";
import TestRideSection from "./TestRideSection";
import FinancingSection from "./FinancingSection";
import RelationshipSection from "./RelationshipSection";
import MeetInPersonSection from "./MeetInPersonSection";
import ProcessSection from "./ProcessSection";
import FindSecton from "./FindSecton";
import BackButton from "./BackButton";
import CommonFooter from "./CommonFooter";
import{Data} from "../ComponentData/Ownership/ElectricStoreData"


function ElectricStore({ onClose,images }) {
  // Dynamic data for the component
 
  return (
    <div className="fixed inset-0  z-10 flex flex-col w-full overflow-y-auto bg-white pb-10">

      {/* Header Section */}
      <GeneralSection subtitle={Data.subtitle}images={images}customContent={Data.customContent}/>

      {/* Test Ride Section */}
      <TestRideSection title={Data.testRide.title}description={Data.testRide.description}images={Data.testRide.images}/>
     
      {/* Financing Section */}
      <FinancingSection title={Data.financing.title}description={Data.financing.description}images={Data.financing.images}/>

      {/* Relationship Section */}
      <RelationshipSection title={Data.relationship.title}description={Data.relationship.description}items={Data.relationship.items}/>
    
      {/* Meet In Person Section */}
      <MeetInPersonSection title={Data.meetInPerson.title}description={Data.meetInPerson.description}cards={Data.meetInPerson.cards}/>
     
      {/* Progress Section */}
      <ProcessSection title={Data.progress.title}description={Data.progress.description}image={Data.progress.images}/>
     
     {/* Cities */}
      <FindSecton title={Data.findUs.title}description={Data.findUs.description}cities={Data.findUs.cities}/>

      <BackButton onClose={onClose}/>
      <CommonFooter/>
    </div>
  );
}

export default ElectricStore;
