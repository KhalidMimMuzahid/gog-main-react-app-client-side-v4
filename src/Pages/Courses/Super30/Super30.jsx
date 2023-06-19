import React from "react";
import Super30Hero from "./Super30Hero/Super30Hero";
import Super30Batch from "./Super30Batch/Super30Batch";

const Super30 = () => {
  return (
    <div className="px-[30px] md:px-[65px]">
      {/* Sarwar */}
      <Super30Hero />
      {/* Sarwar */}

      {/* Sojib */}
      <Super30Batch />
      {/* Sojib */}
    </div>
  );
};

export default Super30;
