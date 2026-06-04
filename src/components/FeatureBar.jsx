import React from 'react';
import detail1 from '../assets/images/detail-1.png';
import detail2 from '../assets/images/detail-2.png';
import detail3 from '../assets/images/detail-3.png';
import detail4 from '../assets/images/detail-3.png'

const FeatureBar = () => {
  return (
    <div className='d-flex justify-content-center'>
    <div className='d-flex justify-content-around mb-4 feature_box w-[1100px] h-[250px] pt-5'>
        <div>
            <img src={detail1} className='w-[60px] h-[60px] '/>
            <p className='fs-5 fw-bold pt-3'>AI automated <br/>video editing</p>
        </div>


        <div>
            <img src={detail2} className='w-[60px] h-[60px]'/>
            <p className='fs-5 fw-bold  pt-3'>Collaborate <br/> with your team</p>
        </div>


        <div>
            <img src={detail3} className='w-[60px] h-[60px]'/>
            <p className='fs-5 fw-bold  pt-3'>Ultra fast <br/> cloud-engine</p>
        </div>

    
         <div>
            <img src={detail4} className='w-[60px] h-[60px]'/>
            <p className='fs-5 fw-bold  pt-3'>24 / 7 Customer <br/> support</p>
        </div>
     

    </div>
    </div>
  )
}

export default FeatureBar