import { React, useState } from 'react'
import MainLayout from '../Layout/MainLayout'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import Footer from '../Components/Footer'

const Container = styled.div`
color: white;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
/* border: 1px solid #07CF9E; */
/* overflow: hidden; */
`

// blue-gradient
const Gradient01 = styled.div`
background: rgba(85, 71, 253, 0.90);
filter: blur(300px);
height: 400px;
width: 400px;
display: inline-flex;
padding: 250px 0px 0px 201px;
justify-content: flex-end;
align-items: center;
position: absolute;
top:100px;
left:1000px;
z-index: 1;
`

// green-gradient
const Gradient02 = styled.div`
position: absolute;
width: 510px;
height: 389px;
flex-shrink: 0;
top: 20px;
background:rgba(71, 253, 209, 0.71);
filter: blur(250px);
right:1000px;`

const Header = styled.h1`
font-size: 50px;
font-weight: 500;
line-height: 1.2;
margin-bottom: 20px;
text-align: left;
font-family: Poppins;
color: white;
`
const Header3 = styled.h1`
font-size: 100px;
font-weight: 900;
line-height: 1.2;
margin-bottom: 20px;
text-align: left;
font-family: Poppins;
color: white;

@media screen and (max-width: 768px) {
  font-size: 80px;
  margin-top: 0;
  width: min-content;
  text-align: center;
}
`
const Header2 = styled.h1`
background: linear-gradient(88deg, #FA5F4C 0%, #994CDB 37.60%, #4B72DC 63.54%, #3FC9FE 100%);
-webkit-background-clip: text;
background-clip: text;
color: white;
font-size: 50px;
font-weight: 500;
line-height: 1.2;
margin-bottom: 40px;
text-align: left;
font-family: Poppins;

@media screen and (max-width: 768px) {
  font-size: 30px;
  margin-top: 0;
}
`

const Tag = styled.p`
font-family: Poppins; 
font-style: normal;
text-align: left;
font-weight: 500;
`

const Card = styled.div`
height: 400px;
width: 60vw;
padding: 50px;
background-image: url(../../social.png);
background-size: cover; 
background-repeat: no-repeat;
background-position: center;
border-radius: 20px;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
/* position: relative; */
z-index: 2;
overflow: hidden;

@media screen and (max-width: 768px) {
  object-fit: contain;
  width: 80%;
  background-repeat: no-repeat;
  background-size: 100% 50%;
  background-position: center;
}
`

const Button = styled.button`
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  border: 1px solid white;
  font-weight: normal;
  font-family: Poppins;
  z-index: 10;
  font-size: 20px;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    border:none;
    background-color: #07CF9E;
    color: black;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
const Button2 = styled.button`
margin-left: 5px;
background-color: white;
color:black;
border: none;
padding: 10px 20px;
border-radius: 50px;
font-size: 20px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 20px;
z-index: 1001;
&:hover {
  background-color: black;
  cursor: pointer;
  transform: scale(1.1);
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  color: white;
}
`

const Left = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* width: 100%; */
/* position: absolute; */
gap: 0px;
/* margin-bottom: 20px; */
`
const Right = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* width: 100%; */
/* border: 1px solid #07CF9E; */
/* margin-left: 10px; */
/* position: absolute; */
`

const Img = styled.img`
height: 30px;
width: 30px;

@media screen and (max-width: 768px) {
  height: 20px;
  width: 20px;
}
`
const TextSocial = styled.div`
color: white;
/* margin-top: 10px; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const ButCon = styled.div`
display: flex;
justify-content: flex-start;
margin: 20px 0px;
gap: 1rem;
margin-top: 3rem;
z-index: 10;
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;


const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-50px);
    ${'' /* transition: transform 1s ease-in-out; */}
  }
`;


const ReadMore = styled.div`
border:1px solid #451F82;
border-radius: 20px;
padding: 1.5rem;
margin-top: 2rem;
background: -webkit-radial-gradient(#00FFBA, #740B98);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${({ showCard }) => showCard ? fadeIn : fadeOut} 0.5s ease-in-out forwards;`

const InfoPara = styled.p`
font-family: Poppins;
font-weight: 500;
font-size: 1.5rem;
text-align: center;

@media screen and (max-width: 768px) {
  font-size: 20px;
}
`
const Span = styled.span`
margin-left: 5px;
`

const SocialGood = () => {
  const [Show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!Show)
  }
  return (
    <MainLayout>
      <Gradient01></Gradient01>
      <Container id='social-01'>
        <Card>
        </Card>
        <Header2>Let Music Heal you<Span><Img src='../../../circle.svg' /></Span></Header2>
      </Container>
      <TextSocial><Header3>Coming Soon</Header3></TextSocial>
      <TextSocial><ButCon>
        <Button onClick={handleClick}>Read More</Button>
      </ButCon>
        {Show && <ReadMore showCard={setShow}>
          <InfoPara>We at BeatSpire,<br /> are trying to build an unique way of music therapy <br />based on Human mood and emotions.<br /> Stay tuned for healing your mind and soul through <br />the beats of Music.</InfoPara>
        </ReadMore>}</TextSocial>
      <Footer />
      <Gradient02></Gradient02>
    </MainLayout>
  )
}

export default SocialGood