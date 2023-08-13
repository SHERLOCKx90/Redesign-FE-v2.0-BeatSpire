import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Container = styled.div`
/* border: 1px solid red; */
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;
position: fixed;
z-index: 999;
/* border-bottom: 1px solid white; */
`;


const NavMenu = styled.ul`
display: flex;
gap: 50px;
list-style-type: none;
/* border: 1px solid green; */
`;
const NavItem = styled.li`
color:white;
text-decoration: none;
font-family: Poppins;
&:hover {
  /* border: 1px solid blue; */
  padding:10px;
  cursor:pointer;
  background-color: black;
  color: white;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
}`
  ;
const Nav = styled.nav`
display: flex;
`;
const NavLogo = styled.div`
margin-right: 10px;
height: 50px;
width: 50px;
`;

const Img = styled.img`
height: 100%;
width: 100%;

&:hover{
  cursor: pointer;
  transform: scale(1.1);
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
`;

const ConnectContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 30px;
width: max-content;
margin-left: 50px;
/* border: 1px solid red; */
padding:10px;
border-radius: 50px 0px 50px 50px;
&:hover Span{
  display: block;
  color: white;
  font-size: 12px;
  
  }
&:hover{
  cursor: pointer;
  /* border: 0.5px solid white; */
  /* box-shadow: 0px 20px 10px 0px white;'; */
  background-color: #1F2350;
  transform: scale(1.1);
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
`

const Span = styled.span`
display: none;`


const Navbar = () => {
  return (
    <Container>
      <Nav>
        <NavLogo><Img src='../../logo.svg' /></NavLogo>
        <NavMenu>
          <Link to='/'><NavItem>Home</NavItem></Link>
          <Link to='/artist'><NavItem>Artists</NavItem></Link>
          <Link to='/marketplace'><NavItem>Market Place</NavItem></Link>
          <Link to='/socialgood'><NavItem>Social Good</NavItem></Link>
        </NavMenu>
        <ConnectContainer>
          <Img src='../../metamask.svg' />
        <Span>
          Connect Wallet
        </Span>
      </ConnectContainer>
    </Nav>
    </Container >
  )
}

export default Navbar