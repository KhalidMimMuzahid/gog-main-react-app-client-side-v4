import React from "react";

const Header = () => {
  return (
    <div>
      <div className='w-11/12 mx-auto'>
        <div>
          <h3 className='text-center text-[14px] md:text-[24px] font-semibold dark:text-white'>
            We're committed to bringing world-class, passionate <br />{" "}
            professionals together to push new boundaries and grow
          </h3>
          <p className="my-2 text-center text-xs md:text-base dark:text-white">
            We believe in building teams where unique perspectives and talents
            can thrive <br /> and everyone has what they need to excel in their role,
            career, and at home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
