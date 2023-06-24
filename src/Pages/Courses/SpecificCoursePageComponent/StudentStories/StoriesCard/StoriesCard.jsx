import React from "react";

const StoriesCard = ({story}) => {

    const {name, sub, body, logo, img} = story;

  return (
    <div className="flex flex-col justify-between md:mx-[20px] mx-[10px] md:w-[340px] w-[250px] md:h-[326px] h-[300px] p-[20px]  bg-[#E1FFE8] dark:bg-[#1A1B1F] rounded-[8px]">
      <div>
        <h4 className="md:text-[24px] text-[18px] text-[#101010] dark:text-[white]  font-[500] ">
            {name}
        </h4>
        <h6 className="text-[#4BA25D] md:text-[18px] font-[400] text-[15px] my-[8px]">
            {sub}
        </h6>
        <p className="text-[#101010] dark:text-[white] md:text-[14px] text-[12px] font-[400] ">
            {body}
        </p>
      </div>
      <div className="flex justify-between md:mt-[20px] mt-[10px] ">
        <img src={logo} alt="bak logo" />
        <img src={img} alt="person imgage" />
      </div>
    </div>
  );
};

export default StoriesCard;
