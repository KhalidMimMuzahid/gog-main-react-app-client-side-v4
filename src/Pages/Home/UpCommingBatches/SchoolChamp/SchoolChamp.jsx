import React from 'react';

const SchoolChamp = () => {
    return (
       <div className='mt-[120px]'>
        <h2 className='text-[36px] font-[700] text-center	text-transparent bg-clip-text text-gradient bg-gradient-to-r from-green-500 to-blue-500'>UPCOMING <span className='text-[#4BA25D]'>SCHOOL CHAMP</span> BATCHES</h2>
        <p className='text-center leading-27 text-[18px] font-[500]'>We have courses for students from class 6th to 12th where they will learn to code in flexible time.</p>
        <div className='px-[65px] grid grid-cols-1 md:grid-cols-2 gap-10 mt-[80px]'>
            <div className='flex flex-col items-start   w-625  bg-green-200 rounded-2xl'>
                <div className='p-[40px]'> 
                    <div className='grid grid-cols-3  content-evenly content-between'>
                        <div className="text-[24px]  col-span-2 font-[600] text-gray-900"><h4>Champs of Basic Coding</h4></div>
                        <div className="bg-gradient-to-r from-green-500 via-blue-500 to-blue-500 rounded-[16px] w-[120px]"><h4 className='leading-21 text-[16px] '>₹ 1199/month</h4></div>
                    </div>
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ullam!
                    </h2>
                </div>
            </div>
            <div className='flex flex-col items-start p-40  w-625  bg-green-200 rounded-2xl'>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, iusto.</h2>
            </div>
        </div>
       </div>
    );
};

export default SchoolChamp;