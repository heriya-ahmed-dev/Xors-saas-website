import React from 'react';
import jessica from './assets/images/testimonials/jessica-saunders.png';
import alica from './assets/images/testimonials/alicia-barker.png';
import becky from './assets/images/testimonials/becky-snider.png';
import jim from './assets/images/testimonials/jim-bradley.png';
import mark from './assets/images/testimonials/mark-erixon.png';
import melanie from './assets/images/testimonials/melanie-hurst.png'
import './components/css/person.css'
const Persons = () => {
  return (
    <main className='bg-[#080D27] person_box'>
    <header className='d-row d-md-flex jusify-content- between ms-5 mr-5 p-3 person_box'>

        <div className='w-[100%]'>
            <p className='fs-6 text-[#C8EA80] fw-bold ms-5 mb-0  mt-5 pt-5' >WALL OF LOVE</p>
            <p className='text-[45px] font-[550]'>Words from our<br/> fans</p>
        </div>
        <div className='py-[90px]'>
            <p className='fs-4 px-3'>Xora's customer support is second to none! They’re like my tech superheroes, always there when I need them.</p>
            <div>
                
                <div>
                    <p className='text-[#2EF2FF] text-[20px] font-[500] ps-3 '>Jessica Saunders</p>
                    <p className='text-[#24335D] ps-3'>Globalnomads</p>
                </div>
                <img src={jessica} className='person_img'/>
            </div>
      
        </div>
             <div className='py-[90px] person_box'>
            <p className='fs-4 px-3'>The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.</p>
            <div className='d-flex gap-2 pt-5'>
                 <img src={alica} className='person_img'/>
                <div>
                    <p className='text-[#2EF2FF] text-[20px] font-[500] ps-3'>Alicia Barker</p>
                    <p className='text-[#24335D] ps-3'>Cyberleap</p>
                </div>
            </div>
        </div>
       
    </header>
    <section>
         <header className='d-row d-md-flex jusify-content- between ms-5 mr-5 p-3 person_box'>
        <div className='w-[100%]'>
            
        </div>
        <div className='py-[90px]'>
            <p className='fs-4 px-3'>I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.</p>
            <div>
                
                <div>
                    <p className='text-[#2EF2FF] text-[20px] font-[500] ps-3 '>Mark Erixon</p>
                    <p className='text-[#24335D] ps-3'>Vid capital intl</p>
                </div>
                <img src={mark} className='person_img'/>
            </div>
      
        </div>
             <div className='py-[90px] person_box'>
            <p className='fs-4 px-3'>Switched to Xora last month, and I'm already seeing results. Best decision for our team!</p>
            <div className='d-flex gap-2 pt-5'>
                <img src={becky} className='person_img'/>
                <div>
                    <p className='text-[#2EF2FF] text-[20px] font-[500] ps-3'>Becky Snider</p>
                    <p className='text-[#24335D] ps-3'>Floclips</p>
                </div>
                
            </div>
        </div>
       
    </header>
    </section>
       <header className='d-row d-md-flex jusify-content- between ms-5 mr-5 p-3 person_box'>

        <div className='w-[100%]'>
            
        </div>
        <div className='py-[90px]'>
            <p className='fs-4 px-3'>Adopting this software was a breeze. It's made everyday tasks so much simpler.</p>
            <div>
                
                <div>
                    <p className='text-[#2EF2FF] text-[20px] font-[500] ps-3 '>Melanie Hurst</p>
                    <p className='text-[#24335D] ps-3'>Cyberleap</p>
                </div>
                <img src={melanie} className='person_img'/>
            </div>
      
        </div>
             <div className='py-[90px] person_box'>
            <p className='fs-4 px-3'>The efficiency boost is undeniable. This platform has transformed our workflow, forever.
</p>
            <div className='d-flex gap-2 pt-5'>
                <img src={jim} className='person_img'/>
                <div>
                    <p className='text-[#2EF2FF] text-[20px] font-[500] ps-3'>Jim Bradley</p>
                    <p className='text-[#24335D] ps-3'>Vid capital intl</p>
                </div>
                
            </div>
        </div>
       
    </header>
    </main>
  )
}

export default Persons