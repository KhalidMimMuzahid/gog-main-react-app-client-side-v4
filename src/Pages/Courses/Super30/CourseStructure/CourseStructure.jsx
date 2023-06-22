import React from "react";
import Badge from "../../../../assets/icons/s30PageIcons/Badge.svg";

const CourseStructure = () => {
  return (
    <div className="md:p-[40px] p-[0px]">
      <h4 className="md:mb-[40px] mt-[30px] md:mt-[0px] mb-[30px] md:text-[30px] text-[24px] text-center md:text-left text-[#37ED81] font-[500]">
        Course Structure
      </h4>

      <h6 className="md:text-[20px] text-[16px] font-[600] text-[#4BA25D] md:font-[500]  mb-[16px]">
        Eligibility
      </h6>
      <div className="text-[#101010] dark:text-[white] flex gap-5 my-[16px]">
        <img src={Badge} alt="Badge images" />
        <p>Age 16-30 year</p>
      </div>
      <div className="text-[#101010] dark:text-[white] flex gap-5 my-[16px]">
        <img src={Badge} alt="Badge images" />
        <p>
          Open to students currently pursuing B.E, B.tech, M.Tech, BCA, BSC, MCA
          program in any semester.
        </p>
      </div>
      <div className="text-[#101010] dark:text-[white] flex gap-5 my-[16px]">
        <img src={Badge} alt="Badge images" />
        <p>No prior coding experience required.</p>
      </div>
      <h6 className="md:text-[20px] mt-[40px] text-[16px] font-[600] text-[#4BA25D] md:font-[500] mb-[16px]">
        Fees
      </h6>
      <div className="text-[#101010] dark:text-[white] flex gap-5 my-[16px]">
        <img src={Badge} alt="Badge images" />
        <p>Total = ₹65000/- (Registration = ₹5,000 + Fees = 60,000)</p>
      </div>
      <div className="text-[#101010] dark:text-[white] flex gap-5 my-[16px]">
        <img src={Badge} alt="Badge images" />
        <p>Two Payment Model</p>
      </div>

      
      {/* table start */}
      
      <div className="overflow-x-auto mt-[40px]  lg:w-10/12 md:mx-auto">
        <table className="table bg-[#E1FFE8]  md:text-[16px] font-poppins text-[12px] text-[black] dark:text-[white] font-[400] dark:bg-slate-950  ">
          
          <thead className="">
            <tr className="">
              
              <th className="py-[20px] border-r-2  border-[#F8FFF9] dark:border-[#121313] text-[12px] md:text-[16px]  text-[black] dark:text-[white] font-[400]">Fee</th>
              <th className="border-r-2  border-[#F8FFF9]  dark:border-[#121313] text-[12px] md:text-[16px]  text-[black] dark:text-[white] font-[400]">Payment Model 1</th>
              <th className="  text-[12px] md:text-[16px]  text-[black] dark:text-[white] font-[400]">Payment Model 2</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              
              <td className="py-[20px] border-t-2 border-r-2 dark:border-[#121313] border-[#F8FFF9]">Registration</td>
              <td className="border-t-2 border-r-2 dark:border-[#121313] border-[#F8FFF9]">₹ 5000/-</td>
              <td className="border-t-2  dark:border-[#121313] border-[#F8FFF9]">₹ 5000/-</td>
            </tr>
            {/* row 2 */}
            <tr>
              
              <td className="py-[20px] border-t-2 border-r-2 dark:border-[#121313] border-[#F8FFF9]">Course Fee</td>
              <td className="border-t-2 border-r-2 dark:border-[#121313] border-[#F8FFF9]">Upfront : <strike>₹60000</strike> ₹55,000</td>
              <td className="border-t-2  dark:border-[#121313] border-[#F8FFF9]">EMI : ₹10,000*6 months = ₹60,000</td>
            </tr>
            {/* row 3 */}
            <tr>
             
              <td className="border-t-2 border-r-2 py-[20px] dark:border-[#121313] border-[#F8FFF9]">Total</td>
              <td className="border-t-2 border-r-2  dark:border-[#121313] border-[#F8FFF9]">₹ 60000/-</td>
              <td className="border-t-2   dark:border-[#121313] border-[#F8FFF9]">₹ 65000/-</td>
            </tr>
          </tbody>
        </table>
      </div>


















      {/* <div className="text-[#101010] dark:text-[white] mt-[24px]  flex flex-row gap-[4px] justify-center">
        <div
          className={`w-[176px]  px-[5px]  text-center   font-[400] md:text-[16px] text-[12px] dark:bg-slate-950  py-[20px] bg-[#E1FFE8] rounded-tr-none rounded-tl-[20px]`}
        >
          Fee
        </div>
        <div
          className={`w-[278px]    font-[400] md:text-[16px] text-[12px] dark:bg-slate-950  py-[20px] bg-[#E1FFE8] `}
        >
          <p className="md:pl-[40px] text-center">Payment Model 1</p>
        </div>
        <div
          className={`w-[341px]    font-[400] md:text-[16px] text-[12px] dark:bg-slate-950  py-[20px] bg-[#E1FFE8] rounded-tl-none rounded-tr-[20px]`}
        >
          <p className="md:pl-[40px] text-center">Payment Model 2</p>
        </div>
      </div>

      <div className="text-[#101010] dark:text-[white] mt-[4px]  flex flex-row gap-[4px] justify-center">
        <div
          className={`w-[176px] px-[5px]  text-center   font-[400] md:text-[16px] text-[12px] dark:bg-slate-950  py-[20px] bg-[#E1FFE8] `}
        >
          Registration
        </div>
        <div
          className={`w-[278px]    font-[400] md:text-[16px] text-[12px] dark:bg-slate-950  py-[20px] bg-[#E1FFE8] `}
        >
          <p className="md:pl-[40px] text-center">₹ 5000/-</p>
        </div>
        <div
          className={`w-[341px]    font-[400] md:text-[16px] text-[12px] dark:bg-slate-950  py-[20px] bg-[#E1FFE8] `}
        >
          <p className="md:pl-[40px] text-center">₹ 5000/-</p>
        </div>
      </div>

      <div className="text-[#101010] dark:text-[white] mt-[4px]  flex flex-row gap-[4px] justify-center">
        <div
          className={`w-[176px] px-[5px] flex items-center text-center   font-[400] md:text-[16px] text-[12px] dark:bg-slate-950  py-[20px] bg-[#E1FFE8] `}
        >
          Course Fee
        </div>
        <div
          className={`w-[278px]    font-[400] md:text-[16px] text-[12px] dark:bg-slate-950  py-[20px] bg-[#E1FFE8] `}
        >
          <p className="md:pl-[40px] text-center">Upfront : ₹60000 ₹55,000</p>
        </div>
        <div
          className={`w-[341px]    font-[400] md:text-[16px] text-[12px] dark:bg-slate-950  py-[20px] bg-[#E1FFE8] `}
        >
          <p className="md:pl-[40px] text-center px-[5px]">
            EMI : ₹10,000*6 months = ₹60,000
          </p>
        </div>
      </div>

      <div className="text-[#101010] dark:text-[white] mt-[4px]  flex flex-row gap-[4px] justify-center">
        <div
          className={`w-[176px]  px-[5px]  text-center   font-[400] md:text-[16px] text-[12px] dark:bg-slate-950  py-[20px] bg-[#E1FFE8] rounded-br-none rounded-bl-[20px]`}
        >
          Total
        </div>
        <div
          className={`w-[278px]    font-[400] md:text-[16px] text-[12px] dark:bg-slate-950  py-[20px] bg-[#E1FFE8] `}
        >
          <p className="md:pl-[40px] text-center">₹ 60000/-</p>
        </div>
        <div
          className={`w-[341px]   font-[400] md:text-[16px] text-[12px]  dark:bg-slate-950  py-[20px] bg-[#E1FFE8] rounded-bl-none rounded-br-[20px]`}
        >
          <p className="md:pl-[40px] text-center">₹ 65000/-</p>
        </div>
      </div> */}
    </div>
  );
};

export default CourseStructure;
