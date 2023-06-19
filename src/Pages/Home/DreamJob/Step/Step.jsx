import React from "react";
import Typewriter from "typewriter-effect";

const Step = ({ defaultThumb, step, index, setJobStatus, jobStatus }) => {
  return (
    <li
      onMouseLeave={() =>
        setJobStatus({
          expandedIndex: null,
          selectedThambnail: defaultThumb,
        })
      }
      onMouseEnter={() =>
        setJobStatus({
          expandedIndex: index,
          selectedThambnail: step?.thumbnail || defaultThumb,
        })
      }
      className={`hover:cursor-pointer hover:shadow-lg hover:shadow-[#37ED81]/20  md:p-[20px] p-[10px] md:my-[40px] my-[20px] hover:border hover:bg-[#F8FFF9] dark:hover:bg-[#191C1E] rounded-[20px] ${
        jobStatus?.expandedIndex === index &&
        "border-[#37ED81] backdrop-blur-[2px]"
      }`}
    >
      {index + 1}. {step?.title}
      {jobStatus?.expandedIndex === index && (
        <div className="mt-[12px] font-[400] text-[16px] dark:text-[white] text-[#101010]">
          {/* {step?.body} */}
          <Typewriter
            options={{
              strings: [step?.body],
              autoStart: true,
              loop: false,
              delay:5,
              deleteSpeed: 60000 * 60 * 24
            }}
          />
        </div>
      )}
    </li>
  );
};

export default Step;

// hover:border-[#37ED81]
