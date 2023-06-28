import React from "react";
import Mock1 from "../../../assets/toolsImgs/Mock1.svg";
import Mock2 from "../../../assets/toolsImgs/Mock2.svg";
import Mock3 from "../../../assets/toolsImgs/Mock3.svg";

import smallAlexa from "../../../assets/toolsImgs/smallAlexa.svg";
import smallTablate from "../../../assets/toolsImgs/smallTablate.svg";
import smallWatch from "../../../assets/toolsImgs/smallWatch.svg";
import Ellipse from '../../../assets/toolsImgs/Ellipse.svg'

const ReferralEntries = () => {
  return (
    <div className="mt-[40px]">
      <div className="lg:w-[80%] gap-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-items-center">
        
        <div className="bg-[#BBFFD7] group w-[280px] rounded-[20px] p-[20px] ">
          <div className="flex   justify-between ">
            <div>
              <h6 className="text-[#000000]  text-[16px]">
                20 Referral Entries
              </h6>
              <div className="flex items-center pt-[10px]">
                <div className="bg-[#74FAAB] rounded-[50%] p-[5px]"><img src={Mock2} alt="Mock2 img" /></div>
                <p className="text-[#000] text-[16px] font-[600] pl-[15px]">20 <span className="text-[12px]">members</span></p>
              </div>
            </div>
            <img className="group-hover:w-[60px] transition-all duration-2000" src={smallAlexa} alt="smallAlexa img" />
            {/* <div className="flex flex-col gap-[-5px] items-center">
                <img src={smallAlexa} alt="smallAlexa img" />
                <img className="" src={Ellipse} alt="Ellipse img" />
            </div> */}
          </div>
        </div>



        <div className="bg-[#BEF3FF] group w-[280px] rounded-[20px] p-[20px] ">
          <div className="flex   justify-between ">
            <div>
              <h6 className="text-[#000000]  text-[16px]">
                10 Referral Entries
              </h6>
              <div className="flex items-center pt-[10px]">
                <div className="bg-[#7EE7FF] rounded-[50%] p-[5px]"><img src={Mock3} alt="Mock2 img" /></div>
                <p className="text-[#000] text-[16px] font-[600] pl-[15px]">20 <span className="text-[12px]">members</span></p>
              </div>
            </div>
            <img className="group-hover:w-[60px] transition-all duration-2000" src={smallWatch} alt="smallAlexa img" />
            {/* <div className="flex flex-col gap-[-5px] items-center">
                <img src={smallAlexa} alt="smallAlexa img" />
                <img className="" src={Ellipse} alt="Ellipse img" />
            </div> */}
          </div>
        </div>



        <div className="bg-[#E3D2FF] group w-[280px] rounded-[20px] p-[20px] ">
          <div className="flex   justify-between ">
            <div>
              <h6 className="text-[#000000]  text-[16px]">
                30 Referral Entries
              </h6>
              <div className="flex items-center pt-[10px]">
                <div className="bg-[#BF98FF] rounded-[50%] p-[5px]"><img src={Mock1} alt="Mock2 img" /></div>
                <p className="text-[#000] text-[16px] font-[600] pl-[15px]">20 <span className="text-[12px]">members</span></p>
              </div>
            </div>
            <img className="group-hover:w-[60px] transition-all duration-2000" src={smallAlexa} alt="smallAlexa img" />
            {/* <div className="flex flex-col gap-[-5px] items-center">
                <img src={smallAlexa} alt="smallAlexa img" />
                <img className="" src={Ellipse} alt="Ellipse img" />
            </div> */}
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default ReferralEntries;
