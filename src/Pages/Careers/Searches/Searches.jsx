import React from "react";
import search from "../../../assets/Carrer/Search.svg";
import arrow from "../../../assets/Carrer/arrow down.svg";
const Searches = () => {
  return (
    <div className='py-20'>
      <div>
        <p className='text-center text-[14px] md:text-[24px] text-[#37ED81] pb-6'>
          10 Opening Job’s
        </p>
      </div>
      <div className='w-2/4 mx-auto mb-6 flex items-center justify-between'>
        <div className='w-full flex bg-white rounded-full border'>
          <input
            type='text'
            placeholder='Search position'
            className='input rounded-full w-full focus:border-none'
          />
          <button type='submit'>
            <img src={search} alt='' />
          </button>
        </div>
        <div className='flex items-center gap-6'>
          <div className='w-full'>
            <div className='dropdown'>
              <label tabIndex={0} className='btn m-1 rounded-full'>
                Department
              </label>
              <ul
                tabIndex={0}
                className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full'>
            <div className='dropdown'>
              <label tabIndex={0} className='btn m-1 rounded-full'>
                Location
              </label>
              <ul
                tabIndex={0}
                className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searches;
