import React from 'react'

const JobRole = () => {
  return (
      <div className='my-10 p-10'>
          <h3 className='font-medium dark:text-white'><span className='text-[25px] md:text-[30px] text-[#37ED81]'>Job role</span> (Upon completion)</h3>
          <div className="my-10 flex flex-col md:flex-row items-center gap-6 md:gap-[187px]">
              <button className='w-72 dark:text-white px-6 py-3 bg-[#D1FFD0] dark:bg-[#92f790] rounded-[25px]'>MERN stack Developer</button>
              <button className='w-72 dark:text-white px-6 py-3 bg-[#D1FFD0] dark:bg-[#92f790] rounded-[25px]'>Full stack Developer</button>
              <button className='w-72 dark:text-white px-6 py-3 bg-[#D1FFD0] dark:bg-[#92f790] rounded-[25px]'>Backend Developer</button>
          </div>
          <div className="my-10 flex flex-col md:flex-row items-center gap-6 md:gap-[187px]">
              <button className='w-72 dark:text-white px-6 py-3 bg-[#D1FFD0] dark:bg-[#92f790] rounded-[25px]'>Frontend Developer</button>
              <button className='w-72 dark:text-white px-6 py-3 bg-[#D1FFD0] dark:bg-[#92f790] rounded-[25px]'>React Developer</button>
          </div>
    </div>
  )
}

export default JobRole