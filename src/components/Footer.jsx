import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaCopyright } from 'react-icons/fa'

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

const SiteBoard = styled.div`
padding-top: 0px;
background-color: #09131B;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: absolute;
width: 100vw;
height: 55vh;
bottom: 0;
/* border-top: 1px solid #07CF9E; */

@media screen and (max-width: 768px){
  height: 70vh;
}
`

const SiteContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
position: relative;
/* border: 1px solid #07CF9E; */
width: 90%;

@media screen and (max-width: 768px){
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
}
`
const SiteName = styled.div`
color: #07CF9E;
font-family: Poppins;
font-size: 5rem;
font-weight: 500;
margin-right: 10rem;
display: flex;

@media screen and (max-width: 768px){
  font-size: 3rem;
  display: flex;
  margin-right: 0rem;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
`
const SiteLinks = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: row;
position: relative;
`
const Link = styled.div`
margin-right: 3rem;

@media screen and (max-width: 768px){
  /* margin-right: 0rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
`
const CopyRight = styled.div`
font-size: 1rem;
font-weight: normal;
margin-top: 4rem;
margin-bottom: 0.5rem;
font-family: Poppins;
color: #7EB1A3;
`
const Brand = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
position: relative;

@media screen and (max-width: 768px){
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
`
const Tag = styled.div`
margin-top: 1rem;
font-size: 1rem;
font-weight: normal;
color: #7EB1A3;
font-family: Poppins;

@media screen and (max-width: 768px){
  font-size: 0.8rem;
  margin-top: 1rem;
  text-align: center;
}`

const SubLinks = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
position: relative;
margin-top: 1rem;

@media screen and (max-width: 768px){
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
`
const SubLink = styled.div`
color: #7EB1A3;
margin-top: 1rem;`

const Linkage = styled.a`
text-decoration: none;
font-family: Poppins;
color: #7EB1A3;
font-weight: normal;`

const Span = styled.span`
margin-left: 10px;


@media screen and (max-width: 768px){
  /* display: none; */
}
`
const Img = styled.img`
height: 30px;
width: 30px;

@media screen and (max-width: 768px){
  height: 20px;
  width: 20px;
}`

const SiteBrand = styled.div`
color: transparent;
background: linear-gradient(90deg, #07CF9E 0%, #07CF9E 100%);
-webkit-background-clip: text;
background-clip: text;

@media screen and (max-width: 768px){
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
}
`
const Footer = () => {
  return (
    <Container>
      <SiteBoard>
        <SiteContainer>
          <Brand>
            <SiteName><SiteBrand>BeatSpire</SiteBrand>
              <Span>
                <Img src='../../circle2.svg' />
              </Span></SiteName>
            <Tag>The worlds first digital
              marketplace <br />
              for crypto music collectibles and <br />musical non-fungible tokens <br />(NFTs).</Tag>
          </Brand>

          <SiteLinks>
            <Link>
              Home
              <SubLinks>
                <SubLink><Linkage href='#section01'>Experiece Music  & <br />NFTs</Linkage></SubLink>
                <SubLink><Linkage href='#section02'>Top NFTs </Linkage></SubLink>
                <SubLink><Linkage href='#section03'>Sell your <br />NFTs</Linkage></SubLink>
                <SubLink><Linkage href='#section04'>Create your <br />NFTs</Linkage></SubLink>
                <SubLink><Linkage href='#section05'>Top Artists</Linkage></SubLink>
              </SubLinks>
            </Link>
            <Link>Artist
              <SubLinks>
                <SubLink><Linkage href='#section01'>Experiece Top <br /> Artists</Linkage></SubLink>
                <SubLink><Linkage href='#section02'>Connect Wallet <br /> to get started</Linkage></SubLink>
                {/* <SubLink><Linkage href='#section03'>Sell your <br />NFTs</Linkage></SubLink>
                <SubLink><Linkage href='#section04'>Create your <br />NFTs</Linkage></SubLink>
                <SubLink><Linkage href='#section05'>Top Artists</Linkage></SubLink> */}
              </SubLinks></Link>
            <Link>Market Place
              <SubLinks>
                <SubLink><Linkage href='#section01'>Place Bid</Linkage></SubLink>
                <SubLink><Linkage href='#section02'>Explore All <br />NFTs </Linkage></SubLink>
                {/* <SubLink><Linkage href='#section03'>Sell your <br />NFTs</Linkage></SubLink>
                <SubLink><Linkage href='#section04'>Create your <br />NFTs</Linkage></SubLink>
                <SubLink><Linkage href='#section05'>Top Artists</Linkage></SubLink> */}
              </SubLinks></Link>
            <Link>Social Good
              <SubLinks>
                <SubLink><Linkage href='#section01'>Let Music Heal <br />you</Linkage></SubLink>
                <SubLink><Linkage href='#section02'>Coming Soon</Linkage></SubLink>
                {/* <SubLink><Linkage href='#section03'>Sell your <br />NFTs</Linkage></SubLink>
                <SubLink><Linkage href='#section04'>Create your <br />NFTs</Linkage></SubLink>
                <SubLink><Linkage href='#section05'>Top Artists</Linkage></SubLink> */}
              </SubLinks></Link>
          </SiteLinks>
        </SiteContainer>
        <CopyRight>Copyright <FaCopyright/> 2023 BeatSpire</CopyRight>
      </SiteBoard>
    </Container>
  )
}

export default Footer