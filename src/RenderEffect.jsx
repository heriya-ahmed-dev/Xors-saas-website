import React from 'react'
import Render from './Render.jsx'
import { Route,Routes } from 'react-router-dom'
import Downolad from './Downolad.jsx'
import Pricing from './Pricing.jsx'
import Features from './Features.jsx';
import Fac from './Fac.jsx'
const RenderEffect = () => {
  return (
    <Routes>
        <Route path='/' element={<Render/>}/>
        <Route path='/download' element={<Downolad/>} />
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/fac' element={<Fac/>}/>

    </Routes>
  )
}

export default RenderEffect