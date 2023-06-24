import React from "react";
import LiveMockInterviews from "../../../../assets/icons/CoursesIcons/LiveMockInterviews.svg";
import partners from "../../../../assets/icons/CoursesIcons/partners.svg";
import fees from "../../../../assets/icons/CoursesIcons/fees.svg";
import Rupee from "../../../../assets/icons/CoursesIcons/Rupee.svg";
import CardElement from "./CardElemement/CardElement";

const Placement = () => {
  const steps = [
    {
      img: LiveMockInterviews,
      body: "6000+ Students Currently Enrolled",
    },
    {
      img: partners,
      body: "4000+ hiring partners",
    },
    {
      img: fees,
      body: "6.9 LPA Average Salary",
    },
    {
      img: Rupee,
      body: "36 LPA Highest Salary",
    },
  ];

  return (
    <div className="my-[80px]">
      <div className="grid md:grid-cols-4  grid-cols-2 gap-x-auto gap-y-auto lg:w-4/5 mx-auto">
        {steps.map((element, index) => (
          <CardElement key={index} element={element}/>
        ))}
      </div>
    </div>
  );
};

export default Placement;
