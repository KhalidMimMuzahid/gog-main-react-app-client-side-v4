import React from "react";
import Marquee from "react-fast-marquee";

import hcl from "../../../assets/brands/1stRow/hcl 1.svg";
import image15 from "../../../assets/brands/1stRow/image 15.svg";
import image16 from "../../../assets/brands/1stRow/image 16.svg";
import image17 from "../../../assets/brands/1stRow/image 17.svg";
import image18 from "../../../assets/brands/1stRow/image 18.svg";
import image19 from "../../../assets/brands/1stRow/image 19.svg";
import image20 from "../../../assets/brands/1stRow/image 20.svg";
import TATA1 from "../../../assets/brands/1stRow/TATA 1.svg";
// 2nd row
import AI1 from "../../../assets/brands/2ndRow/AI 1.svg";
import aixsBank1 from "../../../assets/brands/2ndRow/aixs-bank 1.svg";
import amex1 from "../../../assets/brands/2ndRow/amex 1.svg";
import binance1 from "../../../assets/brands/2ndRow/binance 1.svg";
import citi1 from "../../../assets/brands/2ndRow/citi 1.svg";
import coindcx1 from "../../../assets/brands/2ndRow/coindcx 1.svg";
import Datamotive1 from "../../../assets/brands/2ndRow/Datamotive 1.svg";
import dell1 from "../../../assets/brands/2ndRow/dell 1.svg";
import Dream111 from "../../../assets/brands/2ndRow/Dream11 1.svg";
import hotstar1 from "../../../assets/brands/2ndRow/hotstar 1.svg";
import hsbc1 from "../../../assets/brands/2ndRow/hsbc 1.svg";

const brands1 = [
  hcl,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  TATA1,
];
const brands2 = [
  AI1,
  aixsBank1,
  hsbc1,
  amex1,
  binance1,
  citi1,
  coindcx1,
  Datamotive1,
  dell1,
  Dream111,
  hotstar1,
];



const StudentPlaced = () => {
  return (
    <div className="">
      <h2 className="mb-[80px] text-center font-[500] md:text-[36px] text-[25px]  bg-clip-text text-transparent bg-gradient-to-r from-[#37ED81] via-[#3DA5BD] to-[#905BEC]">
        OUR STUDENTS PLACED AT
      </h2>

      <div>
        <Marquee className="mb-[60px]" speed={50}>
          {brands1?.map((image, i) => (
            <img className="md:px-[40px] md:h-[60px] px-[20px] h-[30px]" src={image} alt="" key={i} />
          ))}
        </Marquee>
        <Marquee speed={40}>
        {brands2?.map((image, i) => (
            <img className="md:px-[40px] md:h-[60px] px-[20px] h-[30px]" src={image} alt="" key={i} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default StudentPlaced;
