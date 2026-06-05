import React from 'react';
import Render from './Render.jsx';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "tailwindcss";

const App = () => {
  return (
    <div className='App_main text-light'>
         <Render/>
    </div>
  )
}

export default App