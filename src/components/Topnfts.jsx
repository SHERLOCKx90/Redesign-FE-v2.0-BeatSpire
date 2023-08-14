import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
color: white;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
/* overflow: hidden; */
`

const Header = styled.h1`
z-index: 2;
color: #FFF;
font-family: Poppins;
font-size: 100px;
font-style: normal;
font-weight: 500;
line-height: 100px; /* 100% */

@media screen and (max-width: 768px){
    text-align: center;
    font-size: 70px;
    line-height: 80px;
}
`
const Span = styled.span`
margin-left: 10px;
`
const Img = styled.img`
height: max-content;
width: max-content;`

const Img2 = styled.img`
height: 100%;
filter: blur(10px);
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

@media screen and (max-width: 768px){
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    margin-top: 20px;
}
`
const Left = styled.div`
/* border:1px solid white; */
position: absolute;
z-index: 900;`

const Right = styled.div`
/* z-index;10; */
/* opacity: 0.5; */
/* border:1px solid white; */
/* object-fit: contain; */
height: 1920px;
width: 1080px;
display: flex;
justify-content: center;

@media screen and (max-width: 768px){
   display: none;
}

`

const Gradient01 = styled.div`
background: rgba(71, 253, 209, 0.71);
filter: blur(300px);
height: 400px;
width: 400px;
display: inline-flex;
padding: 250px 0px 0px 201px;
justify-content: flex-end;
align-items: center;
position: absolute;
top:200px;
left:20px;
z-index: 1;

@media screen and (max-width: 768px){
    /* display: none; */
    height: 100px;
    width: 100px;
    filter: blur(200px);
}
`


const Topnfts = () => {
    return (
        <Container id='section01'>
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
                    }}><Header>Experience Music <br />
                        and NFTs like <br />
                        Never before<Span>
                            <Img src='../../circle.svg' />
                        </Span>
                    </Header>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        // scale: 0,
                        y:-100,
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



            </Left>
            <Right>
                <Img2 src='../../banner.png' />
            </Right>

        </Container>
    )
}

export default Topnfts