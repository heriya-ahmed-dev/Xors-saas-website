import React from 'react';
import favicon from './assets/favicon.ico';
import HeroImg from './assets/images/hero.png'
import Button from './components/Button.jsx';
import zap from './assets/zap.svg';
import './components/css/Hero.css';
import magic from './assets/images/magic.svg'
import side1 from './assets/images/socials/x.svg'
const Hero = () => {
  return (
    <div className='bg-[#080d27] text-light overflow-x-hidden h-[90]'>
        <section className='d-none d-md-flex  mg-fluid items-center justify-around list-unstyled py-[25px] text-light font-[700] fs-5'>
           <li className='header '>FEATURES</li>
             <li className='text-[#3C52D9] fw-bold '>.</li>
           <li className='header'>PRICING</li>
        <div className='flex'>
          <img src={favicon} className='w-[70px]  px-[10px]'/>
          <h2 className='p-[5px] font-[1500] fs-2'>Xaas</h2>
        </div>
           <li className='header'>FAC</li>
           <li className='text-[#3C52D9] fw-bold '>.</li>
           <li className='header'>DOWNLOAD</li>
           <div>
              
           </div>
       </section>
        <div className='flex items-center justify-content-center d-lg-none d-md-none mt-5'>
          <div className='flex'>
          <img src={favicon} className='w-[70px]  px-[10px]'/>
          <h2 className='p-[5px] font-[1500] fs-2'>Xaas</h2>
          </div>
          <div className='px-[50px]'>
            <img src={magic} />
          </div>
        </div>
       <section className='flex mt-0 pt-0 p-3 py-[20px] hero_container'>
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