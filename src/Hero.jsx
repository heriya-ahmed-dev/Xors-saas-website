import React from 'react'
import favicon from '../public/favicon.ico';
import HeroImg from '../public/images/hero.png'
const Hero = () => {
  return (
    <div className='bg-[#080d27] h-dvh text-light overflow-x-hidden '>
        <section className='flex justify-content-around list-unstyled py-[25px] text-light font-[700] fs-5'>
           <li>FEATURES</li>
             <li className='text-[#3C52D9] fw-bold '>.</li>
           <li>PRICING</li>
        <div className='flex'>
          <img src={favicon} className='w-[70px]  px-[10px]'/>
          <h2 className='p-[5px] font-[1500] fs-2'>Xaas</h2>
        </div>
           <li>FAC</li>
           <li className='text-[#3C52D9] fw-bold '>.</li>
           <li>DOWNLOAD</li>
       </section>
       <section className='flex mt-0 pt-0 p-3'>
        <section className='w-[400px]'>
          <div>
            <p className='fs-6 text-[#C8EA80] fw-bold ms-5 mb-0  mt-5 pt-5' >VIDEO EDITING</p>
          </div>
          <p className='text-[80px] font-[820] ps-3'>AMAZINGLY SIMPLE</p>
          <p className='text-[26px] ps-5'>We designed XORA AI Video Editor to be an easy to use ,quick to learn,and surprisingly Powerful.</p>
          <div>
            <button>#</button>
          </div>
       </section>
       <div className='shrink-0  mt-[-20px]'>
          <img src={HeroImg} className='w-[830px]'/>
       </div>
       </section>

    </div>
  )
}

export default Hero