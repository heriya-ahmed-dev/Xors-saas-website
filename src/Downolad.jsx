import React from 'react';
import xora from './assets/images/xora.svg';
import afterpay from './assets/images/logos/afterpay.svg';
import amplitude from './assets/images/logos/amplitude.svg';
import drips from './assets/images/logos/drips.svg';
import maze from './assets/images/logos/maze.svg';
import sonas from './assets/images/logos/sonos.svg';
import screen from './assets/images/screen.jpg';


const Downolad = () => {
  return (
    <div>
      <header className=' bg-[#1A2658]'>
        <section className='d-flex jusify-content-between py-[90px]'>
      <section className='m-5' >
           <div>
            <img src={xora} className='m-5'/>
           </div>
           <div>
            <p className='text-[25px] font-[400]'>Try it now for free on iOS, Android, PC, Web <br/>- whatever your flavor, we've got you covered.</p>
           </div>
      </section>
      <section className='d-none d-md-block w-[800px] border-[1px] p-5 rounded-5 border-[#324679]'>
             <div>
                <img src={screen} className='w-[650px]'/>
             </div>
      </section>
      </section>
               <section className='d-none d-md-flex jusify-content-between gap-[60px] px-[150px] py-[50px]'>
           <img src={afterpay}/>
           <img src={amplitude}/>
           <img src={sonas}/>
           <img src={maze}/>
           <img src={drips}/>
      </section>
    </header>
   
    </div>
  )
}

export default Downolad