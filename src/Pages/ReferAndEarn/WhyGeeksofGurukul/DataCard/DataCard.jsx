import React from "react";

const DataCard = ({data}) => {
    const {icon, title, body} = data;
  return (
    
      <div className="items-center justify-between">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-[40px] p-[10px] bg-[#D1FFD0] rounded-[50%]"><img className="w-[40px] " src={icon} alt="img icon" /></div>
          <h6 className="text-[24px] mb-[40px] dark:text-[#D1FFD0] text-[#000] font-[600]">
            {title}
          </h6>
        </div>
        <p className="text-[16px] text-justify text-[#000] dark:text-[white]">
          {body}
        </p>
      </div>

  );
};

export default DataCard;
