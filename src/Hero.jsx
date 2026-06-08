import React from 'react';
import HeroImg from './assets/images/hero.png'
import Button from './components/Button.jsx';
import zap from './assets/zap.svg';
import './components/css/Hero.css';
import side1 from './assets/images/socials/x.svg';
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div className='bg-[#080d27] text-light overflow-x-hidden pt-[130px]'>
       <section className='flex mt-0 pt-0 p-3 hero_container'>
        <section className='w-[400px]'>
          <div>
            <p className='fs-6 text-[#C8EA80] fw-bold ms-5 mb-0  mt-5 pt-5' >VIDEO EDITING</p>
          </div>
          <p className='text-[50px] font-[800] md:text-[75px]'>AMAZINGLY SIMPLE</p>
          <p className='text-[26px] ps-5'>We designed XORA AI Video Editor to be an easy to use ,quick to learn,and surprisingly Powerful.</p>
          <div>
               <Button text='TRY IT NOW'  
                      icon={zap}
               />       
          </div>
       </section>
       <div className='shrink-0  mt-[-20px]'>
          <img src={HeroImg} className='w-[830px]'/>
       </div>
       </section>

    </div>
  )
}

export default Hero;