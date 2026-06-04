import React from 'react';
import Button from './button';

const FeatureBox = ({image,header,title,desc}) => {
  return (
    <div className='p-[30px] '>
          <img src={image} className='w-[100px] h-[100px] '/>
          <p className='fs-6 text-[#C8EA80] fw-bold ms-5 mb-0 mt-5 pt-2'>{header}</p>
          <h1 className='text-[25px] pb-3'>{title}</h1>
          <p className='text-[20px] pb-4'>{desc}</p>

    </div>
  )
}

export default FeatureBox;