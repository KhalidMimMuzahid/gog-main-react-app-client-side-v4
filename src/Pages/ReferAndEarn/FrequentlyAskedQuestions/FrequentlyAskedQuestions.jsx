import React from "react";

const faqs = [
    {
      q: "I am not a student of Geeks of Gurukul. Can I still refer to a friend?",
      a: "Yes, of course. We would appreciate it if you would recommend Geeks of Gurukul to your friend",
    },
      {
      q: "Is there any expiry for my referral code?",
      a: "Yes, your code is only valid for 60 days after your referred friend signs up for our platform using your referral code or link. You will be eligible for the rewards when he/she registers for any of our courses within 60 days of signing up and completes his payment.",
    },
    {
      q: "For which programs can I refer?",
      a: "The referral is valid for all the programs available for our site.",
    },
    {
      q: "Is there any limit to the number of vouchers I can get for every successful referral?",
      a: "No. You can refer to as many people. There is no limit to the number of brand vouchers you win. For every referral, you get vouchers upto Rs. 2000/-.",
    },
    {
      q: "Who can I refer to?",
      a: "Anyone who meets the eligibility criteria for our courses can be referred.",
    },
    {
      q: "Whom can I not refer to?",
      a: "You cannot refer to yourself and you cannot refer to an employee of Geeks of Gurukul.",
    },
    {
      q: "Who can not refer?",
      a: "Geeks of Gurukul Employees cannot refer to anyone.",
    },
    {
      q: `What happens if my friend forgets to input the referral code on sign-up?`,
      a: "In this case, we would not be able to help you. This will be counted as an unsuccessful referral.",
    },
  ];

const FrequentlyAskedQuestions = () => {
  return (
    <div className="mt-[80px]">
      <h1 className="font-[600] text-[24px] md:text-[36px] text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
        Frequently Asked Questions
      </h1>

      <div className='join join-vertical w-full my-5'>
        {faqs?.map((faq, i) => (
          <div key={i} className='collapse collapse-arrow join-item'>

            <input type='radio' name='my-accordion-4'/>
            <div className='collapse-title text-[15px] md:text-[18px] font-medium dark:text-white'>

              {faq?.q}
            </div>
            <div className='collapse-content'>
              <p className='text-[#98A2B3] text-[14px] md:text-[16px]'>
                {faq?.a}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default FrequentlyAskedQuestions;
