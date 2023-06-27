import React from 'react';
import alexa from '../../../assets/toolsImgs/alexa.svg'
import tablate from '../../../assets/toolsImgs/tablate.svg'
import watch from '../../../assets/toolsImgs/watch.svg'

const Rewards = () => {
    return (
        <div className='mt-[80px]'>
            <h1 className='font-[600] text-[24px] md:text-[36px] text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500'>Win additional rewards on reaching milestones.</h1>
            <p className='pb-[40px] md:text-[18px] text-[15px] text-[#000] dark:text-[white] text-center'>Yes you read that right! We give you a chance to win rewards and goodies.</p>

            <div className='grid items-center justify-items-center gap-[20px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                <div className='bg-[#BEF3FF] rounded-[40px] flex items-center p-[30px] gap-[40px]  min-w-min-[412px]'>
                    <img src={watch} alt="Watch img" />
                    <div className='flex flex-col justify-items-end gap-[10px]'>
                        <p className='lg:text-[20px] md:text-[18px] text-[12px] text-[#101010]  font-[500] '>10 Referrals</p>
                        <h6 className='lg:text-[20px] md:text-[20px] text-[15px] text-[#101010]  font-[600]'>Boat smart watch</h6>
                    </div>
                </div>
                <div className='bg-[#BBFFD7] rounded-[40px] flex items-center p-[30px] gap-[40px] md:w-auto w-[320px]'>
                    <img src={alexa} alt="Alexa img" />
                    <div className='flex flex-col justify-items-end gap-[10px]'>
                        <p className='lg:text-[20px] md:text-[18px] text-[12px] text-[#101010]  font-[500]'>20 Referrals</p>
                        <h6 className='lg:text-[20px] md:text-[20px] text-[15px] text-[#101010]  font-[600]'>Alexa Speaker</h6>
                    </div>
                </div>
                <div className='bg-[#E3D2FF] rounded-[40px] flex items-center p-[30px] gap-[40px] min-w-min-[412px]'>
                    <img src={tablate} alt="" />
                    <div className='flex flex-col justify-items-end gap-[10px]'>
                        <p className='lg:text-[20px] md:text-[18px] text-[12px] text-[#101010]  font-[500]'>30 Referrals</p>
                        <h6 className='lg:text-[20px] md:text-[20px] text-[15px] text-[#101010]  font-[600]'>Samsung S6 tablet</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rewards;