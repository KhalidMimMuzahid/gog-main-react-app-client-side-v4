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
    <div className="p-8">
      <div className="rounded-2xl grid grid-cols-12 w-full mx-auto bg-[#D1FFD0] dark:bg-[#1A211F] p-16 gap-6 text-[#101010] dark:text-white">
        <div className="col-span-3">
          <Link to="/">
            <img src={logo} alt="Geeks of Gurukul logo" className="w-[190px]" />
          </Link>
          <p className="text-left text-[16px] mt-10">
            Unleash the Power of Learning: Discover a World of Possibilities
            with our Cutting-edge Learning Management System.
          </p>
        </div>
        <div className="col-span-2">
          <ul>
            <li className="text-xl font-bold text-[#4BA25D] dark:text-[#D1FFD0] dark:font-medium">Connect</li>
            <div className="flex flex-col gap-5 mt-5">
              <Link to="/contact-us">
                <li className="hover:text-[#37ED81]">Contact us</li>
              </Link>
              <Link to="/about-us">
                <li className="hover:text-[#37ED81]">About us</li>
              </Link>
              <Link to="/courses">
                <li className="hover:text-[#37ED81]">Courses</li>
              </Link>
              <Link to="/hire-from-us">
                <li className="hover:text-[#37ED81]">Hire from us</li>
              </Link>
            </div>
          </ul>
        </div>
        <div className="col-span-2">
          <ul>
            <li className="text-xl font-bold text-[#4BA25D] dark:text-[#D1FFD0] dark:font-medium">Resources</li>
            <div className="flex flex-col gap-5 mt-5">
              <Link to="">
                <li className="hover:text-[#37ED81]">Blog</li>
              </Link>
              <Link to="">
                <li className="hover:text-[#37ED81]">Privacy policy</li>
              </Link>
              <Link to="">
                <li className="hover:text-[#37ED81]">FAQ</li>
              </Link>
              <Link to="">
                <li className="hover:text-[#37ED81]">Terms and Condition</li>
              </Link>
              <Link to="">
                <li className="hover:text-[#37ED81]">Refund Policy</li>
              </Link>
            </div>
          </ul>
        </div>
        <div className="col-span-2">
          <ul>
            <li className="text-xl font-bold text-[#4BA25D] dark:text-[#D1FFD0] dark:font-medium">Company</li>
            <div className="flex flex-col gap-5 mt-5">
              <Link to="">
                <li className="hover:text-[#37ED81]">Careers</li>
              </Link>
              <Link to="">
                <li className="hover:text-[#37ED81]">Alumni</li>
              </Link>
              <Link to="">
                <li className="hover:text-[#37ED81]">Our team</li>
              </Link>
            </div>
          </ul>
        </div>
        <div className="col-span-3">
          <ul>
            <li className="text-xl font-bold text-[#4BA25D] dark:text-[#D1FFD0] dark:font-medium">Get in touch</li>
            <div className="flex items-center gap-5 mt-5 mb-7">
              <li className="bg-[#E4FFE3] dark:bg-[#8A8F98] p-2 rounded-full">
                <Link to="">
                  <FaFacebookF size={20} color="#101010" />
                </Link>
              </li>
              <li className="bg-[#E4FFE3] dark:bg-[#8A8F98] p-2 rounded-full">
                <Link to="">
                  <FaTwitter size={20} color="#101010" />
                </Link>
              </li>
              <li className="bg-[#E4FFE3] dark:bg-[#8A8F98] p-2 rounded-full">
                <Link to="">
                  <FaInstagram size={20} color="#101010" />
                </Link>
              </li>
              <li className="bg-[#E4FFE3] dark:bg-[#8A8F98] p-2 rounded-full">
                <Link to="">
                  <FaLinkedinIn size={20} color="#101010" />
                </Link>
              </li>
            </div>
            <li className="text-xl font-bold text-[#4BA25D] dark:text-[#D1FFD0] dark:font-medium">Contact us</li>
            <div className="flex flex-col gap-4 mt-5 text-xs">
              <Link to="">
                <div className="flex items-center gap-2 hover:text-[#37ED81]">
                  <BsTelephone size={18} />
                  <p className="w-full">+91 8822791391</p>
                </div>
              </Link>
              <Link to="">
                <div className="flex items-center gap-2 hover:text-[#37ED81]">
                  <BsEnvelope size={18} />
                  <p className="w-full">support@geeksofgurukul.com</p>
                </div>
              </Link>
              <Link to="">
                <div className="flex items-center gap-2 hover:text-[#37ED81]">
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
