import React, { Component,state } from 'react';
import heroImg from '../img/16-min.webp';


class HeroSection extends React.Component {
  render() { 
    return <div id="div-hero" style={{backgroundImage:`url(${heroImg})`,backgroundSize:"cover",height:"700px"}}>
      
    </div>;
  }
}

export default HeroSection;