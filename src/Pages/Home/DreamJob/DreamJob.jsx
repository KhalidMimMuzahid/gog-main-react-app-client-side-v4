import React from 'react';
import simpleSteps from '../../../assets/someBG/5 Simple Steps.svg'

const DreamJob = () => {
    return (
        <div className='mx-[65px] my-[120px]' >
            <h2 className=' md:px-[60px] font-poppins  font-[600] text-[22px] md:text-[48px]  md:leading-[72px] dark:text-[#FFFFFF] text-[#101010]'>Secure your Dream Job <br /> with these <span className='text-[#4BA25D] dark:text-[#37ED81]'>5 Simple Steps</span> </h2>
            <div className='md:px-[60px] grid grid-cols-1 gap-10 md:grid-cols-2 mt-[40px] '>
                <div>
                    <ul className='text-[#101010] dark:text-[#FFFFFF]'>
                        <li className='md:p-[20px] p-[10px] md:mb-[40px] mb-[20px]'>1. Register</li>
                        <li className='md:p-[20px] p-[10px] md:my-[40px] my-[20px]'>2. Start the Program</li>
                        <li className='md:p-[20px] p-[10px] md:my-[40px] my-[20px]'>3. Study with Us</li>
                        <li className='md:p-[20px] p-[10px] md:my-[40px] my-[20px]'>4. Be Prepared for Interviews</li>
                        <li className='md:p-[20px] p-[10px] md:my-[40px] my-[20px]'>5. Get Placed</li>
        
                    </ul>
                </div>
                <div className='mx-auto my-auto'>
                    <img src={simpleSteps} alt="steps image" />
                </div>
            </div>
        </div>
    );
};

export default DreamJob;