import React, { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Parent = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const newTheme = localStorage.getItem("theme");
    if (newTheme) {
      setTheme(newTheme);
    }
  }, []);

  return (
    <div
      // data-theme={theme}
      className={`${theme === "dark" && "dark"}`}
    >
      <div className="font-poppins bg-[#F8FFF9] dark:bg-[#121313]">
        <Navbar theme={theme} setTheme={setTheme} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Parent;
