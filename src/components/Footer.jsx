import React, { Component } from 'react';
import logo from '../img/Logo-min.webp';
import '../styles/styles.css';
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import openSeaLogo from '../img/openSeaLogo.webp';

class Footer extends React.Component {
  render() { 
    const darkBackground = {
      backgroundColor:"rgba(0,0,0)",
      color:"#FFFF",
    }
    const headingStyle = {
      fontWeight:"800",
    }
    const footerTextStyle ={
      fontWeight:"300",
      fontSize:"24px"
    }
    const goToTremsAndConditions = ()=>{
      window.open("http://kingcrocodile.club/conditions/");
    }
    const goToTheDiscord = ()=>{
      window.open("https://discord.com/invite/bDMYprNxnp");
    }

    const iconStyle = {
      fontSize:"36px",
      cursor:"pointer",
    }
    const iconImageStyle ={
      width:"45px",
      height:"45px",
      cursor:"pointer",
    }
    return <>
      <div style={darkBackground}>
        <div className='container py-5'>
          <div className="row">
            <div className="col-12 text-center">
              <img src={logo} style={{maxWidth:"150px",}} alt="" />
              <h1 className='text-center mb-5' style={headingStyle}>KING CROCODILE CLUB</h1>
              <h3 style={headingStyle} className='text-center'>All Rights Reserved 2021</h3>
              <h3 className='text-center' style={headingStyle}>0x27e4731C512Be743735ABF5d1abfC5039ae7819D</h3>
              <button onClick={goToTremsAndConditions} className="mx-4 btnTremsAndConditions py-3 mt-4">
                Terms and conditions
              </button>
            </div>
          </div>
          <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-around mt-5">
            <FaDiscord onClick={goToTheDiscord} style={iconStyle}/>
            <FaTwitter onClick={()=>window.open("https://twitter.com/kingcrococlub")} style={iconStyle}/>
            <FaInstagram onClick={()=>window.open("https://www.instagram.com/kingcrocodile.club/")} style={iconStyle}/>
            <img onClick={()=>window.open("https://opensea.io/")} style={iconImageStyle} src={openSeaLogo}/>
          </div>
          </div>
        </div>
      </div>
    </>;
  }
}
 
export default Footer;