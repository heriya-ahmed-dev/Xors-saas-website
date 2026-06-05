import React from 'react';


const Plan_box = ({image,title,price,desc,l1,l2,l3,l4,int}) => {
  return (
    <div>
         <div>
            <img src={image} className='w-[90px] h-[90px] py-[-30px] '/>
         </div>
        <div>
          <button className='w-[110px] h-[30px] rounded-pill border-[2px] m-2 fs-6 font-[600] font-monospace border-[#2EF2FF] text-[#2EF2FF]'>
            {title}
          </button>
        </div>
        <p className='text-[70px] font-[600]'>{price}</p>
        <p className='fs-4 font-[500]'>{desc}</p>
        <div>
          <li>{l1}</li>
          <li>{l2}</li>
          <li>{l3}</li>
          <li>{l4}</li>
        </div>

    </div>
  )
}

export default Plan_box