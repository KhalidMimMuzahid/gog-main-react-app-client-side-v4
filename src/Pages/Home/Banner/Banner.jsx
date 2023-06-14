import React from "react";
import cap from "../../../assets/Banner/cap.svg";
import hiring from "../../../assets/Banner/hiring.svg";
import meeting from "../../../assets/Banner/meeting.svg";
import placement from "../../../assets/Banner/placement.svg";
import roadmap from "../../../assets/Banner/roadmap.svg";

const Banner = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-[40px]'>
      <div className='flex items-center justify-center gap-[10px]'>
        <div className='flex flex-col gap-[40px]'>
          <div className='w-[340px] h-[170px] rounded-[20px] bg-[#BDF5BC] p-5 hover:translate-x-8 hover:translate-y-8 transition-[1500ms] hover:cursor-pointer'>
            <div className='flex'>
              <div className="w-1/2 font-medium">
                <p className="text-[20px] text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#000000] to-[#905BEC]">
                  Students Currently
                  <br />
                  Enrolled
                </p>
                <p className="text-[36px]">200+</p>
              </div>
              <div className="w-1/2">
                <img src={cap} alt='enrolled-student' />
              </div>
            </div>
          </div>
          <div className='w-[340px] h-[170px] rounded-[20px] bg-[#BDF5BC] p-5'>
            <div className='flex'>
              <div className="w-1/2 font-medium">
                <p className="text-[20px] text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#000000] to-[#905BEC]">Total Batch</p>
                <p className="text-[36px]">10+</p>
              </div>
              <div className="w-1/2">
                <img src={hiring} alt='enrolled-student' />
              </div>
            </div>
          </div>
          <div className='w-[340px] h-[170px] rounded-[20px] bg-[#BDF5BC] p-5'>
            <div className='flex'>
              <div className="w-1/2 font-medium">
                <p className="text-[20px]">
                  <span className="text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#000000] to-[#905BEC]">We Started</span> <br />
                  <span className="text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#000000] to-[#905BEC]">Our Journey</span>
                </p>
                <p className="text-[36px]">2023</p>
              </div>
              <div className="w-1/2">
                <img src={meeting} alt='enrolled-student' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[40px]'>
          <div className='w-[340px] h-[170px] rounded-[20px] bg-[#BDF5BC] p-5'>
            <div className='flex'>
              <div className="w-1/2 font-medium">
                <p className="text-[20px]">
                  <span className="text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#000000] to-[#905BEC]">Placement</span> <br />
                  <span className="text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#000000] to-[#905BEC]">Rate</span>
                </p>
                <p className="text-[36px]">96%</p>
              </div>
              <div className="w-1/2">
                <img src={placement} alt='enrolled-student' />
              </div>
            </div>
          </div>
          <div className='w-[340px] h-[170px] rounded-[20px] bg-[#BDF5BC] p-5'>
            <div className='flex'>
              <div className="w-1/2 font-medium">
                <p className="text-[20px]">
                  <span className="text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#000000] to-[#905BEC]">Hiring</span> <br />
                  <span className="text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#000000] to-[#905BEC]">Partners</span>
                </p>
                <p className="text-[36px]">50+</p>
              </div>
              <div className="w-1/2">
                <img src={roadmap} alt='enrolled-student' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="p-4">
        <h3 className="text-[36px] font-bold text-right text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#4BA25D] via-[#3DA5BD] to-[#905BEC]"><span>Start learning with</span> <br />
        <span className="text-[#37ED81]">Geeks of Gurukul</span></h3>
        <p className="text-[18px] text-[#8A8F98] text-right font-medium">
          Get unlimited access to structured courses & doubt <br /> clearing sessions
        </p>
        <button className='px-4 py-2 text-white bg-[#00A3FF] rounded-[20px] my-4 float-right'>
          Assessment Test
        </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
