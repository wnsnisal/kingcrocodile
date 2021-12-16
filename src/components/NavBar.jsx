import React, { Component,state } from 'react';
import '../styles/styles.css';
import { Link as ScrallLink, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import openSeaLogo from '../img/openSeaLogo.webp';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {menuClass: "",menuOpen:false,sidebarOpenClose:"sidebar-close"};  
  }
  render() { 

    const siteLogo = {
      fontWeight:"900",
      color:"#FFFF",
    }

    const sideBar = {
      backgroundColor:"rgba(0,0,0)",
      width:"350px",
      position:"absolute",
      top:"0",
      height:"100vh",
      color:"#FFFF",
      textAlign:"center",
      paddingTop:"150px"
    }

    // const btnDiscord = {
    //   fontWeight:"800",
    //   zIndex:"100",
    // }

    const toggleBtn = {
      zIndex:"100"
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

    const handleMenuClick = ()=>{
      if(!this.state.menuOpen) {
        this.setState({
          menuClass:" open",
          menuOpen:true,
          sidebarOpenClose : "sidebar-open"
        })
      } else {
        this.setState({
          menuClass : "",
          menuOpen:false,
          sidebarOpenClose : "sidebar-close"
        })
      }
    }
    const closeMenu = ()=>{
      this.setState({
        menuClass : "",
        menuOpen:false,
        sidebarOpenClose : "sidebar-close"
      })
    }

    const goToTheDiscord = ()=>{
      window.open("https://discord.com/invite/bDMYprNxnp");
    }

    return <div className='row py-3 px-5' style={{backgroundColor:"rgba(0,0,0,0.8)",position:"fixed",width:"101%"}}>
      <div className="col-12 py-3 d-flex justify-content-between" style={{overflowX:"hidden"}}>
        <ScrallLink
            activeClass="active"
            to="div-hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >

            <Link onClick={closeMenu} style={{textDecoration:"none"}} to="/">
              <h2 style={siteLogo}>KING CROCODILE CLUB</h2>
            </Link>
          </ScrallLink>
        
        <div className="butonGroup d-flex">
          <button onClick={goToTheDiscord} className="mx-4 btnDiscord py-3">
            <FaDiscord style={{fontSize:"30px"}}/> DISCORD
          </button>
          <div className={`menu-btn${this.state.menuClass}`} onClick={handleMenuClick} style={toggleBtn}>
            <div className="menu-btn__burger"></div>
          </div>
        </div>
      </div>
      <div className={this.state.sidebarOpenClose} style={sideBar}>
          <ScrallLink
            activeClass="active"
            to="div-about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Link onClick={closeMenu} style={{textDecoration:"none"}} to="/about"> 
              <h2 className="meu-tabs">About</h2>
            </Link>
          </ScrallLink>
          <ScrallLink
            activeClass="active"
            to="div-roadmap"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Link onClick={closeMenu} style={{textDecoration:"none"}} to="/roadmap"> 
              <h2 className="meu-tabs">Road map</h2>
            </Link>
          </ScrallLink>
          <ScrallLink
            activeClass="active"
            to="div-faq"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Link onClick={closeMenu} style={{textDecoration:"none"}} to="/faq"> 
              <h2 className="meu-tabs">Faq</h2>
            </Link>
          </ScrallLink>
          <ScrallLink
            activeClass="active"
            to="div-ourteam"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Link onClick={closeMenu} style={{textDecoration:"none"}} to="/ourteam"> 
              <h2 className="meu-tabs">Team</h2>
            </Link>
          </ScrallLink>
          <div className="d-flex justify-content-around mt-5">
            <FaDiscord onClick={goToTheDiscord} style={iconStyle}/>
            <FaTwitter onClick={()=>window.open("https://twitter.com/kingcrococlub")} style={iconStyle}/>
            <FaInstagram onClick={()=>window.open("https://www.instagram.com/kingcrocodile.club/")} style={iconStyle}/>
            <img onClick={()=>window.open("https://opensea.io/")} style={iconImageStyle} src={openSeaLogo}/>
          </div>
      </div>
    </div>;
  }
}
 
export default NavBar;