import React from 'react'
import FeatureBox from './components/FeatureBox.jsx';
import feature1 from './assets/images/feature-1.png';
import feature2 from './assets/images/feature-2.png';
import Button from './components/button.jsx';
import star from './assets/images/magictouch.svg';
import FeatureBar from './components/FeatureBar.jsx';
import docs from './assets/images/docs.svg'
import './components/css/Feature.css'
const Features = () => {
  return (
    <section>
    <div className='flex flex-col md:flex-row  justify-center'> 
        <div className='w-[400px] md:w-[550px] m-5 md:m-0 feature_box'>
          <FeatureBox
            image = {feature1}
            header='EASY INTEGRATION'
            title = 'Work smarter not harder'
            desc="With Xora, tedious tasks are history.Automation and smart processes bring your productivity to new heights. It's like having an extra cup of coffee, but without the jitters."
           />
             <Button 
             text='WATCH THE DEMO'
             icon = {star}
             />
       </div>

               <div className='w-[400px] md:w-[550px] m-5 md:m-0 feature_box'>
          <FeatureBox
            image = {feature1}
            header='SECURE & TRUSTWORTHY'
            title = 'Sleep easy, we got your back'
            desc="Your data security is our priority. With state-of-the-art encryption and robust privacy controls, Xora helps keeps your information secure and locked up tighter than Fort Knox."
           />
             <Button 
             text='READ THE DOCS'
             icon = {docs}
             />
       </div>
 
    </div>
      <FeatureBar/>
    </section>
  )
}

export default Features