import React from 'react';

import img1 from '../../../../assets/toolsImgs/img1.svg'
import img2 from '../../../../assets/toolsImgs/img2.svg'
import img3 from '../../../../assets/toolsImgs/img3.svg'
import img4 from '../../../../assets/toolsImgs/img4.svg'
import img5 from '../../../../assets/toolsImgs/img5.svg'
import img6 from '../../../../assets/toolsImgs/img6.svg'
import img7 from '../../../../assets/toolsImgs/img7.svg'
import img8 from '../../../../assets/toolsImgs/img8.svg'

const images = [img1, img2, img3, img4, img5, img6, img7, img8];


const ProgramOverview = () => {
    return (
        <div className='md:p-[40px] p-[0px]   mt-[44px]'>
            <h4 className='mb-[40px] md:text-[30px] text-[24px] text-center md:text-left text-[#37ED81] font-[500]'>Program Overview</h4>
            <p className='text-[#101010] dark:text-[white] font-[400] text-[15px] md:text-[16px]  '>A Full Stack Web Development Program is a comprehensive training program that covers all the essential skills and knowledge required for a web developer to work effectively in a modern web development organization. It typically includes training in both front-end and back-end web development. Front-end web development involves creating the user-</p>

            <h5 className='md:my-[20px] my-[40px] text-[#37ED81] font-[500] md:text-[18px] text-[24px] md:text-left text-center'>Tools you learn</h5>

            <div className='md:flex hidden justify-center md:justify-start'>
                {images.map((img, i) => <img className='md:mr-[18px] mr-[10px]' key={i} src={img} alt="tools images" /> )}
            </div>
            <div className='flex  md:hidden justify-center md:justify-start'>
                {images.slice(0, 6).map((img, i) => <img className='md:mr-[18px] mr-[10px] w-[50px]' key={i} src={img} alt="tools images" /> )}
            </div>

        </div>
    );
};

export default ProgramOverview;