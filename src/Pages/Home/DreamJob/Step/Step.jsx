import React from "react";
import style from "../dreamJob.module.css"

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
          selectedThambnail: step?.thumbnail,
        })
      }
      className={`hover:cursor-pointer hover:shadow-lg hover:shadow-[#37ED81]/20  md:p-[20px] p-[10px] md:my-[40px] my-[20px] hover:border hover:bg-[#F8FFF9] dark:hover:bg-[#191C1E] hover:border-[#37ED81] hover:backdrop-blur-[2px] hover:rounded-[20px] ${style.slide_in}`}
    >
      {index + 1}. {step?.title}
      {jobStatus?.expandedIndex === index && (
        <p className="mt-[12px] font-[400] text-[16px] dark:text-[white] text-[#101010]">
          {step?.body}
        </p>
      )}
    </li>
  );
};

export default Step;
