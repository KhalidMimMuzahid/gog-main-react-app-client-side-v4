import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const newTheme = localStorage.getItem("theme");
    if (newTheme) {
      setTheme(newTheme);
    }
  }, []);

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // console.log("screen size: ", screenSize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const info = { theme, setTheme, screenSize };
  return <UIContext.Provider value={info}>{children}</UIContext.Provider>;
};

export default UIProvider;
