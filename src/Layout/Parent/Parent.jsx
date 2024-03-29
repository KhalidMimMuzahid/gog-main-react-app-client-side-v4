import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { UIContext } from "../../contexts/UIProvider/UIProvider";

const Parent = () => {
  const {theme} = useContext(UIContext);
  return (
    <div
      // data-theme={theme}
      className={`${theme === "dark" && "dark"}`}
    >
      <div className="font-poppins bg-[#F8FFF9] dark:bg-[#121313]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Parent;
