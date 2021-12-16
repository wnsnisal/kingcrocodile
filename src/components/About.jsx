import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import img1 from '../img/1.webp';
import img2 from '../img/2.webp';
import img3 from '../img/3.webp';
import img4 from '../img/4.webp';
import video from '../img/ezgif.com-gif-maker.mp4';
import crown from '../img/Crown-min-pgh70y1ttgje91d27t1oxgu7s8nbzdf64rvv29t798.webp';
import carouselImg1 from '../img/711.webp';
import carouselImg2 from '../img/811.webp';
import carouselImg3 from '../img/911.webp';
import carouselImg4 from '../img/511.webp';
import carouselImg5 from '../img/611.webp';
import carouselImg6 from '../img/1011.webp';

import croco from '../img/croco.png';
import eyes from '../img/eyes.png';
import eyecover from '../img/eyecover.png';
import mike from '../img/mike.png';
import ring from '../img/ring.png';

class About extends React.Component {
  
  render() { 
    const headingStyle = {
      fontWeight:"700",
    }
    const darkBackground = {
      backgroundColor:"rgba(0,0,0)",
      color:"#FFFF",
    }
    const lightBackground = {
      backgroundColor:"#FFFF",
      color:"black",
    }
    const paragraphStyle = {
      fontSize:"20px"
    }
    const imgStyle = {
      width:"100%",
      borderRadius:"50%",
    }

    const carouselContainer = {
      display:"flex",
      flexDirection:"row",
      overflowX:"scroll"
    }

    const carouselItem = {
      
    }

    const carouselImg = {
      width:"300px"
    }

  
    return <>
      <div id="div-about" style={darkBackground}>
        <div className='container py-5'>
          <div className="row">
            <div className="col-12">
              <img src={croco} style={{position:"relative",width:"320px",top:"0px",left:"400px"}} alt="" />
              <img src={eyes} style={{position:"relative",width:"80px",top:"-150px",left:"-100px"}} alt="" />
              <img src={mike} style={{position:"relative",width:"80px",top:"100px",left:"-150px"}} alt="" />
              <img src={ring} style={{position:"relative",width:"30px",top:"100px",left:"350px"}} alt="" />
              <img src={eyecover} style={{position:"relative",width:"120px",top:"-150px",left:"350px"}} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h1 style={headingStyle} className='text-center'>2,222 UNIQUE BRAVE CROCODILES</h1>
              <p style={paragraphStyle} className='text-center'>Welcome to the King Crocodile Club, a gang of 2,222 of the bravest crocodiles who are going to conquer the heart of the Queen Crocodile.</p>
              <p style={paragraphStyle} className='text-center'>2,222 crocodiles from all over the world have gathered on CrocoLand®, a lost island in the South Pacific Ocean living on the Ethereum Blockchain and are stored as ERC-721 tokens.</p>
              <p style={paragraphStyle} className='text-center'>Who will be the most handsome to make the Queen fall in love?</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 py-3"><img style={imgStyle} src={img1} alt="" /></div>
            <div className="col-12 col-md-6 col-lg-3 py-3"><img style={imgStyle} src={img2} alt="" /></div>
            <div className="col-12 col-md-6 col-lg-3 py-3"><img style={imgStyle} src={img3} alt="" /></div>
            <div className="col-12 col-md-6 col-lg-3 py-3"><img style={imgStyle} src={img4} alt="" /></div>
          </div>
          <div className="row">
            <div className="col-12">
              <h1 style={headingStyle} className='text-center'>Our Goals</h1>
              <p style={paragraphStyle} className='text-center'>Only 2,222 Crocodiles are available. We want to create scarcity on this project.</p>
              <p style={paragraphStyle} className='text-center'>We are not looking to make tens of millions of dollars at launch as most projects do but build a real engaged community to have a constantly evolving floor price to last in the long term.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={lightBackground}>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6">
              {/* <video style={{width:"100%"}} autoplay>
                <source src={video} type="video/mp4"/>
              </video>  */}
              <ReactPlayer url={video} playing="true" width="100%" height="100%" loop="true"/>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-2">
                  <img className='crown-image' style={{width:"55px"}} src={crown} alt="" />
                </div>
                <div className="col-10">
                  <h1 style={headingStyle}>THE KING CROCODILE</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12 p-5">
                  <p style={paragraphStyle}>Born seducer, The King Crocodile leaves no chance for his opponents. He leaves victorious in the arms of The Queen Crocodile.</p>
                  <p style={paragraphStyle}>The owner of The King Crocodile NFT will win $100,000 USD worth of ETH.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={darkBackground}>
        <div className='container py-5'>
          <h1 style={headingStyle} className='text-center'>THE FEARLESS CROCODILES</h1>
          <p style={paragraphStyle} className='text-center'>The Fearless Crocodiles are the rarest NFTs. They are charming and intelligent.</p>
          <p style={paragraphStyle} className='text-center'>They are all hand drawn and the only way to get them is to participate in our raffles on Discord, Instagram and Twitter.</p>
          <div style={carouselContainer}>
            <div style={carouselItem}>
              <img src={carouselImg1} alt="" style={carouselImg}/>
            </div>
            <div style={carouselItem}>
              <img src={carouselImg2} alt="" style={carouselImg} />
            </div>
            <div style={carouselItem}>
              <img src={carouselImg3} alt="" style={carouselImg} />
            </div>
            <div style={carouselItem}>
              <img src={carouselImg4} alt="" style={carouselImg} />
            </div>
            <div style={carouselItem}>
              <img src={carouselImg5} alt="" style={carouselImg} />
            </div>
            <div style={carouselItem}>
              <img src={carouselImg6} alt="" style={carouselImg} />
            </div>
          </div>
        </div>
      </div>
    </>;
  }
}
 
export default About;