import React from "react";

const BookFreeDemo = () => {
  return (
    <div className='my-20 p-10 bg-gradient-to-r from-[#D1FFD0] to-[#BBE7FF] dark:from-[#263238] dark:to-[#263238]  dark:text-white rounded-[20px]'>
      <div>
        <p className='text-center text-[16px] md:text-[20px] font-semibold'>
          If you're still unsure about whether software development is the right
          fit for you, it may be comforting to know that the employment rate for
          software engineers stands at an impressive 93%*.
        </p>
      </div>
      <div className='my-5'>
        <p className='text-center text-[16px] md:text-[18px] font-normal'>
          "Secure your spot now by reserving a seat and begin your journey as a
          software developer!"
        </p>
      </div>
      <div className='mt-6 flex items-center justify-center'>
        <button className='px-8 py-4 bg-[#00A3FF] rounded-[30px] text-white hover:transition hover:duration-5000 hover:ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500'>
          BOOK A FREE DEMO
        </button>
      </div>
    </div>
  );
};

export default BookFreeDemo;
