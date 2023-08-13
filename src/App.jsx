import React from 'react'
import styled from 'styled-components';
import MainLayout from './Layout/MainLayout';
import Hero from './components/Hero';
import Topnfts from './components/Topnfts';
import Morenfts from './components/Morenfts';
import Sellnfts from './components/Sellnfts';
import Createnfts from './components/Createnfts';
import Topartists from './components/Topartists';
import Footer from './components/Footer';

const App = () => {
  return (
    <MainLayout>
      <Hero />
      <Topnfts />
      <Morenfts />
      <Sellnfts />
      <Createnfts />
      <Topartists />
      <Footer />
    </MainLayout>
  );
}

export default App