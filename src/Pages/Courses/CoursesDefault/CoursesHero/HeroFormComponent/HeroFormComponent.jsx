import React from "react";

function HeroFormComponent() {
  return (
    <div className="col-span-1 lg:col-span-5 dark:bg-[#1C202A] p-10 rounded-xl">
      <h1>Speak to a Career Counselor!</h1>
      <p className="text-[#98A2B3]">
        "Interested in pursuing a successful career in Software Development?
        Discover the ways this program can assist you, completely free of
        charge!"
      </p>
      <form>
        <div>
          <label htmlFor="name" className="dark:text-[#E4E4E4]">
            Full name <span className="text-[#EB5757]">*</span>
          </label>
          <input id="name" name="name" type="text" />
        </div>
        <div>
          <label htmlFor="phno" className="dark:text-[#E4E4E4]">
            Full name <span className="text-[#EB5757]">*</span>
          </label>
          <input id="phno" name="phno" type="tel" />
        </div>
        <button type="submit">Book a Demo</button>
      </form>
      <p className="dark:text-[#E4E4E4]">Enroll today, limited seats available.</p>
    </div>
  );
}

export default HeroFormComponent;
