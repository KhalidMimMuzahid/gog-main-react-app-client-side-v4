import React from "react";
import cap from "../../../assets/Banner/cap.svg";

const Banner = () => {
  return (
    <div className='p-4 grid grid-cols-1 md:grid-cols-2'>
      <div className='flex items-center justify-center gap-[10px]'>
        <div className='flex flex-col gap-[40px]'>
          <div className='w-[340px] h-[170px] rounded-[20px] bg-[#BDF5BC]'>
            <div className='flex'>
              <div className="w-1/2">
                <p>
                  Students Currently
                  <br />
                  Enrolled
                </p>
                <p>200+</p>
              </div>
              <div className="w-1/2">
                <img src={cap} alt='enrolled-student' />
              </div>
            </div>
          </div>
          <div className='w-[340px] h-[170px] rounded-[20px] bg-[#BDF5BC]'>
            <div className='flex'>
              <div className="w-1/2">
                <p>Total Batch</p>
                <p>10+</p>
              </div>
              <div className="w-1/2">
                <img src={cap} alt='enrolled-student' />
              </div>
            </div>
          </div>
          <div className='w-[340px] h-[170px] rounded-[20px] bg-[#BDF5BC]'>
            <div className='flex'>
              <div>
                <p>
                  We Started <br />
                  Our Journey
                </p>
                <p>2023</p>
              </div>
              <div>
                <img src={cap} alt='enrolled-student' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[40px]'>
          <div className='w-[340px] h-[170px] rounded-[20px] bg-[#BDF5BC]'>
            <div className='flex'>
              <div>
                <p>
                  Placement <br />
                  Rate
                </p>
                <p>96%</p>
              </div>
              <div>
                <img src={cap} alt='enrolled-student' />
              </div>
            </div>
          </div>
          <div className='w-[340px] h-[170px] rounded-[20px] bg-[#BDF5BC]'>
            <div className='flex'>
              <div>
                <p>
                  Hiring <br />
                  Partners
                </p>
                <p>50+</p>
              </div>
              <div>
                <img src={cap} alt='enrolled-student' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Start learning with </h3>
        <h3>Geeks of Gurukul</h3>
        <p>
          Get unlimited access to structured courses & doubt clearing sessions
        </p>
        <button className='px-4 py-2 text-white bg-[#00A3FF] rounded-[20px]'>
          Assessment Test
        </button>
      </div>
    </div>
  );
};

export default Banner;
