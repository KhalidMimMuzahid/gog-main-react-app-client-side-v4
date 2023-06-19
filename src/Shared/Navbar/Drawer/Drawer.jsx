import React from "react";
import {  motion } from "framer-motion";

function Drawer() {
  return (
    <motion.div
      animate={{ x: `${300}%` }}
      className="absolute z-50 bg-[#F8FFF9] dark:bg-[#121313] shadow dark:shadow-[#41414140] text-[#101010] dark:text-white"
    >
      <div className="m-5">
        <p>HIOdhsjdhskdjhsdkj</p>
        <p>HIOdhsjdhskdjhsdkj</p>
        <p>HIOdhsjdhskdjhsdkj</p>
        <p>HIOdhsjdhskdjhsdkj</p>
      </div>
    </motion.div>
  );
}

export default Drawer;
