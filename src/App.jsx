import React from 'react'
import styled from 'styled-components';
import MainLayout from './Layout/MainLayout';
import Hero from './components/Hero';
import Topnfts from './components/Topnfts';
const Container = styled.div`
`
const App = () => {
  return (
    <MainLayout>
      <Hero />
      <Topnfts />
    </MainLayout>
  );
}

export default App