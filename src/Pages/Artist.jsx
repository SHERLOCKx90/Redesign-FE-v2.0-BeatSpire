import React from 'react'
import MainLayout from '../Layout/MainLayout'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Footer from '../Components/Footer'

const Container = styled.div`
color: white;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
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
font-weight: 700;
line-height: 1.2;
margin-bottom: 20px;
text-align: left;
font-family: Poppins;
`

const Tag = styled.p`
font-family: Poppins;`

const Card = styled.div`
height: 400px;
width: 60vw;
padding: 50px;
background: rgba(255, 255, 255, 0.05);
border-radius: 20px;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
/* position: relative; */
z-index: 2;
overflow: hidden;
`

const Button = styled.button`
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
  background-color:black;
  cursor: pointer;
  transform: scale(1.05);
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  color: white;
}
`

const Left = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
/* width: 100%; */
/* position: absolute; */
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
width: 400px;
height: 400px;
object-fit: contain;
/* position: absolute; */
/* right: 300px; */
/* top: 600px; */
&:hover {
  transform: scale(1.1);
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
`

const Artist = () => {
  return (
    <MainLayout>
      <Gradient01></Gradient01>
      <Container id='artist-01'>
        <Card>
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
              }}>
              <Header>Artists</Header>
              <Tag>Step into the world of music NFTs and immerse yourself in a <br />
                Revolutionary new way to experience and collect music.</Tag>
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
              }}>
              <Button>
                Connect Wallet to get Started
              </Button>
            </motion.div>
          </Left>
          <Right>
            <Img src='../../musician.svg' />
          </Right>
        </Card>
      </Container>
      <Footer />
      <Gradient02></Gradient02>
    </MainLayout>
  )
}

export default Artist