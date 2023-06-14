import React from "react";

import Banner from "./Banner/Banner";

import SchoolChamp from "./UpCommingBatches/SchoolChamp/SchoolChamp";
import CodingBees from "./UpCommingBatches/CodingBees/CodingBees";
import EngineeringNerds from "./UpCommingBatches/EngineeringNerds/EngineeringNerds";

const Home = () => {
  return (
    <div>

      <Banner/>

      <h1>landing page</h1>
      <SchoolChamp/>
      <CodingBees/>
      <EngineeringNerds/>

    </div>
  );
};

export default Home;
