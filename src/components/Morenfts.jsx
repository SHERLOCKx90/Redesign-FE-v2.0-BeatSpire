import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`
color: white;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
position: relative;
`
// green gradient
const Gradient01 = styled.div`
background: rgba(71, 253, 209, 0.71);
filter: blur(300px);
height: 200px;
width: 200px;
display: inline-flex;
padding: 250px 0px 0px 201px;
justify-content: flex-end;
align-items: center;
position: absolute;
top:800px;
left:20px;
z-index: 1;
`

// blue gradient
const Gradient02 = styled.div`
position: absolute;
width: 610px;
height: 489px;
flex-shrink: 0;
top: 200px;
background: rgba(85, 71, 253, 0.90);
filter: blur(250px);
right:300px;
`
const Header = styled.h1`
z-index: 1000;
color: #FFF;
font-family: Poppins;
font-size: 100px;
font-style: normal;
font-weight: 500;
line-height: 110px; /* 100% */
`
const Span = styled.span`
margin-left: 10px;
`
const Img = styled.img``

const Img2 = styled.img`
/* position: absolute; */
top: 200px;
right: 300px;
z-index: 1000;
width: 500px;
&:hover {
  transform: scale(1.05);
    transition: transform 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
    cursor: pointer;
}
`

const Left = styled.div``

const Right = styled.div`
/* border: 1px solid white; */
width: max-content;
height: max-content;
z-index: 1000;
`

const Tagline = styled.p`
/* position: absolute; */
z-index: 2;
width: 855px;
/* left:100px; */
height: 75px;
flex-shrink: 0;
color: rgba(146, 136, 255, 0.90);
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;`


const Button = styled.button`
background-color: rgba(48, 160, 133, 0.71);
color:white;
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
  background-color: rgba(48, 160, 133, 0.90);
  cursor: pointer;
  transform: scale(1.1);
  transition: transform 1s ease-in-out;
  color: black;
}
`
const Morenfts = () => {
  return (
    <Container id='section02'>
      <Gradient01></Gradient01>
      <Left>
        <motion.div
          initial={{
            opacity: 0,
            // scale: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            // scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}><Header>Explore Top <br /> NFTs<Span>
            <Img src='../../circle2.svg' />
          </Span>
          </Header>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            // scale: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            // scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <Tagline>Discover the most sought-after digital assets of <br /> the moment with our curated selection of top <br />NFTs.
          </Tagline>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            // scale: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            // scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}>
          <Button>See All</Button>
        </motion.div>
      </Left>
      <Right>
        <Img2 src='../../robert.svg' />
      </Right>
      <Gradient02></Gradient02>
    </Container>
  )
}

export default Morenfts;