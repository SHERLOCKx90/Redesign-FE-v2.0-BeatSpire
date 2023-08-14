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
flex-direction: column;
position: relative;

@media screen and (max-width: 768px){
    margin-top: 200px;
}
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

@media screen and (max-width: 768px){
    display: none;
}
`
const Header = styled.h1`
z-index: 1000;
color: #FFF;
font-family: Poppins;
font-size: 100px;
font-style: normal;
font-weight: 500;
line-height: 110px; /* 100% */

@media screen and (max-width: 768px){
    font-size: 80px;
    line-height: 80px;
    margin-bottom: 150px;
}
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
margin: 10px 10px;
height: 150px;
width: 400px;
&:hover {
  transform: scale(1.05);
    transition: transform 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
    cursor: pointer;
}

@media screen and (max-width: 768px){
    width: 300px;
    height: 115px;
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
line-height: normal;
text-align: center;`


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

@media screen and (max-width: 768px){
    margin-top: 100px;
    z-index: -1;
}
`

const Gallery = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 0px;
    margin-inline: 50px;
}`

const Morenfts = () => {
    return (
        <Container id='section05'>
            <Gradient01></Gradient01>

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
                }}><Header>Top Artists<Span>
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
                    delay: 1.5,
                }}>
                
            </motion.div>
            <Gallery>
                <motion.div>
                    <Img2 src='../../ArtistCard2.png' />
                    <Img2 src='../../ArtistCard3.png' />
                </motion.div>
                <motion.div>
                    <Img2 src='../../ArtistCard4.png' />
                </motion.div>
            </Gallery>

            <Button>Explore</Button>
            {/* <Gradient02></Gradient02> */}
        </Container>
    )
}

export default Morenfts;