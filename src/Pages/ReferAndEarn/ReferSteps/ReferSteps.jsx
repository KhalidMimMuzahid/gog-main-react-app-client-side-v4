import React, { useEffect, useState } from "react";

import step1 from "../../../assets/ReferAndEarn/step1.svg";
import step2 from "../../../assets/ReferAndEarn/step2.svg";
import step3 from "../../../assets/ReferAndEarn/step3.svg";

const data = [
  {
    index: "1",
    img: step1,
    heading: "Sign up",
    desc: "Sign Up on Geeks of Gurukul and you will be provided with a unique referral code",
  },
  {
    index: "2",
    img: step2,
    heading: "Refer",
    desc: "Refer the link to your friend through any social media platform",
  },
  {
    index: "3",
    img: step3,
    heading: "Earn rewards",
    desc: "Earn Rewards once your friend applies to Geeks of Gurukul's program and gets selected",
  },
];

function ReferSteps() {
  const [i, setI] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prev) => (prev === data.length ? 1 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-[#101010] dark:text-white my-[80px]">
      <h1 className="text-center text-[24px] md:text-[30px] mb-[80px] font-medium">
        Join us in revolutionizing skill-based education in India and seize this
        opportunity to be a part of our mission in just <span className="text-[#37ED81]">3 simple steps!</span>
      </h1>
      <div className="flex items-center justify-center gap-10 md:gap-16 lg:gap-40 flex-wrap">
        <div className="relative overflow-hidden">
          {data.map((item) => (
            <img
              key={item?.index}
              src={item?.img}
              alt="step image"
              className={`my-2 lg:max-w-[407px] duration-500 ${
                item?.index == i ? "relative opacity-100" : "absolute opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="text-center flex items-center gap-10 md:gap-20">
          <div className="flex flex-col items-center gap-20 max-w-[400px]">
            {data.map((item) => (
              <div
                className={`flex flex-col gap-5 duration-500 ${
                  item?.index <= i ? "opacity-100" : "opacity-0"
                }`}
                key={item?.index}
              >
                <h1 className="text-[#37ED81] text-[20px] md:text-[24px]">{item?.heading}</h1>
                <p className="text-[14px] md:text-[18px]">{item?.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-44 relative">
            <div className="z-10 absolute left-1/2 w-[1px] h-full border border-[#101010] dark:border-white border-dashed"></div>
            {data.map((item) => (
              <div
                key={item?.index}
                className={`text-[#101010] w-[45px] h-[45px] flex items-center justify-center rounded-full z-20 duration-500 ${
                  item?.index == i ? "bg-[#37ED81]" : "bg-[#E1FFE8]"
                }`}
              >
                <p className="text-[20px] font-semibold">{item?.index}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferSteps;
