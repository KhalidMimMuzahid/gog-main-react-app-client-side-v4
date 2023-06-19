import React from "react";
import cap from "../../../assets/Banner/cap.svg";
import hiring from "../../../assets/Banner/hiring.svg";
import meeting from "../../../assets/Banner/meeting.svg";
import placement from "../../../assets/Banner/placement.svg";
import roadmap from "../../../assets/Banner/roadmap.svg";
import style from "./banner.module.css";

const data = [
  {
    title: "Students Currently Enrolled",
    number: "200+",
    img: cap,
  },
  {
    title: "Total Batch",
    number: "10+",
    img: hiring,
  },
  {
    title: "We Started Our Journey",
    number: "2023",
    img: meeting,
  },
  {
    title: "Placement Rate",
    number: "96%",
    img: placement,
  },
  {
    title: "Hiring Partners",
    number: "50+",
    img: roadmap,
  },
];

const Banner = () => {
  return (
    <div className="p-[30px] md:p-[65px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="col-span-8 flex flex-col lg:flex-row items-center gap-[40px]">
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[40px]">
              {data.slice(0, 3).map((item, index) => (
                <div
                  className="w-[340px] rounded-[20px] lg:hover:translate-x-6 lg:hover:scale-110 transition-[2000ms] hover:cursor-pointer"
                  key={index}
                >
                  <div className={`${style.border_gradient} rounded-[20px]`}>
                    <div className="flex items-center p-5 bg-[#BDF5BC] dark:bg-[#222C26]  rounded-[20px]">
                      <div className="w-1/2 font-medium">
                        <p className="text-[20px] font-medium text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#000000] to-[#905BEC] dark:from-[#37ED81] dark:to-[#905BEC]">
                          {item?.title}
                        </p>
                        <p className="text-[36px] dark:text-[#3BE686]">
                          {item?.number}
                        </p>
                      </div>
                      <div className="w-1/2">
                        <img src={item?.img} alt="enrolled-student" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[40px]">
            {data.slice(3, 5).map((item, index) => (
              <div
                className="w-[340px] rounded-[20px] lg:hover:translate-x-6 lg:hover:scale-110 transition-[2000ms] hover:cursor-pointer"
                key={index}
              >
                <div className={`${style.border_gradient} rounded-[20px]`}>
                  <div className="flex items-center p-5 bg-[#BDF5BC] dark:bg-[#222C26]  rounded-[20px]">
                    <div className="w-1/2 font-medium">
                      <p className="text-xl font-medium text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#000000] to-[#905BEC] dark:from-[#37ED81] dark:to-[#905BEC]">
                        {item?.title}
                      </p>
                      <p className="text-[36px] dark:text-[#3BE686]">
                        {item?.number}
                      </p>
                    </div>
                    <div className="w-1/2">
                      <img src={item?.img} alt="enrolled-student" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4 mt-10 lg:mt-0">
          <div className="p-4">
            <h3 className="text-[30px] md:text-[36px] font-medium md:font-semibold text-center lg:text-right text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#4BA25D] via-[#3DA5BD] to-[#905BEC]">
              <span>Start learning with</span> <br />
              <span className="text-[#37ED81]">Geeks of Gurukul</span>
            </h3>
            <p className="text-[18px] text-[#8A8F98] text-center lg:text-right font-medium mt-7 mb-5">
              Get unlimited access to structured courses & doubt clearing
              sessions
            </p>
            <div className="flex lg:justify-end justify-center">
              <button className="px-4 py-2 text-white bg-gradient-to-r from-[#00A3FF] to-[#00A3FF] hover:to-[#905BEC] rounded-[20px] my-4 float-right">
                Assessment Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
