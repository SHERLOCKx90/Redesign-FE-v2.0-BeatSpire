import { React, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';



const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;
position: fixed;
z-index: 999;

@media screen and (max-width: 768px){
  display: none;
  /* max-height: 200px; */
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  background-color: #1F2350;
  padding: 30px 10px;

  &.open{
    /* transform: translateY(0.1%);
    transition: transform 2s cubic-bezier(0.075, 0.82, 0.165, 1); */
    ul{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 90%;
      color: black;
      text-decoration: no;
    }
  }
}`;

const StyledFontAwesomeIcon = styled(FaTimes)`
z-index: 1000;
position: fixed;
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
  display: none;
  /* position: absolute; */
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
padding-top: 10px;

@media screen and (max-width: 768px){
  margin-right: 4rem;
  background-color: black;
  padding: 20px;
  border-radius: 20px;
  &:hover{
    cursor: pointer;
    transform: scale(1.6);
    transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    margin: 20px 0px;
  }
}
`;

const Img = styled.img`
height: 40px;
width: 40px;

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
height: 50px;
width: max-content;
margin-left: 50px;
/* border: 1px solid red; */
padding:10px 20px;
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

const NavbarToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;

const Navbar = () => {

  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  }
  return (
    <Container className={active ? 'open' : ''}>
      <Nav>
        <NavLogo><Img src='../../logo.svg' /></NavLogo>
        <StyledFontAwesomeIcon onClick={toggleActive} />
        {/* <NavbarToggle onClick={toggleActive}>
          <i className={active ? 'fas fa-times' : 'fas fa-bars'}></i>
        </NavbarToggle> */}
        <NavMenu>
          <Link to='/'><NavItem>Home</NavItem></Link>
          <Link to='/artist'><NavItem>Artists</NavItem></Link>
          <Link to='/marketplace'><NavItem>Market Place</NavItem></Link>
          <Link to='/socialgood'><NavItem>Social Good</NavItem></Link>
        </NavMenu>
        <ConnectContainer>
          <Img src='../../metamask.svg' />
          <Span>
            Connect <br />Wallet
          </Span>
        </ConnectContainer>
      </Nav>
    </Container>
  )
}

export default Navbar