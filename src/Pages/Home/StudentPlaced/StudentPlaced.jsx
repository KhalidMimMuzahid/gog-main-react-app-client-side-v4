import React from "react";
import Marquee from "react-fast-marquee";

const adimage2 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/amex.png";
const adimage3 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/binance.jpg";
const adimage4 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/citi.png";
const adimage5 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/coinbin.png";
const adimage6 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/coindcx.png";
const adimage7 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/Datamotive.jpg";

const adimage9 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/Dream11.png";
const adimage10 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/exl.png";
const adimage11 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/exl.png";
const adimage12 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/global-player.png";
const adimage13 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/hcl.png";
const adimage14 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/hotstar.jpg";
const adimage15 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/hsbc.png";
const adimage16 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/HUL.jpg";
const adimage17 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/icici.png";
const adimage18 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/interio-labs-1.jpg";
const adimage19 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/ITC.png";
const adimage20 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/Ketto.png";
const adimage8 =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/dell.png";
const adimage =
  "https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/images/brand/aixs-bank.png";

const StudentPlaced = () => {
  return (
    <div className="mx-[20px] md:mx-[65px]">
      <h2 className="mb-[80px] text-center font-[500] md:text-[36px] text-[22px]  bg-clip-text text-transparent bg-gradient-to-r from-[#37ED81] via-[#3DA5BD] to-[#905BEC]">
        OUR STUDENTS PLACED AT
      </h2>

      <div>
        <Marquee speed={40}>
          <img src={adimage} alt="" />
          <img src={adimage2} alt="" />
          <img src={adimage3} alt="" />
          <img src={adimage4} alt="" />
          <img src={adimage10} alt="" />
          <img src={adimage5} alt="" />
          <img src={adimage6} alt="" />
          <img src={adimage7} alt="" />
          <img src={adimage8} alt="" />
          <img src={adimage9} alt="" />

          <img src={adimage12} alt="" />
          <img src={adimage13} alt="" />
          <img src={adimage14} alt="" />
          <img src={adimage15} alt="" />
          <img src={adimage16} alt="" />
          <img src={adimage17} alt="" />
          <img src={adimage18} alt="" />
          <img src={adimage19} alt="" />
          <img src={adimage20} alt="" />
        </Marquee>
        <Marquee speed={40}>
          <img src={adimage12} alt="" />
          <img src={adimage13} alt="" />
          <img src={adimage14} alt="" />
          <img src={adimage15} alt="" />
          <img src={adimage16} alt="" />
          <img src={adimage17} alt="" />
          <img src={adimage18} alt="" />
          <img src={adimage19} alt="" />
          <img src={adimage20} alt="" />
          <img src={adimage11} alt="" />
          <img src={adimage} alt="" />
          <img src={adimage2} alt="" />
          <img src={adimage3} alt="" />
          <img src={adimage4} alt="" />
          <img src={adimage5} alt="" />
          <img src={adimage6} alt="" />
          <img src={adimage7} alt="" />
          <img src={adimage8} alt="" />
          <img src={adimage9} alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default StudentPlaced;
