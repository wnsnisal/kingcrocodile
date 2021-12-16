import React, { Component } from 'react';
import RoadMapImg from '../img/Roadmap-2.0-JPG-2-1536x864.webp';
import SansTitre from '../img/Sans-titre-1-2-768x650.webp';
import { FaDiscord } from "react-icons/fa";

class RoadMap extends React.Component {
  render() { 
    const lightBackground = {
      backgroundColor:"#FFFF",
      color:"black",
    }
    const headingStyle = {
      fontWeight:"700",
    }
    const darkBackground = {
      backgroundColor:"rgba(0,0,0)",
      color:"#FFFF",
    }
    const paragraphStyle = {
      fontSize:"20px"
    }
    const roadmapArrow = {
      height:"100px",
      width:"5px",
      backgroundColor:"rgba(255,255,255,0.3)",
      display:"block"
    }

    const goToTheDiscord = ()=>{
      window.open("https://discord.com/invite/bDMYprNxnp");
    }
    return <>
      <div id="div-roadmap" style={lightBackground}>
        <div className='container pt-5'>
          <div className="row">
            <div className="col-12">
              <h1 className="text-center" style={headingStyle}>ROADMAP 2.0</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <img src={RoadMapImg} alt="" style={{width:"100%",border:"3px solid rgba(0,0,0,0.5)"}} />
            </div>
          </div>
        </div>
      </div>
      <div style={darkBackground}>
        <div className='container py-5'>
          <div className="row">
            <div className="col-12">
              <h2 style={headingStyle} className='text-center'>1. Fuel supply</h2>
              <p style={paragraphStyle} className='text-center'>
              Gear up and join the battle on Discord. A draw will be made among the first 2,222 members on our Discord channel to win a Fearless Crocodiles NFT and 22 random crocodile NFT airdrops.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <span style={roadmapArrow}></span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 style={headingStyle} className='text-center'>2. Lift-off</h2>
              <p style={paragraphStyle} className='text-center'>The mint phase will be available on our website on the Ethereum Blockchain and with a Metamask integration. The mint will be reserved for whitelisted members only. Join our Discord channel to find out more.<u>No public sale.</u>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
            <span style={roadmapArrow}></span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 style={headingStyle} className='text-center'>3. On the road</h2>
              <p style={paragraphStyle} className='text-center'>Each day, until the release of the 3D collection, a randomly selected holder will receive $1,000 USD.This will motivate members to hold in order to raise the floor price.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
            <span style={roadmapArrow}></span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 style={headingStyle} className='text-center'>4. The moon in sight</h2>
              <p style={paragraphStyle} className='text-center'>All crocodiles holders will be able to mint a 3D Queen Crocodile with a discounted price of 0.1ETH</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
            <span style={roadmapArrow}></span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 style={headingStyle} className='text-center'>5. Explorers</h2>
              <p style={paragraphStyle} className='text-center'>History of KCC, 21TTLE 5204LE. NO. NAME</p>
            </div>
          </div>
        </div>
      </div>
      <div style={lightBackground}>
        <div className='container py-5'>
          <div className="row">
            <div className="col-12 col-md-6">
              <img src={SansTitre} alt="" style={{width:"100%"}} />
            </div>
            <div className="col-12 col-md-6">
              <h1 style={headingStyle} className='text-center mt-5'>
                THE ATTRIBUTES
              </h1>
              <p style={paragraphStyle} className='text-center mt-5'>
                Each Crocodile has been programmatically generated from 120+ attributes across different traits. All 2,222 of them are unique and are ready to fight. Some are rarer and stronger than others due to the number of equipment they have.
              </p>
              <button onClick={goToTheDiscord} className="btnDiscord py-3 d-flex mt-5" style={{width:"210px",margin:"auto"}}>
                <FaDiscord className='mx-2' style={{fontSize:"30px"}}/><p className='mx-2 mb-0'>Join Our Discord</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>;
  }
}
 
export default RoadMap;