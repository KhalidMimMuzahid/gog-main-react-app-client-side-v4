import React from 'react';
import ReferHero from './ReferHero/ReferHero';
import Rewards from './Rewards/Rewards';
import Referral from './Referral/Referral';

const ReferAndEarn = () => {
    return (
        <div className='md:mx-[65px] mx-[20px]'>
            <ReferHero/>
            <Rewards/>
            <Referral/>
        </div>
    );
};

export default ReferAndEarn;