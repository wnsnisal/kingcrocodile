import React, { Component,state } from 'react';
import {Data} from '../components/Data';
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi';

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: null};  
  }
  render() { 

    const toggle = index =>{
      if(this.state.clicked === index){
        this.setState({clicked:null});
      }else{
        this.setState({clicked:index});
      }
      
    }

    const DropDown = styled.div`
      display:flex;
      justify-content:space-between;
      align-items:center;
      width:100%;
      text-align:left;

      p {
        padding:1rem;
      }
    `;

    const AccordionSection = styled.div`
      display:flex;
      flex-direction:column;
    `;
    const Container = styled.div``;
    const Wrap = styled.div`
      display:flex;
      justify-content:space-between;
      align-items:center;
      width:100%;
      text-align:center;
      cursor:pointer;

      h3 {
        padding:1rem;
      }
    `;

    const headingStyle = {
      fontWeight:"800",
    }
    const darkBackground = {
      backgroundColor:"rgba(0,0,0)",
      color:"#FFFF",
    }
    const iconStyle = {
      color:"white",
      marginRight:"20px"
    }
    return <>
      <div id="div-faq" style={darkBackground}>
        <div className='container py-5'>
          <h1 className="text-center" style={headingStyle}>FAQ's</h1>

          <IconContext.Provider value={{color:"#00FFB9",size:"25px"}}>
            <AccordionSection>
              <Container>
                {
                  Data.map((item, index)=>{
                    return(
                      <div style={{backgroundColor:"#353d4c",marginTop:"1em",borderRadius:"1em"}}>
                      <Wrap onClick={()=>toggle(index)} key={index}>
                        <h3 style={{fontWeight:"700"}}>{item.question}</h3>
                        <span>{this.state.clicked === index?<FiMinus style={iconStyle}/>:<FiPlus style={iconStyle}/>}</span>
                      </Wrap>
                      {this.state.clicked === index? (
                        <DropDown>
                          <p style={{fontSize:"20px",fontWeight:"300"}}>{item.answer}</p>
                        </DropDown>):null
                      }
                        
                      </div>
                    )
                  })
                }
              </Container>
            </AccordionSection>
          </IconContext.Provider>
        </div>
      </div>
    </>;
  }
}
 
export default Faq;