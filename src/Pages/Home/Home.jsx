import React from "react";

import Banner from "./Banner/Banner";

import SchoolChamp from "./UpCommingBatches/SchoolChamp/SchoolChamp";
import Landing from "./Landing/Landing";
import SDEInfo from "./SDEInfo/SDEInfo";

const Home = () => {
  return (
    <div>

      <Landing />
      <Banner/>
      <SDEInfo />
      <SchoolChamp/>

    </div>
  );
};

export default Home;
