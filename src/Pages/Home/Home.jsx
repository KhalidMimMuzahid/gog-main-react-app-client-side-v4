import React from "react";

import Banner from "./Banner/Banner";

import SchoolChamp from "./UpCommingBatches/SchoolChamp/SchoolChamp";

import CodingBees from "./UpCommingBatches/CodingBees/CodingBees";
import EngineeringNerds from "./UpCommingBatches/EngineeringNerds/EngineeringNerds";

import Landing from "./Landing/Landing";
import SDEInfo from "./SDEInfo/SDEInfo";

import Super30 from "./Super30/Super30";
import Faq from "./Faq/Faq";

import ExploreCourses from "./ExploreCourses/ExploreCourses";



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

      <Faq/>

      <ExploreCourses/>


    </div>
  );
};

export default Home;
