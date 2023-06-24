import React from "react";

function EachHireStudentCarousel({ item }) {
  return (
    <div className="w-[200px]">
      <div className="flex flex-col items-center gap-3">
        <div style={{ backgroundImage: `url(${item?.img})` }} alt="student image"className="w-[200px] h-[200px] rounded-full bg-cover bg-center bg-no-repeat border border-[#37ED81]" />
        <p className="text-[20px] font-semibold">{item?.name}</p>
        <p>{item?.position}</p>
        <div className="flex gap-4">
          {item?.skills.map((skill, index) => (
            <div key={index}><img src={skill} alt="student skill" className="h-[26px] w-[26px]" /></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EachHireStudentCarousel;
