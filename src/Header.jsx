import React from 'react'
import favicon from './assets/favicon.ico';
import magic from './assets/images/magic.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='list-unstyled'>
          <section className='d-none d-md-flex  mg-fluid items-center justify-around list-unstyled py-[25px] text-light font-[700] fs-5'>
           <Link to='features' className='header ' className='text-decoration-none'>FEATURES</Link>
             <li className='text-[#3C52D9] fw-bold '>.</li>
           <Link to='pricing' className='header text-decoration-none'>PRICING</Link>
        <div className='flex'>
          <img src={favicon} className='w-[70px]  px-[10px]'/>
          <h2 className='p-[5px] font-[1500] fs-2'>Xaas</h2>
        </div>
           <Link to='fac' className='header text-decoration-none'>FAC</Link>
           <li className='text-[#3C52D9] fw-bold '>.</li>
           <Link to= 'download' className='header text-decoration-none'>DOWNLOAD</Link>
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
    </div>
  )
}

export default Header