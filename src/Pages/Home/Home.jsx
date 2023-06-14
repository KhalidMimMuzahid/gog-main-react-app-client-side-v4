import React from "react";

import Banner from "./Banner/Banner";

import SchoolChamp from "./UpCommingBatches/SchoolChamp/SchoolChamp";

import CodingBees from "./UpCommingBatches/CodingBees/CodingBees";
import EngineeringNerds from "./UpCommingBatches/EngineeringNerds/EngineeringNerds";

import Landing from "./Landing/Landing";
import SDEInfo from "./SDEInfo/SDEInfo";


const Home = () => {
  return (
    <div>

      <Landing />
      <Banner/>
      <SDEInfo />
      <SchoolChamp/>
      <CodingBees/>
      <EngineeringNerds/>

    </div>
  );
};

export default Home;
