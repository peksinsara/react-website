import React from "react";
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour } from "./Data";
import { InfoSection } from "../../components";

const Home = () => {
  return (
    <div>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </div>
  );
};

export default Home;
