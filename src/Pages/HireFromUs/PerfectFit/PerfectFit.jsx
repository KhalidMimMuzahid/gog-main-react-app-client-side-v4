import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import style from "./perfectFit.module.css";

const inputStyle =
  "border-[1px] dark:border-[#D0D5DD] w-full py-2 md:py-2.5 px-2.5 md:px-3 rounded-[8px] mt-1 dark:bg-[#8A8F98] bg-[#F8FFF9]  text-black dark:placeholder-[white] text-sm md:text-base";

const info = [
  "Tap into a talent pool of passionate learners ready to make a difference in your organization.",
  "Gain access to highly skilled professionals who are committed to continuous learning and growth.",
  "Our rigorous evaluation process ensures the highest quality candidates for your hiring needs.",
  "Specialized expertise in diverse fields, aligning perfectly with your organization's requirements.",
  "Cost-effective hiring solutions without compromising on talent quality.",
  "Embrace a flexible and scalable workforce, tailored to your evolving needs.",
  "Our dedicated customer support team is always ready to assist you throughout the hiring process.",
];

const PerfectFit = () => {
  return (
    <div className="mt-[80px] grid grid-cols-1 md:grid-cols-2 gap-x-auto items-center gap-[60px]">
      <div className="">
        <h1 className="text-center md:text-left md:text-[24px] lg:text-[48px] font-[600] dark:text-[white] text-[#101010]">
          What makes <span className="text-[#37ED81]">Geeks of Gurukul</span> a
          perfect fit for your company?
        </h1>
        <div className="flex flex-col gap-10 w-full lg:w-[80%] mt-16">
          {info.map((point, index) => (
            <div
              className="flex gap-4 items-center text-[#101010] dark:text-white"
              key={index}
            >
              <BsPatchCheck className="text-2xl text-[#37ED81]" />
              <p className="text-xs sm:text-sm md:text-lg w-full">{point}</p>
            </div>
          ))}
        </div>
        <p className="dark:text-[white] mt-[40px] text-xs sm:text-sm md:text-lg">
          Over <span className="text-[#4BA25D]">200+ company</span> have
          enrolled and hired the talents with Geeks of Gurukul
        </p>
      </div>

      {/* From is start from here  */}

      <div>
      <div className=" flex flex-col border-[1px] dark:bordder-[#8A8F98] justify-between gap-5 bg-[#D1FFD0] dark:bg-[#1C202A] p-10 rounded-[40px]">
        <form className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="name"
              className="dark:text-[#E4E4E4] text-xs md:text-sm"
            >
              Name
              {/* <span className="text-[#EB5757]">*</span> */}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter you name"
              className={inputStyle}
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="dark:text-[#E4E4E4] text-xs md:text-sm"
            >
              Company
              {/* <span className="text-[#EB5757]">*</span> */}
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Enter you company name"
              className={inputStyle}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="dark:text-[#E4E4E4] text-xs md:text-sm"
            >
              Company Email
              {/* <span className="text-[#EB5757]">*</span> */}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="yourcompanyname@email.com"
              className={inputStyle}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="dark:text-[#E4E4E4] text-xs md:text-sm"
            >
              Phone Number
              {/* <span className="text-[#EB5757]">*</span> */}
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="89484 95894"
              className={inputStyle}
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="dark:text-[#E4E4E4] text-xs md:text-sm"
            >
              Message
              {/* <span className="text-[#EB5757]">*</span> */}
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              placeholder="Enter your Assessment name"
              className={`${inputStyle}`}
              required
            />
            <p className="dark:text-[white] text-[#667085] text-[14px] float-right">
              Max word 150
            </p>
          </div>
 
          <div className="flex items-start">
            <input id="idforRadio" type="radio" className={`${style.radio} mt-[4px]` } required />
            <label id="idforRadio" class="w-full ml-4 dark:text-[white] text-[14px] text-[#344054]">
              I authorize Geeks of Gurukul and its representative to contact me
              with updates and notifications via Email, SMS, Whatsapp, and Call.
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-[#00A3FF] rounded-[25px] p-2 md:p-3 mt-5 text-sm md:text-base hover:transition hover:duration-5000 hover:ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default PerfectFit;
