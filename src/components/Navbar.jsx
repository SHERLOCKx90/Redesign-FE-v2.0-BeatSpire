import { React, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';



const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;
position: fixed;
z-index: 999;

@media screen and (max-width: 768px){
  height: 300px;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  background-color: #1F2350;
  padding: 30px 10px;
}`;

const StyledFontAwesomeIcon = styled(FaBars)`
position: absolute;
display: none;
top: 20px;
right: 30px;
color: white;
font-size: 1.8rem;
cursor: pointer;
@media screen and (max-width: 768px){
  display: block;
}
`


const NavMenu = styled.ul`
display: flex;
gap: 50px;
list-style-type: none;
/* border: 1px solid green; */

@media screen and (max-width: 768px){
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  line-height: auto;
  text-align: center;
  /* background-color: green; */
  text-decoration: none;
}
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
}

@media screen and (max-width: 768px){
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0px 5px;
  flex-direction: column;
  position: relative;
  z-index: 2000;
  font-size: 1.3rem;
  &:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 10px;
    text-align: center;
  }
}`;

const Nav = styled.div`
display: flex;

@media screen and {max-width: 768px}{
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 0px 20px; */ 
  position: relative;
  z-index: 2000;
  height: 200px;
}

`;

const NavLogo = styled.div`
margin-right: 10px;
height: 50px;
width: 50px;

@media screen and (max-width: 768px){
  margin-right: 4rem;
  background-color: black;
  padding: 20px;
  border-radius: 20px;
  &:hover{
    cursor: pointer;
    transform: scale(1.6);
    transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    margin-top: 20px;
  }
}
`;

const Img = styled.img`
height: 100%;
width: 100%;

&:hover{
  /* width: 100%; */
  cursor: pointer;
  transform: scale(1.05);
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

@media screen and (max-width: 768px){
  /* border: 1px solid red; */
  width: 40px;
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
  padding: 5px;
  }
&:hover{
  cursor: pointer;
  /* border: 0.5px solid white; */
  /* box-shadow: 0px 20px 10px 0px white;'; */
  background-color: #1F2350;
  transform: scale(1.1);
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

@media screen and (max-width: 768px){
  border-radius: 20px;
  display: block;
  padding: 20px;
  height: max-content;
  width: max-content;
  &:hover{
    cursor: pointer;
    background-color: black;
  }
  background-color: black;
  margin-left: 100px;
}
`

const Span = styled.span`
display: none;

@media screen and (max-width: 768px){
  text-align: left;
}`


const Navbar = () => {

  const [active, setActive] = useState(false);
  return (
    <Container>
      <Nav active={active}>
        <NavLogo><Img src='../../logo.svg' /></NavLogo>
        <StyledFontAwesomeIcon onClick={() => {
          setActive(!active);
        }}/>
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
    </Container>
  )
}

export default Navbar