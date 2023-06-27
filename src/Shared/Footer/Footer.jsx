import logo from "../../assets/Footer/logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-5 md:p-10">
      <div className="rounded-2xl grid-cols-1 grid lg:grid-cols-12 w-full mx-auto bg-[#D1FFD0] dark:bg-[#1A211F] p-8 md:p-16 gap-6 text-[#101010] dark:text-white">
        <div className="col-span-1 lg:col-span-3">
          <Link to="/" className="">
            <img
              src={logo}
              alt="Geeks of Gurukul logo"
              className="w-[120px] md:w-[190px]"
            />
          </Link>
          <p className="text-justify md:text-left text-sm md:text-[16px] mt-5 md:mt-10">
            Unleash the Power of Learning: Discover a World of Possibilities
            with our Cutting-edge Learning Management System.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul>
            <li className="text-lg md:text-xl font-medium md:font-bold text-[#4BA25D] dark:text-[#D1FFD0] dark:font-medium">
              Connect
            </li>
            <div className="flex flex-col gap-3 md:gap-5 mt-5 text-sm md:text-base">
              <Link to="/contact-us">
                <li className="duration-300 hover:text-[#37ED81]">
                  Contact us
                </li>
              </Link>
              <Link to="/about-us">
                <li className="duration-300 hover:text-[#37ED81]">About us</li>
              </Link>
              <Link to="/courses">
                <li className="duration-300 hover:text-[#37ED81]">Courses</li>
              </Link>
              <Link to="/hire-from-us">
                <li className="duration-300 hover:text-[#37ED81]">
                  Hire from us
                </li>
              </Link>
            </div>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul>
            <li className="text-lg md:text-xl font-medium md:font-bold text-[#4BA25D] dark:text-[#D1FFD0] dark:font-medium">
              Resources
            </li>
            <div className="flex flex-col gap-3 md:gap-5 mt-5 text-sm md:text-base">
              <Link to="">
                <li className="duration-300 hover:text-[#37ED81]">Blog</li>
              </Link>
              <Link to="">
                <li className="duration-300 hover:text-[#37ED81]">
                  Privacy policy
                </li>
              </Link>
              <Link to="">
                <li className="duration-300 hover:text-[#37ED81]">FAQ</li>
              </Link>
              <Link to="">
                <li className="duration-300 hover:text-[#37ED81]">
                  Terms and Condition
                </li>
              </Link>
              <Link to="">
                <li className="duration-300 hover:text-[#37ED81]">
                  Refund Policy
                </li>
              </Link>
            </div>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul>
            <li className="text-lg md:text-xl font-medium md:font-bold text-[#4BA25D] dark:text-[#D1FFD0] dark:font-medium">
              Company
            </li>
            <div className="flex flex-col gap-3 md:gap-5 mt-5 text-sm md:text-base">
              <Link to="">
                <li className="duration-300 hover:text-[#37ED81]">Careers</li>
              </Link>
              <Link to="">
                <li className="duration-300 hover:text-[#37ED81]">Alumni</li>
              </Link>
              <Link to="">
                <li className="duration-300 hover:text-[#37ED81]">Our team</li>
              </Link>
            </div>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-3">
          <ul>
            <li className="text-lg md:text-xl font-medium md:font-bold text-[#4BA25D] dark:text-[#D1FFD0] dark:font-medium">
              Get in touch
            </li>
            <div className="flex items-center gap-3 md:gap-5 mt-5 mb-7 text-sm md:text-base">
              <li className="group bg-[#E1FFE8] hover:bg-white p-2 rounded-full duration-200">
                <Link to="">
                  <FaFacebookF
                    size={20}
                    className="text-[#37ED81] group-hover:text-[#101010] duration-200"
                  />
                </Link>
              </li>

              <li className="group bg-[#E1FFE8] hover:bg-white p-2 rounded-full duration-200">
                <Link to="">
                  <FaTwitter
                    size={20}
                    className="text-[#37ED81] group-hover:text-[#101010] duration-200"
                  />
                </Link>
              </li>

              <li className="group bg-[#E1FFE8] hover:bg-white p-2 rounded-full duration-200">
                <Link to="">
                  <FaInstagram
                    size={20}
                    className="text-[#37ED81] group-hover:text-[#101010] duration-200"
                  />
                </Link>
              </li>

              <li className="group bg-[#E1FFE8] hover:bg-white p-2 rounded-full duration-200">
                <Link to="">
                  <FaLinkedinIn
                    size={20}
                    className="text-[#37ED81] group-hover:text-[#101010] duration-200"
                  />
                </Link>
              </li>
            </div>
            <li className="text-lg md:text-xl font-medium md:font-bold text-[#4BA25D] dark:text-[#D1FFD0] dark:font-medium">
              Contact us
            </li>
            <div className="flex flex-col gap-3 md:gap-4 mt-5 text-xs">
              <Link to="">
                <div className="flex items-center gap-2 hover:text-[#37ED81] duration-300">
                  <BsTelephone size={18} />
                  <p className="w-full">+91 8822791391</p>
                </div>
              </Link>
              <Link to="">
                <div className="flex items-center gap-2 hover:text-[#37ED81] duration-300">
                  <BsEnvelope size={18} />
                  <p className="w-full">support@geeksofgurukul.com</p>
                </div>
              </Link>
              <Link to="">
                <div className="flex items-center gap-2 hover:text-[#37ED81] duration-300">
                  <BsEnvelope size={18} />
                  <p className="w-full">admission@geeksofgurukul.com</p>
                </div>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
