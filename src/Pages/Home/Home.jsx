import React from "react";

import Banner from "./Banner/Banner";

import SchoolChamp from "./UpCommingBatches/SchoolChamp/SchoolChamp";

import CodingBees from "./UpCommingBatches/CodingBees/CodingBees";
import EngineeringNerds from "./UpCommingBatches/EngineeringNerds/EngineeringNerds";

import Landing from "./Landing/Landing";


const Home = () => {
  return (
    <div>

      <Landing />
      <Banner/>
      <SchoolChamp/>
      <CodingBees/>
      <EngineeringNerds/>

    </div>
  );
};

export default Home;
