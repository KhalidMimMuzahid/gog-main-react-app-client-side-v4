import React from "react";
import cap from "../../../assets/Banner/cap.svg";
import hiring from "../../../assets/Banner/hiring.svg";
import meeting from "../../../assets/Banner/meeting.svg";
import placement from "../../../assets/Banner/placement.svg";
import roadmap from "../../../assets/Banner/roadmap.svg";

const Banner = () => {
  return (
    <div className='p-4 grid grid-cols-1 md:grid-cols-2'>
      <div className='flex items-center justify-center gap-[10px]'>
        <div className='flex flex-col gap-[40px]'>
          <div className='w-[340px] h-[170px] rounded-[20px] bg-[#BDF5BC] p-5 hover:translate-x-8 hover:translate-y-8 transition-[1500ms] hover:cursor-pointer'>
            <div className='flex'>
              <div className="w-1/2 font-medium">
                <p className="text-[20px]">
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
                <p className="text-[20px]">Total Batch</p>
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
                  We Started <br />
                  Our Journey
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
                  Placement <br />
                  Rate
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
                  Hiring <br />
                  Partners
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
      <div className="py-30">
        <h3 className="text-[36px] font-bold text-right"><span>Start learning with</span> <br />
        <span>Geeks of Gurukul</span></h3>
        <p className="text-[18px] text-[#8A8F98] text-right font-medium">
          Get unlimited access to structured courses & doubt <br /> clearing sessions
        </p>
        <button className='px-4 py-2 text-white bg-[#00A3FF] rounded-[20px] ml-[74%] my-4'>
          Assessment Test
        </button>
      </div>
    </div>
  );
};

export default Banner;
