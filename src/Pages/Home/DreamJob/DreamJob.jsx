import React, { useState, useEffect } from "react";
import simpleSteps from "../../../assets/someBG/5 Simple Steps.svg";
import simpleSteps2 from "../../../assets/someBG/02.svg";
import simpleSteps3 from "../../../assets/someBG/03.svg";
import simpleSteps4 from "../../../assets/someBG/04.svg";
import simpleSteps5 from "../../../assets/someBG/05.svg";
import style from "./dreamJob.module.css";
import Step from "./Step/Step";

const DreamJob = () => {
  const [jobStatus, setJobStatus] = useState({
    expandedIndex: null,
    selectedThambnail: simpleSteps,
  });

  useEffect(() => {
    const stepsImage = document.getElementById("steps-image");
    const d_nested = document.getElementById("steps-image-id");
    d_nested && stepsImage?.removeChild(d_nested);
    const newImageElement = document.createElement("img");
    newImageElement.setAttribute("style", "transition: all 4s ease-in-out 1s;");
    newImageElement.setAttribute("src", jobStatus?.selectedThambnail);
    newImageElement.setAttribute("id", "steps-image-id");
    // newImageElement.setAttribute("class", "steps-image-class");
    newImageElement.setAttribute("class", style?.steps_image_class);

    stepsImage.appendChild(newImageElement);
  }, [jobStatus?.expandedIndex]);

  const stepsForGotHired = [
    {
      title: "Register",
      body: "Begin by registering for your desired program on our website. Fill in your details and choose the course that aligns with your career goals.",
      thumbnail: simpleSteps,
    },
    {
      title: "Start the Program",
      body: "Once registered, you will gain access to our comprehensive learning platform. Begin your learning journey by accessing our curated course materials, video lectures, and interactive quizzes",
      thumbnail: simpleSteps2,
    },
    {
      title: "Study with Us",
      body: "Dive into the course content and engage in hands-on exercises and projects. Our experienced instructors will guide you through the curriculum, helping you grasp the concepts and develop practical skills.",
      thumbnail: simpleSteps3,
    },
    {
      title: "Be Prepared for Interviews",
      body: "As you progress through the program, we will provide you with career-focused resources and interview preparation guidance. Learn how to showcase your skills, build an impressive portfolio, and master the art of interview techniques.",
      thumbnail: simpleSteps4,
    },
    {
      title: "Get Placed",
      body: "With our strong industry connections and extensive network of hiring partners, we strive to help you secure your dream job. Leverage our placement assistance services, career fairs, and networking events to connect with potential employers and open doors to exciting job opportunities.",
      thumbnail: simpleSteps5,
    },
  ];

  return (
    <div className="my-[120px]">
      <h2 className=" md:px-[60px] font-poppins  font-[600] text-[22px] md:text-[48px]  md:leading-[72px] dark:text-[#FFFFFF] text-[#101010]">
        Secure your Dream Job <br /> with these{" "}
        <span className="text-[#4BA25D] dark:text-[#37ED81]">
          5 Simple Steps
        </span>{" "}
      </h2>
      <div className="md:px-[60px] grid grid-cols-1 gap-10 md:grid-cols-2 mt-[40px] ">
        <div className="duration-300">
          <ul className="text-[#101010] font-[500] md:text-[24px] text-[18px] dark:text-[#FFFFFF]">
              {stepsForGotHired?.map((step, i) => (
                <Step
                  key={i}
                  index={i}
                  jobStatus={jobStatus}
                  setJobStatus={setJobStatus}
                  step={step}
                  defaultThumb={simpleSteps}
                />
              ))}
          </ul>
        </div>
        <div className="mx-auto my-auto" id="steps-image"></div>
      </div>
    </div>
  );
};

export default DreamJob;
