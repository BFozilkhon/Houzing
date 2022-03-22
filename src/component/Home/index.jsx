import React from "react";
import Discover from "../Discover";
import BecomeAgent from "./BecomeAgent";
import Opener from "./Opener";

export const Home = () => {
  return (
    <div>
      <Opener />
      <Discover />
      <BecomeAgent />
    </div>
  );
};

export default Home;
