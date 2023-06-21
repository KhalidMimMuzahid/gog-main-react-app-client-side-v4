import React from 'react';
import StoriesCard from './StoriesCard/StoriesCard'
import Marquee from "react-fast-marquee";
import AB from '../../../../assets/icons/s30PageIcons/aixs-bank.svg'
import AE from '../../../../assets/icons/s30PageIcons/AE.svg'
import CB from '../../../../assets/icons/s30PageIcons/city-bank.svg'
import asI1 from '../../../../assets/icons/s30PageIcons/asI1.svg'
import akI1 from '../../../../assets/icons/s30PageIcons/akI1.svg'
import skI1 from '../../../../assets/icons/s30PageIcons/skI1.svg'

const StudentStories = () => {

    const stories = [
        {
            name: 'Akhil Sharma',
            sub: 'Data scientist',
            body: 'It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable thank you sir for teaching DSA concepts in a graspablemanner and supporting us throughout the course  DSA concepts in a graspablemanner',
            logo: AB,
            img: asI1
        },
        {
            name: 'Anagh Kanungo',
            sub: 'Full stack',
            body: 'This is the best course out there to learn recursion and backtracking concepts intuitively from scratch, Bhaiya is a wonderfully teacher and teaches from the basics, explaining every problem in detail including Leetcode Hard problems, highly recommend',
            logo: AE,
            img: akI1
        },
        {
            name: 'Sandeep kumar',
            sub: 'web developer',
            body: 'During entire session During entire session it is mandatory that we should Practice more questions rather than theory so that work is superbly done by Babbar bhaiya  mandatory that we sho work is superbly done by Babbar bhaiya',
            logo: CB,
            img: skI1
        },
    ]


    return (
        <div className="md:p-[40px] mt-[-60px] p-[0px] ">
            <h4 className="mb-[40px] md:text-[30px] text-[25px] text-center md:text-left text-[#37ED81] font-[500]">
            Student Stories
            </h4>

           

           <div>
                <Marquee pauseOnHover={true} className="" speed={80}>
                {stories?.map((story, i) => (
                    <StoriesCard story={story} key={i} />
                ))}
                </Marquee>
            </div>

        </div>
    );
};

export default StudentStories;