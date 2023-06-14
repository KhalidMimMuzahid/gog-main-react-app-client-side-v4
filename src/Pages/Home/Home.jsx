import React from "react";

import Banner from "./Banner/Banner";

import SchoolChamp from "./UpCommingBatches/SchoolChamp/SchoolChamp";

import CodingBees from "./UpCommingBatches/CodingBees/CodingBees";
import EngineeringNerds from "./UpCommingBatches/EngineeringNerds/EngineeringNerds";

import Landing from "./Landing/Landing";
import Super30 from "./Super30/Super30";


const Home = () => {
  return (
    <div>

      <Landing />
      <Banner />
      <Super30/>
      <SchoolChamp/>
      <CodingBees/>
      <EngineeringNerds/>

    </div>
  );
};

export default Home;
