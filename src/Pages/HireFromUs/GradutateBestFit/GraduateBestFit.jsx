import React from 'react';

const content = [
    
    "Fill this form",
    "Our Partnership Team will understand your needs",
    "Receive profiles tailored to your request.",
    "Interview the candidate as per your processes.",
    "Roll out your offer",
    "Candidate joins immediately"
]

const GraduateBestFit = () => {
    return (
        <div className='grid grid-cols-1 md:gap-[100px]  md:grid-cols-2 md:justify-items-end justify-between w-4/5 mx-auto my-[80px]'>
            <div className='text-[#101010] dark:text-[white]'>
                <h2 className='lg:text-[48px] md:text-[24px]  md:text-left text-center text-[25px] font-[600]'>Find your best fit in our graduates</h2>
                <p className='text-[18px] text-[#101010] dark:text-[white] my-[32px]'>Here’s how you can Hire from Geeks Of Gurukul</p>
                {content?.map((data, i) => <p className='my-[24px] text-[18px] text-[#101010] dark:text-[white]'>{i+1}.  {data}</p> )}
            </div>
            <div>
                <h2 className='md:text-[24px] lg:text-[48px] text-[#101010] dark:text-[white] md:text-left text-center text-[25px] font-[600]'>Hiring Facts</h2>
                <div className='my-[24px] border-2 p-[16px] flex items-center justify-center rounded-[20px] border-[#D1FFD0]'>
                    <p className='text-center text-[#000] dark:text-[white] text-[20px] font-[500]'><span className='text-center text-[24px] text-[#4BA25D] font-[600] pr-[40px]'>96%</span> Retention Rate</p>
                </div>
                <div className='my-[24px] border-2 p-[16px] flex items-center justify-center rounded-[20px] border-[#D1FFD0]'>
                    <p className='text-center text-[#000] dark:text-[white] text-[20px] font-[500]'><span className='text-center text-[24px] text-[#4BA25D] font-[600] pr-[40px]'>200+</span> Hiring Partners</p>
                </div>
                <div className='my-[24px] border-2 p-[16px] flex items-center justify-center rounded-[20px] border-[#D1FFD0]'>
                    <p className='text-center text-[#000] dark:text-[white] text-[20px] font-[500]'><span className='text-center text-[24px] text-[#4BA25D] font-[600] pr-[40px]'>95%</span> Offer Acceptance</p>
                </div>
                <div className='my-[24px] border-2 p-[16px] flex items-center justify-center rounded-[20px] border-[#D1FFD0]'>
                    <p className='text-center text-[#000] dark:text-[white] text-[20px] font-[500]'><span className='text-center text-[24px] text-[#4BA25D] font-[600] pr-[40px]'>&lt; 3 Days</span> Hiring Process</p>
                </div>
                <div className='my-[24px] border-2 p-[16px] flex items-center justify-center rounded-[20px] border-[#D1FFD0]'>
                    <p className='text-center text-[#000] dark:text-[white] text-[20px] font-[500]'>Year Round Availability</p>
                </div>
            
            </div>
        </div>
    );
};

export default GraduateBestFit;