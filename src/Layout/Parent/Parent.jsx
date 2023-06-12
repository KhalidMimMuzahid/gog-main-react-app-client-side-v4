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
    <div data-theme={theme} className={`${theme === "dark" && "dark"}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Parent;
