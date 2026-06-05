import React from 'react'
import Plan_box from './components/Plan_box';
import plan1 from './assets/images/plan-1.png';
import plan2 from './assets/images/plan-2.png';
import plan3 from './assets/images/plan-3.png';
import Button from './components/button.jsx';
import circle from './assets/images/circle.svg';
import triangle from './assets/images/triangle.svg';
import hexagon from './assets/images/hexagon.svg';
import './components/css/plan_box.css';

const Plan = () => {
  return (
    <div className='d-flex justify-content-center'>
        <div className='plan_box'>
            <Plan_box
              image={plan1}
              title='CORE'
              price='$12'
              desc='Best for Solo Creators'
              l1 = '100MB cloud storage'
              l2 = '100+ prompt templates'
              l3 = '5 projects'
              l4 = '24/7 support'

            
            />
            <Button 
               text= 'GET STARTED'
               icon ={circle}
            />
        </div>

                          <div className='plan_middle_box'>
                               <Plan_box
                                     image={plan2}
                                     title='OVERDRIVE'
                                     price='$59'
                                     desc='Most popular plan'
                                     l1 = 'All Starter features'
                                     l2 = '1TB additional storage '
                                     l3 = 'Unlimitted projects'
                                     l4 = 'Analytics'       
                                  />
                                  <Button 
                                    text= 'GET STARTED'
                                    icon ={triangle}
                                   />
                          </div>


               <div className='plan_box '>
            <Plan_box
              image={plan3}
              title='TEAM'
              price='$29'
              desc='Exclusively for teams'
              l1 = 'All overide features'
              l2 = '10TB additional storage'
              l3 = '50% off per month'
              l4 = 'Real-Time collaboration'

            
            />
            <Button 
               text= 'GET STARTED'
               icon ={hexagon}
            />
        </div>
    </div>
  )
}

export default Plan