import React from "react";
import certificate from "../../../../assets/What’s Included/certificate.svg";
import learning from "../../../../assets/What’s Included/High quality learning.svg";
import achivement from "../../../../assets/What’s Included/achivement.svg";
import course from "../../../../assets/What’s Included/course.svg";
import student from "../../../../assets/What’s Included/student.svg";
import user from "../../../../assets/What’s Included/user.svg";
const WhatsIncluded = () => {
  return (
    <div className='my-10'>
      <div className='p-10'>
        <h3 className='text-[25px] md:text-[30px] text-[#37ED81] font-medium'>
          What’s Included
        </h3>
      </div>
      <div className='my-10 p-10 dark:text-white'>
        <p>
          This program is designed to optimise your learning experience by
          utilising practice-based learning methods, expert mentorship and
          community-centred approach.
        </p>
      </div>
      {/* Cards */}
      <div className='my-2 grid grid-cols-12 gap-5 p-5 rounded-lg'>
        <div className='col-span-12 md:col-span-6 lg:col-span-4'>
          <div className='w-full border p-5 rounded-lg flex flex-col items-center justify-center h-96'>
            <img src={certificate} alt='' />
            <p className='text-center dark:text-white'>
              Validate your learning journey with a prestigious certificate,
              personally signed by your mentor, serving as a recognized
              testament to your course completion and providing shareable proof
              of your accomplishments.
            </p>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-4'>
          <div className='w-full border p-5 rounded-lg flex flex-col items-center justify-center h-96'>
            <img src={course} alt='' />
            <p className='text-center dark:text-white'>
              Expand your horizons with Geeks Of Gurukul's diverse course
              catalog, providing a comprehensive selection of courses spanning
              multiple technology domains to fuel your learning and growth.
            </p>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-4'>
          <div className='w-full border p-5 rounded-lg flex flex-col items-center justify-center h-96'>
            <img src={user} alt='' />
            <p className='text-center dark:text-white'>
              Unlock endless possibilities with Geeks Of Gurukul's extensive
              collection of courses covering a multitude of technology domains,
              empowering you to explore, learn, and excel in the world of
              cutting-edge technologies.
            </p>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-4'>
          <div className='w-full border p-5 rounded-lg flex flex-col items-center justify-center h-96'>
            <img src={student} alt='' />
            <p className='text-center dark:text-white'>
              Benefit from the expertise of our exceptional team of instructors
              and mentors, exclusively curated from the esteemed Indian
              Institutes of Technology (IITs), ensuring top-notch guidance and
              insights throughout your learning journey.
            </p>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-4'>
          <div className='w-full border p-5 rounded-lg flex flex-col items-center justify-center h-96'>
            <img src={achivement} alt='' />
            <p className='text-center dark:text-white'>
              Experience personalized support and guidance tailored to your
              individual needs as our dedicated instructors provide one-on-one
              attention to ensure your success and growth as a student.
            </p>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-4'>
          <div className='w-full border p-5 rounded-lg flex flex-col items-center justify-center h-96'>
            <img src={learning} alt='' />
            <p className='text-center dark:text-white'>
              Secure your future with our unwavering commitment to your success,
              backed by a 100% placement guarantee that ensures you land the
              perfect career opportunity after completing our courses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsIncluded;