"use client"

import Bloglist from '@/Components/Bloglist';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React from 'react';

const Home = () => {
  return (
    <>
      <Header/>
      <Bloglist/>
      <Footer/>
    </>
  )
}

export default Home