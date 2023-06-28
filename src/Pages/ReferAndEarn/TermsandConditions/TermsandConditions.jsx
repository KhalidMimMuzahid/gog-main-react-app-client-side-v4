import React from "react";

const paragraph = [
  ".A successful referral is defined as a referred customer who registers for a program on Geeks of Gurukul and pays for it.",

  ".Your payment will be processed directly to the account linked with your profile.",

  ".You will be eligible for a Rs.2000 referral voucher per successful referral.",

  ".Your reward voucher upto Rs. 2000 will be processed after the referred person pays for the program.",

  ".A person must register for a program at Geeks of Gurukul in 60 days of sharing of referral code.",

  ".Geeks of Gurukul reserves the right to deny any suspected illegitimate case.",
];

const TermsandConditions = () => {
  return (
    <div className="mt-[80px]">
      <h1 className="font-[600] text-[24px] md:text-[36px] text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
        Terms and Conditions
      </h1>
      <div>
        {paragraph.map((data, i) => <p className="text-justify mt-[10px]">{i+1}  <span className="">{data}</span></p>)}
      </div>
    </div>
  );
};

export default TermsandConditions;
