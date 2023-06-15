import React, { useState } from "react";
import simpleSteps from "../../../assets/someBG/5 Simple Steps.svg";
import simpleSteps2 from "../../../assets/someBG/02.svg";
import simpleSteps3 from "../../../assets/someBG/03.svg";
import simpleSteps4 from "../../../assets/someBG/04.svg";
import simpleSteps5 from "../../../assets/someBG/05.svg";



const DreamJob = () => {
  const [jobStatus, setJobStatus] = useState({
    expandedIndex: null,
    selectedThambnail: simpleSteps,
  });

  

  return (
    <div className="mx-[65px] my-[120px]">
      <h2 className=" md:px-[60px] font-poppins  font-[600] text-[22px] md:text-[48px]  md:leading-[72px] dark:text-[#FFFFFF] text-[#101010]">
        Secure your Dream Job <br /> with these{" "}
        <span className="text-[#4BA25D] dark:text-[#37ED81]">
          5 Simple Steps
        </span>{" "}
      </h2>
      <div className="md:px-[60px] grid grid-cols-1 gap-10 md:grid-cols-2 mt-[40px] ">
        <div className="duration-300">
          <ul className="text-[#101010] font-[500] md:text-[24px] text-[18px] dark:text-[#FFFFFF]">
            <li
              onMouseLeave={() =>
                setJobStatus({
                  expandedIndex: null,
                  selectedThambnail: simpleSteps,
                })
              }
              onMouseEnter={() =>
                setJobStatus({
                  expandedIndex: 1,
                  selectedThambnail: simpleSteps,
                })
              }
              className="hover:shadow-lg hover:shadow-[#37ED81]/20  md:p-[20px] p-[10px] md:my-[40px] my-[20px] hover:border hover:bg-[#F8FFF9] hover:border-[#37ED81] hover:backdrop-blur-[2px] hover:rounded-[20px]"
            >
              1. Register
              {jobStatus?.expandedIndex === 1 && <p className="mt-[12px] font-[400] text-[16px] text-[#101010]">Begin by registering for your desired program on our website. Fill in your details and choose the course that aligns with your career goals.</p>}
            </li>
            <li onMouseLeave={() =>
                setJobStatus({
                  expandedIndex: null,
                  selectedThambnail: simpleSteps,
                })
              }
              onMouseEnter={() =>
                setJobStatus({
                  expandedIndex: 2,
                  selectedThambnail: simpleSteps2,
                })
              } className="hover:shadow-lg hover:shadow-[#37ED81]/20  md:p-[20px] p-[10px] md:my-[40px] my-[20px] hover:border hover:bg-[#F8FFF9] hover:border-[#37ED81] hover:backdrop-blur-[2px] hover:rounded-[20px]" >
              2. Start the Program
              {jobStatus?.expandedIndex === 2 && <p className="mt-[12px] font-[400] text-[16px] text-[#101010]">Once registered, you will gain access to our comprehensive learning platform. Begin your learning journey by accessing our curated course materials, video lectures, and interactive quizzes</p>}
            </li>
            <li onMouseLeave={() =>
                setJobStatus({
                  expandedIndex: null,
                  selectedThambnail: simpleSteps,
                })
              }
              onMouseEnter={() =>
                setJobStatus({
                  expandedIndex: 3,
                  selectedThambnail: simpleSteps3,
                })
              } className="hover:shadow-lg hover:shadow-[#37ED81]/20  md:p-[20px] p-[10px] md:my-[40px] my-[20px] hover:border hover:bg-[#F8FFF9] hover:border-[#37ED81] hover:backdrop-blur-[2px] hover:rounded-[20px]">
              3. Study with Us
              {jobStatus?.expandedIndex === 3 && <p className="mt-[12px] font-[400] text-[16px] text-[#101010]">Dive into the course content and engage in hands-on exercises and projects. Our experienced instructors will guide you through the curriculum, helping you grasp the concepts and develop practical skills.</p>}
            </li>
            <li onMouseLeave={() =>
                setJobStatus({
                  expandedIndex: null,
                  selectedThambnail: simpleSteps,
                })
              }
              onMouseEnter={() =>
                setJobStatus({
                  expandedIndex: 4,
                  selectedThambnail: simpleSteps4,
                })
              } className=" hover:shadow-lg hover:shadow-[#37ED81]/20  md:p-[20px] p-[10px] md:my-[40px] my-[20px] hover:border hover:bg-[#F8FFF9] hover:border-[#37ED81] hover:backdrop-blur-[2px] hover:rounded-[20px]">
              4. Be Prepared for Interviews
              {jobStatus?.expandedIndex === 4 && <p className="mt-[12px] font-[400] text-[16px] text-[#101010]">As you progress through the program, we will provide you with career-focused resources and interview preparation guidance. Learn how to showcase your skills, build an impressive portfolio, and master the art of interview techniques.</p>}
            </li>
            <li onMouseLeave={() =>
                setJobStatus({
                  expandedIndex: null,
                  selectedThambnail: simpleSteps,
                })
              }
              onMouseEnter={() =>
                setJobStatus({
                  expandedIndex: 5,
                  selectedThambnail: simpleSteps5,
                })
              } className=" duration-300 hover:shadow-lg hover:shadow-[#37ED81]/20  md:p-[20px] p-[10px] md:my-[40px] my-[20px] hover:border hover:bg-[#F8FFF9] hover:border-[#37ED81] hover:backdrop-blur-[2px] hover:rounded-[20px]">
              5. Get Placed
              {jobStatus?.expandedIndex === 5 && <p className="z-20 duration-300  hover:opacity-100 transition-opacity  ease-in-out   mt-[12px] font-[400] text-[16px] text-[#101010]">With our strong industry connections and extensive network of hiring partners, we strive to help you secure your dream job. Leverage our placement assistance services, career fairs, and networking events to connect with potential employers and open doors to exciting job opportunities.</p>}
            </li>
          </ul>
        </div>
        <div className="mx-auto my-auto">
          <img src={jobStatus?.selectedThambnail} alt="steps image" />
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
