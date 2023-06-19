import React from "react";

import Banner from "./Banner/Banner";

import SchoolChamp from "./UpCommingBatches/SchoolChamp/SchoolChamp";

import CodingBees from "./UpCommingBatches/CodingBees/CodingBees";
import EngineeringNerds from "./UpCommingBatches/EngineeringNerds/EngineeringNerds";

import Landing from "./Landing/Landing";
import SDEInfo from "./SDEInfo/SDEInfo";

import Super30 from "./Super30Card/Super30Card";
import Faq from "./Faq/Faq";

import ExploreCourses from "./ExploreCourses/ExploreCourses";
import StudentReview from "./StudentReview/StudentReview";
import DreamJob from "./DreamJob/DreamJob";
import Benefits from "./Benefits/Benefits";
import StudentPlaced from "./StudentPlaced/StudentPlaced";

import MeetOurTeam from "./MeetOurTeam/MeetOurTeam";

import FirstStepCard from "./FirstStepCard/FirstStepCard";
import LearningJourneyCard from "./LearningJourneyCard/LearningJourneyCard";
import TopTalentCard from "./TopTalentCard/TopTalentCard";





const Home = () => {
  return (
    <div>
      <Landing />
      <Banner />
      <Super30/>
      <SDEInfo />
      <SchoolChamp/>
      <CodingBees/>
      <EngineeringNerds/>
      <ExploreCourses/>
      <DreamJob/>
      <Benefits/>
      <FirstStepCard />
      <StudentReview />
      <TopTalentCard />
      <MeetOurTeam/>
      <StudentPlaced/>
      <LearningJourneyCard />
      <Faq/>
    </div>
  );
};

export default Home;
