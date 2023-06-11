import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css"

const navbarVars = [
  {
    name: "Sign-up",
    link: "/sign-up",
  },
  {
    name: "Sign-in",
    link: "/sign-in",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Courses",
    link: "/courses",
  },
  {
    name: "Super-30",
    link: "/courses/super-30",
  },
  {
    name: "Hire From Us",
    link: "/hire-from-us",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Webinar",
    link: "/additionals/webinar",
  },
];

const Navbar = ({theme, setTheme}) => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-bold text-xl">
                Logo
              </a>
            </div>
            <div className="hidden sm:block">
              <div className="ml-4 flex space-x-4">
                {navbarVars.map((object, index) => (
                  <Link to={object.link} key={index}>
                    <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                      {object.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <input
                onChange={() =>
                  setTheme((prev) => {
                    if(prev === "light"){
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
              
            </div>
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
