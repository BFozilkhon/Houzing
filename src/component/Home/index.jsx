import React from "react";
import Discover from "./Discover";
import BecomeAgent from "./BecomeAgent";
import Opener from "./Opener";
import ChooseUs from "./ChooseUs";
export const Home = () => {
  return (
    <div>
      <Opener />
      <Discover />
      <BecomeAgent />
      <ChooseUs />
    </div>
  );
};

export default Home;
