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
top: 500px;
right:50px;
background: rgba(85, 71, 253, 0.90);
filter: blur(250px);
/* right:300px; */
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
border-radius: 60px;

&:hover {
    transform: scale(1.05);
    transition: transform 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
    cursor: pointer;
}
`

const Left = styled.div`
z-index: 1000;
/* border: 1px solid white; */
margin-right: 100px;`

const Right = styled.div`
/* border: 1px solid white; */
width: max-content;
height: max-content;
z-index: 1000;
display: flex;
flex-direction: column;
justify-content: center;
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
background-color: #5B4FFF;
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
  background-color: #A29BFF;
  cursor: pointer;
  transform: scale(1.1);
  transition: transform 1s ease-in-out;
  color: black;
}
`
const Morenfts = () => {
    return (
        <Container id='section03'>
            {/* <Gradient01></Gradient01> */}
            <Left>
                <Img2 src='../../Rectangle.png' />
            </Left>
            <Right>

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
                    }}><Header>Sell your <br />NFTs<Span>
                        <Img src='../../circle.svg' />
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
                    <Tagline>Step into the world of music NFTs and
                        immerse yourself in a <br />revolutionary new
                        way to experience and collect music.
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
            </Right>
            <Gradient02></Gradient02>
        </Container>
    )
}

export default Morenfts;