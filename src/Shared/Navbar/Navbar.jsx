import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import logo from "../../assets/Navbar/logo.png";
import { BsList } from "react-icons/bs";
import { UIContext } from "../../contexts/UIProvider/UIProvider";
import Drawer from "./Drawer/Drawer";
import { useState } from "react";

const navbarVars = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Courses",
    link: "/courses",
  },
  {
    name: "Hire From Us",
    link: "/hire-from-us",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];

const navbarVars2 = [
  {
    name: "Super 30",
    link: "/courses/super-30",
  },
  {
    name: "Assessment test",
    link: "https://www.courses.geeksofgurukul.com/dashboard/assessment",
  },
];

const Navbar = () => {
  const { theme, setTheme } = useContext(UIContext);
  const [drawerOpen, setDrawerOpen] = useState(true);
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-[#F8FFF9] dark:bg-[#121313] shadow dark:shadow-[#41414140] text-[#101010] dark:text-white">
        <div className="px-[20px] md:px-[75px] mx-auto ">
          <div className="flex items-center justify-between h-[70px] md:h-[90px]">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={logo} className="h-[46px]" />
              </Link>
            </div>
            <div className={style.nav_hidden}>
              <div className="ml-4 flex space-x-4">
                {navbarVars.map((object, index) => (
                  <Link to={object.link} key={index}>
                    <p className="px-3 py-2 rounded-full text-sm font-medium hover:bg-[#37ED81] duration-200">
                      {object.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div className={style.nav_hidden}>
              <div className="ml-4 flex space-x-4 items-center">
                {navbarVars2.map((object, index) => (
                  <Link to={object.link} key={index}>
                    <div
                      className={`rounded-full p-[1.5px] ${style.border_gradient}`}
                    >
                      <p
                        className={`px-3 py-2 border border-[#8A8F98] dark:border-white rounded-full text-sm font-medium bg-[#F8FFF9] dark:bg-[#121313] ${style.border_removal}`}
                      >
                        {object.name}
                      </p>
                    </div>
                  </Link>
                ))}
                <Link to="/admission-form">
                  <p className="px-4 py-2 text-white bg-[#37ED81] hover:bg-[#4BA25D] rounded-full text-sm font-medium duration-200">
                    Apply now
                  </p>
                </Link>
                <label className="swap swap-rotate">
                  <input
                    onChange={() =>
                      setTheme((prev) => {
                        if (prev === "light") {
                          localStorage.setItem("theme", "dark");
                          return "dark";
                        } else {
                          localStorage.setItem("theme", "light");
                          return "light";
                        }
                      })
                    }
                    type="checkbox"
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-on fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-off fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
            </div>
            <div className={style.nav_show}>
              <label className="btn btn-circle swap swap-rotate bg-[#F8FFF9] dark:bg-[#121313] border-0">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onClick={() => setDrawerOpen((prev) => !prev)} checked={!drawerOpen} readOnly={true} />

                {/* hamburger icon */}
                <svg
                  className="swap-off dark:fill-white fill-[#121313]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on dark:fill-white fill-[#121313]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </nav>
      <div className="block lg:hidden">
        <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      </div>

    </div>
  );
};

export default Navbar;
