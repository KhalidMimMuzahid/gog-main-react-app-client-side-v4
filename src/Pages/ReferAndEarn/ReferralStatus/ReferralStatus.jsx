import React, { useEffect, useRef, useState } from "react";
import copy from "../../../assets/icons/copy.svg";
import { toast } from "react-hot-toast";
import { AiFillCopy } from "react-icons/ai";

const ReferralStatus = () => {
  const htmlElement = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  // function for cpnying code
  const handleCopy = () => {
    const htmlText = htmlElement.current.innerHTML;
    navigator.clipboard.writeText(htmlText);
    setIsCopied(true);
    toast.success("Coppied!");
    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 3000);
    // Clean up the timeout if component is unmounted
    return () => clearTimeout(timeout);
  };

  return (
    <div className="mt-[80px]">
      <h1 className="font-[600] text-[24px] md:text-[36px] text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
        Your Referral Status
      </h1>

      <div className="mt-[40px] flex justify-center">
        <div className="max-w-[358px] flex items-center justify-center p-[10px] border-[2px] border-[gray] rounded-[8px]">
          <span className="text-[#98A2B3] dark:text-[white]">
            Referral Code :
          </span>
          <span ref={htmlElement} className="text-[#00A3FF] pl-[10px]">
            GPJSR4587
          </span>
          <button
            disabled={isCopied}
            onClick={handleCopy}
            id="copyButton"
            className="dark:text-[white] ml-[10px] flex items-center "
          >
            {(!isCopied && "Copy code") || (isCopied && "Copied")}
            <AiFillCopy
              className={`${isCopied === true ? "hidden" : "block"} dark:text-[white]`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralStatus;
