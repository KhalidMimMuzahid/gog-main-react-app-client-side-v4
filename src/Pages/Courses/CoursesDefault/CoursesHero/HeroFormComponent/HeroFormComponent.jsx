import React from "react";

const inputStyle = "w-full py-2 md:py-2.5 px-2.5 md:px-3 rounded-lg mt-1 dark:bg-white bg-[#F8FFF9] border dark:border-0 text-black text-sm md:text-base";

function HeroFormComponent() {
  return (
    <div className="col-span-1 lg:col-span-4 flex flex-col justify-between gap-5 bg-[#D1FFD0] dark:bg-[#1C202A] p-10 rounded-xl">
      <h1 className="text-[20px] md:text-[24px]">Speak to a Career Counselor!</h1>
      <p className="text-[#98A2B3] text-sm md:text-base">
        "Interested in pursuing a successful career in Software Development?
        Discover the ways this program can assist you, completely free of
        charge!"
      </p>
      <form className="flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="dark:text-[#E4E4E4] text-xs md:text-sm">
            Full Name <span className="text-[#EB5757]">*</span>
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
          <label htmlFor="phno" className="dark:text-[#E4E4E4] text-xs md:text-sm">
            Phone Number <span className="text-[#EB5757]">*</span>
          </label>
          <input
            id="phno"
            name="phno"
            type="tel"
            placeholder="Enter you number"
            className={inputStyle}
            required
          />
        </div>
        <button type="submit" className="text-white bg-[#00A3FF] rounded-lg p-2 md:p-3 mt-5 text-sm md:text-base">Book a Demo</button>
      </form>
      <p className="dark:text-[#E4E4E4] text-sm md:text-base">
        Enroll today, limited seats available.
      </p>
    </div>
  );
}

export default HeroFormComponent;
