import React, { Children } from 'react'
import Navbar from '../components/Navbar'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: black;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: scroll;
    color: black;
    /* background-color: white;  */
    scrollbar-width: none;
    margin: 0px;
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
  }`
const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    </>

  )
}

export default MainLayout