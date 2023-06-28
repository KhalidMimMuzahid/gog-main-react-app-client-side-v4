import React from 'react';
import ReferHero from './ReferHero/ReferHero';
import Rewards from './Rewards/Rewards';
import Referral from './Referral/Referral';

import ReferralStatus from './ReferralStatus/ReferralStatus';

import ReferSteps from './ReferSteps/ReferSteps';
import ReferralEntries from './ReferralEntries/ReferralEntries';
import TermsandConditions from './TermsandConditions/TermsandConditions';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import WhyGeeksofGurukul from './WhyGeeksofGurukul/WhyGeeksofGurukul';


const ReferAndEarn = () => {
    return (
        <div className='md:mx-[65px] mx-[20px]'>
            <ReferSteps />
            <ReferHero/>
            <Rewards/>
            <Referral/>
            <ReferralStatus/>
            
            <ReferralEntries/>
            <WhyGeeksofGurukul/>
            <TermsandConditions/>
            <FrequentlyAskedQuestions/>
        </div>
    );
};

export default ReferAndEarn;