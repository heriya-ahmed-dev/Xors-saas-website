import React from 'react';
import RenderEffect from './RenderEffect';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "tailwindcss";
import { BrowserRouter } from 'react-router-dom';
import Header from './Header.jsx';

const App = () => {
  return (
    <div className='App_main text-light'>
         <Header/>
         <RenderEffect/>
    </div>
  )
}

export default App