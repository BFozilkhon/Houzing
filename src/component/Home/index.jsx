import React from 'react';
import Discover from './Discover';
import BecomeAgent from './BecomeAgent';
import Opener from './Opener';
import ChooseUs from './ChooseUs';
import Footer from '../Generic/Footer';
export const Home = () => {
  return (
    <div>
      <Opener />
      <Discover />
      <BecomeAgent />
      <ChooseUs />
      <Footer />
    </div>
  );
};

export default Home;
