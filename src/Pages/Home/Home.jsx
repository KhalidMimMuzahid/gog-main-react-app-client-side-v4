import React from "react";

import Banner from "./Banner/Banner";

import SchoolChamp from "./UpCommingBatches/SchoolChamp/SchoolChamp";
import Landing from "./Landing/Landing";
import Super30 from "./Super30/Super30";

const Home = () => {
  return (
    <div>

      <Landing />
      <Banner />
      <Super30/>
      <SchoolChamp/>

    </div>
  );
};

export default Home;
