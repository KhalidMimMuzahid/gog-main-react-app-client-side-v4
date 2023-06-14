import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import logo from "../../assets/Navbar/logo.png";
import { BsSun, BsMoon } from "react-icons/bs";

const navbarVars = [
  // {
  //   name: "Sign-up",
  //   link: "/sign-up",
  // },
  // {
  //   name: "Sign-in",
  //   link: "/sign-in",
  // },
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
  // {
  //   name: "About Us",
  //   link: "/about-us",
  // },
  // {
  //   name: "Webinar",
  //   link: "/additionals/webinar",
  // },
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

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-[#F8FFF9] dark:bg-[#121313] shadow dark:shadow-[#41414140] text-[#101010] dark:text-white">
        <div className="px-[75px] mx-auto ">
          <div className="flex items-center justify-between h-[90px]">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={logo} className="h-[46px]" />
              </Link>
            </div>
            <div className="hidden sm:block">
              <div className="ml-4 flex space-x-4">
                {navbarVars.map((object, index) => (
                  <Link to={object.link} key={index}>
                    <p className="px-3 py-2 rounded-full text-sm font-medium hover:bg-[#37ED81] duration-200">{object.name}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="ml-4 flex space-x-4 items-center">
                {navbarVars2.map((object, index) => (
                  <Link to={object.link} key={index} target="_blank">
                    <p className={`px-3 py-2 border border-[#8A8F98] dark:border-white rounded-full text-sm font-medium hover:border-2 ${style.border_gradient}`}>
                      {object.name}
                    </p>
                  </Link>
                ))}
                <Link to="/admission-form">
                  <p className="px-4 py-2 text-white bg-[#37ED81] hover:bg-[#4BA25D] rounded-full text-sm font-medium duration-200">
                    Apply now
                  </p>
                </Link>
                <button
                  onClick={() =>
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
                >
                  {theme === "dark" ? <BsSun size={30} /> : <BsMoon size={30} />}
                </button>
              </div>
            </div>
            {/* <div>
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
                className="toggle md:toggle-lg mx-2 "
                checked={theme === "dark"}
              />
            </div> */}
            <div className="-mr-2 flex sm:hidden">
              <button
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
