import React from 'react'
import discord from './assets/images/socials/discord.svg';
import instagram from './assets/images/socials/instagram.svg';
import threads from './assets/images/socials/threads.svg';
import x from './assets/images/socials/x.svg';

const Footer = () => {
  return (
    <div className='d-row md:d-flex justify-content-around p-5 bg-[#080D27]'>
        <div>
        <div>
            <p className='text-center '>Copyright, Js Mastery</p>
        </div>
        <div className='flex justify-center gap-[10px]'>
            <p>Privacy Policy</p>
            <p className='font-[800] text-[#2EF2FF]' >.</p>
            <p>Terms of Use</p>
        </div>
        </div>
        <div className='d-flex  justify-center gap-[20px]'>
            <div className='w-[35px] border-[1px] rounded-circle border-[#2EF2FF]'>
            <img src={x} className='w-[25px] pt-2 ps-2'/>
            </div>
            <div className='w-[35px] border-[1px] rounded-circle border-[#2EF2FF]'>
            <img src={threads} className='w-[25px] pt-2 ps-2'/>
            </div>
            <div className='w-[35px] border-[1px] rounded-circle border-[#2EF2FF]'>
            <img src={instagram} className='w-[25px] pt-2 ps-2'/>
            </div>
            <div className='w-[35px] border-[1px] rounded-circle border-[#2EF2FF]'>
            <img src={discord} className='w-[25px] pt-2 ps-2'/>
            </div>
        </div>
    </div>
  )
}

export default Footer