import React from "react";

const content = [
  "Fill this form",
  "Our Partnership Team will understand your needs",
  "Receive profiles tailored to your request.",
  "Interview the candidate as per your processes.",
  "Roll out your offer",
  "Candidate joins immediately",
];

const GraduateBestFit = () => {
  return (
    <div className="grid grid-cols-1 md:gap-[100px]  md:grid-cols-2 md:justify-items-end justify-between lg:w-4/5 mx-auto my-[80px] gap-10">
      <div className="text-[#101010] dark:text-[white]">
        <h2 className="lg:text-[48px] md:text-[24px]  md:text-left text-center text-[25px] font-[600]">
          Find your best fit in our graduates
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#101010] dark:text-[white] my-[32px]">
          Here’s how you can Hire from Geeks Of Gurukul
        </p>
        {content?.map((data, i) => (
          <p className="my-[24px] text-[16px] md:text-[18px] text-[#101010] dark:text-[white]">
            {i + 1}. {data}
          </p>
        ))}
      </div>
      <div>
        <h2 className="md:text-[24px] lg:text-[48px] text-[#101010] dark:text-[white] md:text-left text-center text-[25px] font-[600]">
          Hiring Facts
        </h2>
        <div className="my-[24px] border-2 p-[16px] flex items-center justify-center rounded-[20px] border-[#D1FFD0] flex-wrap gap-5">
          <p className="text-center text-[20px] md:text-[24px] text-[#4BA25D] font-[600]">
            3 Days
          </p>
          <p className="text-center text-[#000] dark:text-[white] text-[16px] md:text-[20px] font-[500]">
            Hiring Process
          </p>
        </div>
        <div className="my-[24px] border-2 p-[16px] flex items-center justify-center rounded-[20px] border-[#D1FFD0] flex-wrap gap-5">
          <p className="text-center text-[20px] md:text-[24px] text-[#4BA25D] font-[600]">
            96%
          </p>
          <p className="text-center text-[#000] dark:text-[white] text-[16px] md:text-[20px] font-[500]">
            Retention Rate
          </p>
        </div>
        <div className="my-[24px] border-2 p-[16px] flex items-center justify-center rounded-[20px] border-[#D1FFD0] flex-wrap gap-5">
          <p className="text-center text-[20px] md:text-[24px] text-[#4BA25D] font-[600]">
            200+
          </p>
          <p className="text-center text-[#000] dark:text-[white] text-[16px] md:text-[20px] font-[500]">
            Hiring Partners
          </p>
        </div>
        <div className="my-[24px] border-2 p-[16px] flex items-center justify-center rounded-[20px] border-[#D1FFD0] flex-wrap gap-5">
          <p className="text-center text-[20px] md:text-[24px] text-[#4BA25D] font-[600]">
            95%
          </p>
          <p className="text-center text-[#000] dark:text-[white] text-[16px] md:text-[20px] font-[500]">
            Offer Acceptance
          </p>
        </div>
        <div className="my-[24px] border-2 p-[16px] flex items-center justify-center rounded-[20px] border-[#D1FFD0]">
          <p className="text-center text-[#000] dark:text-[white] text-[16px] md:text-[20px] font-[500]">
            Year Round Availability
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraduateBestFit;
