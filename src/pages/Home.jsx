import React, { Component } from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import RoadMap from '../components/RoadMap';
import Faq from '../components/Faq';
import OurTeam from '../components/OurTeam';

class Home extends React.Component {
  render() { 
    return <>
      <HeroSection/>
      <About/>
      <RoadMap/>
      <Faq/>
      <OurTeam/>
    </>;
  }
}
 
export default Home;