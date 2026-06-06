import React ,{useState} from 'react';
import './components/css/pricing.css'
import bgfirst from './components/css/img/bg-outlines-fill.png';
const Pricing = () => {
     const [Active,setActive] = useState('monthly')
  return (
    
       <div className='py-[50px]'>
            <div className='pricing text-center'> 
            <p className='text-center text-[45px] font-[700]'>Flexible Pricing for<br/>teams of all sizes</p>
            </div>
            <div className='text-center '>
              
              
               <button className='w-[350px] border-[1px] h-[85px] m-5 rounded-4'>
                    <div className='flex justify-content-between m-2'>
                       
                        <button
                          className={`w-[160px] h-[70px] rounded-4 fs-5 font-[700] ${
                             Active === "monthly" ? "active" : ""
                               }`}
                       onClick={() => setActive("monthly")}
                                > MONTHLY</button>

                       <button className={`w-[160px]  h-[70px] rounded-4 fs-5 font-[700] ${ 
                         Active === "Annual" ? "active" : " "}` }
                         onClick = {()=> setActive ("Annual")}>ANNUAL</button>
                    </div>
               </button>


            </div>
       </div>

  )
}

export default Pricing;

