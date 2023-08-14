import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaBitcoin, FaUpload, FaList } from 'react-icons/fa'

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
    margin-top: 500px;
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
top:300px;
left:700px;
/* z-index: 1; */

@media screen and (max-width: 768px){
    left: 10px;
    height: 100px;
    width: 100px;
    filter: blur(200px);
}
`

// blue gradient
const Gradient02 = styled.div`
position: absolute;
width: 610px;
height: 489px;
flex-shrink: 0;
top: 900px;
background: rgba(85, 71, 253, 0.90);
filter: blur(250px);
right:600px;
/* z-index: 1; */

@media screen and (max-width: 768px){
    display: none;
`
const Header = styled.h1`
z-index: 1000;
color: #FFF;
font-family: Poppins;
font-size: 100px;
font-style: normal;
font-weight: 500;
line-height: 110px;
margin-top:20px;

@media screen and (max-width: 768px){
    font-size: 80px;
    line-height: 80px;
    text-align: center;
    margin-bottom: 100px;
}
`
const Span = styled.span`
margin-left: 10px;
`
const Img = styled.img`
z-index: 1000;
`
const Para = styled.p`
color: black;
font-family: Poppins;

@media screen and (max-width: 768px){
    font-size: 30px;
    /* text-align: center; */
}
`

const Head = styled.h2`
color: black;
font-family: Poppins;
font-size: 70px;
/* font-style: normal; */
font-weight: 800;

@media screen and (max-width: 768px){
    font-size: 20px;    
}
`


const Morenfts = () => {
    return (
        <Container id='section04'>
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
                }}><Header>Create & Sell Instantly<Span>
                    <Img src='../../circle.svg' />
                </Span>
                </Header>
                <VerticalTimeline lineColor='#4ECAB4'>
                    <VerticalTimelineElement className='vertical-timeline-element--create-nfts' iconStyle={{ background: 'black', color: '#62FFD9' }}
                        icon={<FaBitcoin />}
                        date='Step-01'>
                        <Head>Set up your Wallet</Head>
                        <Para>After setting up the wallet, connect the wallet to the platform and complete the verification process to get started.</Para>


                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element--create-nfts' iconStyle={{ background: 'black', color: '#62FFD9' }}
                        icon={<FaUpload />}
                        date='Step-02'>
                        <Head>Upload Sound Clips or songs</Head>
                        <Para>After uploading your masterpiece, lets us make it unique.</Para>


                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element--create-nfts' iconStyle={{ background: 'black', color: '#62FFD9' }}
                        icon={<FaList />}
                        date='Step-03'>
                        <Head>List them for sale</Head>
                        <Para>Choose between auctions. fixed-price listings, and declining. price listings. You choose how you want.</Para>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </motion.div>
            <Gradient02></Gradient02>
        </Container>
    )
}

export default Morenfts;