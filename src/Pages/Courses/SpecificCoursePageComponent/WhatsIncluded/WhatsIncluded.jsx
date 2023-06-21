import React from "react";
import certificate from "../../../../assets/What’s Included/certificate.svg";
import learning from "../../../../assets/What’s Included/High quality learning.svg";
import achivement from "../../../../assets/What’s Included/achivement.svg";
import course from "../../../../assets/What’s Included/course.svg";
import student from "../../../../assets/What’s Included/student.svg";
import user from "../../../../assets/What’s Included/user.svg";
const WhatsIncluded = () => {
  const Dataset = [
    {
      image: certificate,
      text: `Validate your learning journey with a prestigious certificate,
    personally signed by your mentor, serving as a recognized
    testament to your course completion and providing shareable proof
    of your accomplishments.`,
    },
    {
      image: course,
      text: `Expand your horizons with Geeks Of Gurukul's diverse course
    catalog, providing a comprehensive selection of courses spanning
    multiple technology domains to fuel your learning and growth.`,
    },
    {
      image: user,
      text: `Unlock endless possibilities with Geeks Of Gurukul's extensive collection of courses covering a multitude of technology domains, empowering you to explore, learn, and excel in the world of cutting-edge technologies.`,
    },
    {
      image: student,
      text: `Benefit from the expertise of our exceptional team of instructors and mentors, exclusively curated from the esteemed Indian Institutes of Technology (IITs), ensuring top-notch guidance and insights throughout your learning journey.`,
    },
    {
      image: achivement,
      text: `Experience personalized support and guidance tailored to your individual needs as our dedicated instructors provide one-on-one attention to ensure your success and growth as a student.`,
    },
    {
      image: learning,
      text: `Secure your future with our unwavering commitment to your success, backed by a 100% placement guarantee that ensures you land the perfect career opportunity after completing our courses.`,
    },
  ];
  return (
    <div className='my-10'>
      <div className=''>
        <h3 className='text-[25px] md:text-[30px] text-center md:text-left text-[#37ED81] font-medium'>
          What’s Included
        </h3>
      </div>
      <div className='my-10 dark:text-white text-center md:text-left'>
        <p>
          This program is designed to optimise your learning experience by
          utilising practice-based learning methods, expert mentorship and
          community-centred approach.
        </p>
      </div>
      {/* Cards */}
      <div className='my-2 grid grid-cols-12 gap-5 p-5 rounded-lg'>
        {Dataset?.map((data, i) => (
          <div className='col-span-12 md:col-span-6 lg:col-span-4'>
            <div
              key={i}
              className='w-full border border-[#D1FFD0] p-5 rounded-lg flex flex-col gap-4 items-center justify-center h-96'
            >
              <img src={data?.image} alt='' />
              <p className='text-center dark:text-white'>{data?.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsIncluded;
