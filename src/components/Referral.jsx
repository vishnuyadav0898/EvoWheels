import React from 'react';
import GeneralSection from './GeneralSection';
import ReferandEarn from './ReferandEarn';
import ReferralSteps from './ReferralSteps';
import LeaderBoard from './LeaderBoard';
import Eligibility from './Eligibility';
import BackButton from './BackButton';
import CommonFooter from './CommonFooter';
import {Data} from "../ComponentData/Ownership/ReferralsData"


function Referral({ onClose,images }) {


 
  return (
    <div className="fixed inset-0 z-10 flex flex-col w-full overflow-y-auto bg-white pb-10">
      {/* Header Section */}
      <GeneralSection subtitle={Data.subtitle}buttonText={Data.btnText}additionalText={Data.para}images={images}/>

      {/* Refer and Earn Section */}
      <ReferandEarn title={Data.referralandearndata.title}imagesLgSc={Data.referralandearndata.imagesLgSc}imagesSmSc={Data.referralandearndata.imagesSmSc}/>

      {/* Referral Steps Section */}
      <ReferralSteps title={Data.referral.title}description={Data.referral.description}steps={Data.referral.Steps}/>
     
      {/* Leaderboard Section */}
      <LeaderBoard title={Data.leaderboarddata.title}data={Data.leaderboarddata.leaderboards}/>
    
      {/* Eligibility Section */}
      <Eligibility title={Data.eligibilitydata.title}data={Data.eligibilitydata.eligibilityCriteria}/>
    
      <BackButton onClose={onClose}/>
      <CommonFooter/>
    </div>
  );
}

export default Referral;
