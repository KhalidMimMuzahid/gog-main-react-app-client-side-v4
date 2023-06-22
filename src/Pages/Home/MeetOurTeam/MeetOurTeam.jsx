import React from "react";
import TeamCard from "./TeamCard/TeamCard";
import Marquee from "react-fast-marquee";

import RR from "../../../assets/Teams/RR.svg";
import MP from "../../../assets/Teams/MP.svg";
import DY from "../../../assets/Teams/DY.svg";
import SK from "../../../assets/Teams/SK.svg";
import RajivR from "../../../assets/Teams/RajivR.svg";
import PS from "../../../assets/Teams/PS.svg";
import AK from "../../../assets/Teams/AK.svg";
import AC from "../../../assets/Teams/AC.svg";

import Linkedin from "../../../assets/Teams/Linkedin.svg";
import IIT from "../../../assets/Teams/IIT.svg";

const MeetOurTeam = ({ showHeading }) => {
  const teams = [
    {
      name: "Rohit rana",
      img: RR,
      designation: "Associate Director - Operations",
      institute: ["Mtech - IIT Kharagpur", "Phd - IIT Roorkee"],
      icon: [IIT, Linkedin],
      body: "It was an easy and straight choice for me to join Geeks of Gurukul and be a part of this tech family which is committed to new technologies and fosters a culture of persistent innovation. By learning from Geeks of Gurukul, you can be confident that you have the most relevant skills needed to succeed in this rapidly evolving tech industry.",
    },
    {
      name: "Manish d pepal",
      img: MP,
      designation: "Lead Instructor",
      institute: ["Mtech - IIT Roorkee", "Phd - IIT Roorkee"],
      icon: [IIT, Linkedin],
      body: "Geeks of Gurukul shares my belief in the power of continuous learning and growth, this was my simple reason for joining the family of Geeks of Gururkul. Geeks of Gururkul provides you access to experienced mentors, personalized guidance and like-minded individuals who share your passion for technology.",
    },
    {
      name: "Deepika Yadav",
      img: DY,
      designation: "Director - Curriculum",
      institute: ["Mtech - IIT Roorkee", "Phd - IIT Roorkee"],
      icon: [IIT, Linkedin],
      body: "I chose Geeks of Gurukul because of its collaborative and supportive culture and the team- oriented approach where instructors and students work together. Geeks of Gurukul provides a supportive and learning environment which will help you to stay motivated and achieve your learning goals.",
    },
    {
      name: "Sandeep kumar",
      img: SK,
      designation: "Lead Instructor",
      institute: ["Mtech - IIT Roorkee", " Phd - IIT Roorkee"],
      icon: [IIT, Linkedin],
      body: "My reason for joining Geeks of Gurukul is that it prepares individuals for success in the tech industry which aligns with my desire to make a meaningful impact in one’s lives. Geeks of Gururkul opens doors for various industries and companies. This provides you with various career opportunities.",
    },
    {
      name: "Rajiv Rana",
      img: RajivR,
      designation: "Lead Student Experience",
      institute: ["Mtech - IIT Kharagpur", "Phd - IIT Roorkee"],
      icon: [IIT, Linkedin],
      body: "My reason for joining Geeks of Gururkul is personal growth. Joining it as an instructor offers opportunities for my personal growth and development. Geeks of Gururkul focuses on practical learning. Therefore, it makes you industry ready along with clearing your theoretical concepts.",
    },
    {
      name: "Praveen Sai Teella",
      img: PS,
      designation: "Lead Instructor",
      institute: ["Btech - IIT Guwahati"],
      icon: [IIT, Linkedin],
      body: "Geeks of Gurukul shares my belief in the power of continuous learning and growth, this was my simple reason for joining the family of Geeks of Gururkul. Geeks of Gururkul provides you access to experienced mentors, personalized guidance and like-minded individuals who share your passion for technology.",
    },
    {
      name: "Ajay Kumar",
      img: AK,
      designation: "Director - Curriculum",
      institute: ["Mtech - IIT Kharagpur"],
      icon: [IIT, Linkedin],
      body: "I chose to join Geeks of Gurukul as an instructor because of its exceptional reputation in the tech industry. Geeks of Gururkul’s resources and network allows you to stay connected with industry leaders, thus expanding your career opportunities.",
    },
    {
      name: "Arun chauhan",
      img: AC,
      designation: "Associate Director - Curriculum",
      institute: ["Mtech - IIT Roorkee", "Phd - IIT Roorkee"],
      icon: [IIT, Linkedin],
      body: "The main reason for me joining Geeks of Gurukul as an instructor is the quality education it provides along with the practical experience it gives to the students. Geeks of Gururkul has designed a curriculum that keeps you up-to-date with the latest advancements. By joining Geeks of Gurukul you get the most relevant skills needed for succeeding in this evolving tech world.",
    },
  ];

  return (
    <div className="mb-[120px]">
      {showHeading && (
        <>
          <h2 className="mb-[40px] text-center font-[500] md:text-[36px] text-[25px]  bg-clip-text text-transparent bg-gradient-to-r from-[#37ED81] via-[#3DA5BD] to-[#905BEC]">
            MEET OUR Team
          </h2>
          <p className="mb-[80px] text-center font-[500] dark:text-[white] text-[#101010] md:text-[18px] text-[15px]">
            A Team Of IITians to Boost your Tech Career to New Heights. The
            Curriculum Team is an experienced group of data analyst instructors
          </p>
        </>
      )}
      <div>
        <Marquee pauseOnHover={true} className="mb-[60px]" speed={40}>
          {teams?.map((team, i) => (
            <TeamCard team={team} key={i} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MeetOurTeam;
