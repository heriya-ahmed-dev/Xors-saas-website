import React from 'react'
import Hero from './Hero.jsx';
import Features from './Features.jsx';
import Pricing from './Pricing.jsx';
import Plan from './Plan.jsx';
import Fac from './Fac.jsx';
import Persons from './Persons.jsx';
import Downolad from './Downolad.jsx';
import Footer from './Footer.jsx';
import { Route , Routes } from 'react-router-dom';
const Render = () => {
  return (
      <>
        <Hero/>
        <Features/>
        <Pricing/>
        <Plan/>
        <Fac/>
        <Persons/>
        <Downolad/>
        <Downolad/>
        <Footer/>
     </>
  )
}

export default Render;