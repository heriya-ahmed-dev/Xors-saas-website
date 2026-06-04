import React from 'react'
import './css/button.css'
const Button = ({text,before, after, icon}) => {

  return (
    <div
     className='button mt-5'>
          <img src={before} className='side'/>
                 <p className='pt-3 ps-5'>{text}</p>
         <img src={icon} alt='Image' className='zora'/>

    </div>
  )
}

export default Button;