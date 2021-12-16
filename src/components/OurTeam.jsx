import React, { Component } from 'react';
import img1 from '../img/4-768x768.webp';
import img2 from '../img/Croco-BG-1-768x768.webp';
import img3 from '../img/Croco-BG-768x768.webp';
import img4 from '../img/Sans-titre-1-1-768x768.webp';
// import {motion} from 'framer-motion';

class OurTeam extends React.Component {
  render() { 
    const lightBackground = {
      backgroundColor:"#FFFF",
      color:"black",
    }
    const paragraphStyle = {
      fontSize:"20px"
    }
    const headingStyle = {
      fontWeight:"800",
    }
    const headingStyle2 = {
      fontWeight:"400",
    }
    const teamImgStyle = {
      width:"100%",
      borderRadius:"5em",
      border:"3px solid rgba(0,0,0,0.3)"
    }
    return <>
      <div id="div-ourteam" style={lightBackground}>
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center" style={headingStyle}>Our Team</h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-md-6 col-lg-3">
              <img style={teamImgStyle} src={img1} alt="" />
              <h3 className="text-center mt-3" style={headingStyle}>Joseph.O</h3>
              <h6 className="text-center" style={headingStyle2}>PROJECT LEADER</h6>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img style={teamImgStyle} src={img2} alt="" />
              <h3 className="text-center mt-3" style={headingStyle}>Juan.C</h3>
              <h6 className="text-center" style={headingStyle2}>2D ARTIST</h6>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img style={teamImgStyle} src={img3} alt="" />
              <h3 className="text-center mt-3" style={headingStyle}>Yass.F</h3>
              <h6 className="text-center" style={headingStyle2}>CO-FOUNDER</h6>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img style={teamImgStyle} src={img4} alt="" />
              <h3 className="text-center mt-3" style={headingStyle}>Thuan.D</h3>
              <h6 className="text-center" style={headingStyle2}>CO-FOUNDER</h6>
            </div>
          </div>
        </div>
      </div>
    </>;
  }
}
 
export default OurTeam;