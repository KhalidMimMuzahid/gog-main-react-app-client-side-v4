import logo from "../../assets/Footer/logo.svg";
import facebook from "../../assets/Footer/facebook.svg";
import instagram from "../../assets/Footer/insta.svg";
import linkedin from "../../assets/Footer/linkedin.svg";
import twiteer from "../../assets/Footer/tweeter.svg";
import phone from "../../assets/Footer/phone.svg";
import email from "../../assets/Footer/email.svg";

const Footer = () => {
  return (
    <div className='grid grid-cols-5 align-items-md-start w-full mx-auto bg-[#D1FFD0] text-[#4BA25D] p-8 font-poppins'>
      <div>
        <img src={logo} alt='' />
        <p className='text-left text-[16px] font-normal text-black'>
          Unleash the Power of Learning: Discover a World of Possibilities with
          our Cutting-edge Learning Management System.
        </p>
      </div>
      <div>
        <ul>
          <li className="text-[20px] font-medium">Connect</li>
          <div className='text-black text-[16px] font-normal'>
            <li>Contact us</li>
            <li>About us</li>
            <li>Courses</li>
            <li>Hire from us</li>
          </div>
        </ul>
      </div>
      <div>
        <ul>
          <li className="text-[20px] font-medium">Resources</li>
          <div className='text-black text-[16px] font-normal'>
            <li>Blog</li>
            <li>Privacy policy</li>
            <li>FAQ</li>
            <li>Terms and Condition </li>
            <li>Refund Policy</li>
          </div>
        </ul>
      </div>
      <div>
        <ul>
          <li className="text-[20px] font-medium">Company</li>
          <div className='text-black text-[16px] font-normal'>
            <li>Careers</li>
            <li>Alumni</li>
            <li>Our team</li>
          </div>
        </ul>
      </div>
      <div>
        <ul>
          <li className="text-[20px] font-medium">Get in touch</li>
          <div className='flex items-center gap-2 text-black text-[16px] font-normal'>
            <li>
              <img src={facebook} alt='' />
            </li>
            <li>
              <img src={twiteer} alt='' />
            </li>
            <li>
              <img src={instagram} alt='' />
            </li>
            <li>
              <img src={linkedin} alt='' />
            </li>
          </div>
          <li className="text-[20px] font-medium">Contact us</li>
          <div className="flex items-center gap-2 text-black">
            <img src={phone} alt='' />
            <span>+91 8822791391</span>
          </div>
          <div className="flex items-center gap-2 text-black">
            <img src={email} alt='' />
            <span>geeksofgurukul.com</span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
