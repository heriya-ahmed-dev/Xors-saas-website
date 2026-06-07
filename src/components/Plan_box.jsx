import React from 'react';
import check from '../assets/images/check.png'

const Plan_box = ({image,title,price,desc,l1,l2,l3,l4,int}) => {
  return (
    <div >
         <div className='px-[130px]'>
            <img src={image} className='w-[90px] h-[90px] py-[-30px] '/>
         </div>
        <div className='px-[110px]'>
          <button className='w-[120px] h-[30px] rounded-pill border-[2px] m-2 fs-6 font-[600] font-monospace border-[#2EF2FF] text-[#2EF2FF] '>
            {title}
          </button>
        </div>
        <p className='text-[70px] font-[600] px-[120px]'>{price}</p>
        <p className='fs-4 font-[500] px-[55px] '>{desc}</p>
        <div>
          <div className='d-flex mg-fluid ms-5 my-[4px] gap-[10px]'>
            <img src={check} className='w-[50px]'/>
          <li className='mt-2'>{l1}</li>
          </div>
          <div className='d-flex ms-5 my-[4px] gap-[10px]'>
            <img src={check} className='w-[50px]'/>
          <li className='mt-2'>{l2}</li>
          </div>
          <div className='d-flex ms-5 my-[4px] gap-[10px]'>
            <img src={check} className='w-[50px]'/>
          <li className='mt-2'>{l3}</li>
          </div>
          <div className='d-flex ms-5 my-[4px] gap-[10px]'>
            <img src={check} className='w-[50px]'/>
          <li className='mt-2'>{l4}</li>
          </div>
        </div>

    </div>
  )
}

export default Plan_box