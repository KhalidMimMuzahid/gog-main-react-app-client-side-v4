import React from 'react';
import sc from '../../../assets/benfits/01.svg'
import csd from '../../../assets/benfits/02.svg'
import pa from '../../../assets/benfits/03.svg'
import fc from '../../../assets/benfits/04.svg'
import ef from '../../../assets/benfits/05.svg'
import ic from '../../../assets/benfits/06.svg'
import BenefitsCard from './BenefitsCard/BenefitsCard';

const Benefits = () => {

    const benefits = [
        {
            title: "Supportive Community",
            body: "Students become part of a supportive community of like-minded individuals, fostering collaboration, networking, and lifelong connections.",
            thambnail: sc
        },
        {
            title: "Continuous Skill Development",
            body: "Geeks of Gurukul encourages continuous skill development by offering additional resources, workshops, and seminars to keep students updated with the latest advancements in their chosen fields.",
            thambnail: csd
        },
        {
            title: "Practical Approach",
            body: "The programs at Geeks of Gurukul emphasize practical learning, enabling students to gain hands-on experience and apply their knowledge to real-world scenarios.",
            thambnail: pa
        },
        {
            title: "Flexibility and Convenience",
            body: "Geeks of Gurukul provides flexibility in terms of learning schedules and modes. Students can choose from online, offline, or hybrid learning options that suit their preferences.",
            thambnail: fc
        },
        {
            title: "Expert Faculty",
            body: "Students have the opportunity to learn from industry experts and experienced faculty members who guide and mentor them throughout their learning journey.",
            thambnail: ef
        },
        {
            title: "Industry Certifications",
            body: "Students earn industry-recognized certifications upon program completion, validating their skills and enhancing their job prospects.",
            thambnail: ic
        },
    ]

    return (
        <div className='mx-[30px] md:mx-[65px]'>
            <h4 className='mb-[80px] text-center font-[500] md:text-[36px] text-[25px]  bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500'>Geeks of Gurukul offers a range of benefits to students, including:</h4>

            <div className='mx-auto  flex flex-col gap-10'>
            {benefits.map((each, i) => 
                <BenefitsCard  
                    key={i}
                    each={each}
                />
            )}
               
            </div>
            
        </div>
    );
};

export default Benefits;