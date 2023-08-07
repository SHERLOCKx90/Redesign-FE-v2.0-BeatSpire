import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`
color: white;
background-color: black;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
`
const Gradient01 = styled.div`
background: rgba(71, 253, 209, 0.71);
filter: blur(200px);
height: 100px;
width: 100px;
display: inline-flex;
padding: 250px 0px 0px 201px;
justify-content: flex-end;
align-items: center;
position: absolute;
top:400px;
left:500px;
z-index: 1;`

const Gradient02 = styled.div`
position: absolute;
width: 510px;
height: 389px;
flex-shrink: 0;
top: 20px;
background: rgba(85, 71, 253, 0.90);
filter: blur(250px);
right:600px;`

const Header = styled.h1`
z-index: 1000;
font-size: 100px;
font-weight: 500;
`
const Span = styled.span`
margin-left: 10px;
`

const Img = styled.img`
height: 40px;
width: 40px;`



const Hero = () => {
  return (
    <Container>
      <Gradient01>
      </Gradient01>
      <motion.div
        initial={{
          opacity: 0,
          // scale: 0,
          y:100,
        }}
        animate={{
          opacity: 1,
          // scale: 1,
          y:0,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        <Header>BeatSpire<Span>
          <Img src='../../circle.svg' />
        </Span></Header>
      </motion.div>

      <Gradient02>
      </Gradient02>

    </Container>
  )
}

export default Hero