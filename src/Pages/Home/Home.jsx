import React from "react";

import Banner from "./Banner/Banner";

import SchoolChamp from "./UpCommingBatches/SchoolChamp/SchoolChamp";
import Landing from "./Landing/Landing";

const Home = () => {
  return (
    <div>

      <Landing />
      <Banner/>
      <SchoolChamp/>

    </div>
  );
};

export default Home;
