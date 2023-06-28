import React from "react";
import icon1 from "../../../assets/icons/referAndEarn/icon1.svg";
import icon2 from "../../../assets/icons/referAndEarn/icon2.svg";
import icon3 from "../../../assets/icons/referAndEarn/icon3.svg";
import icon4 from "../../../assets/icons/referAndEarn/icon4.svg";
import icon5 from "../../../assets/icons/referAndEarn/icon5.svg";
import icon6 from "../../../assets/icons/referAndEarn/icon6.svg";
import icon7 from "../../../assets/icons/referAndEarn/icon7.svg";
import DataCard from "./DataCard/DataCard";

const cardElemets = [
  {
    icon: icon1,
    title: "100% placement guarantee",
    body: "We stand by our commitment to your success, offering a 100% placement guarantee. Our comprehensive programs, industry connections, and career support ensure that you have the best chance of securing your dream job upon completion of the course.",
  },
  {
    icon: icon2,
    title: "Led by a team of IITians",
    body: "Our courses are exclusively led by a team of highly accomplished instructors from the prestigious Indian Institutes of Technology (IITs). Benefit from their exceptional expertise, guidance, and industry insights as they impart valuable knowledge to help you excel in your chosen field.",
  },
  {
    icon: icon3,
    title: "Course completion certificate",
    body: "Upon successfully completing our courses, you will receive a course completion certificate issued by Skill India, a recognized and respected authority in the skill development sector. This certificate validates your newly acquired skills and enhances your professional profile.",
  },
  {
    icon: icon4,
    title: "Personalized guidance",
    body: "Experience personalized support and guidance throughout your learning journey. Our instructors are dedicated to providing one-on-one attention, understanding your unique learning needs, and ensuring your progress and success.",
  },
  {
    icon: icon5,
    title: "Referral with our hiring partners",
    body: "Gain exclusive access to our vast network of hiring partners through our referral program. Increase your chances of landing coveted job opportunities as we connect you with top companies actively seeking skilled professionals.",
  },
  {
    icon: icon6,
    title: "Projects building",
    body: "Apply your newly acquired skills to real-world projects, enabling you to build a portfolio of impressive work. These hands-on projects provide valuable experience and demonstrate your ability to tackle industry-relevant challenges.",
  },
  {
    icon: icon7,
    title: "Resume building",
    body: "Receive expert assistance in crafting a standout resume that showcases your skills and accomplishments. Our guidance on resume building ensures that you make a strong impression on potential employers and maximize your chances of securing interviews.",
  },
];

const WhyGeeksofGurukul = () => {
  return (
    <div className="mt-[80px]">
      <h1 className="font-[600] text-[24px] md:text-[36px] text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
        Why Geeks of Gurukul?
      </h1>

      <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        
        {cardElemets.map((data, i) => (<DataCard 
            key={i}
            data={data}
        />))}
      </div>
    </div>
  );
};

export default WhyGeeksofGurukul;
