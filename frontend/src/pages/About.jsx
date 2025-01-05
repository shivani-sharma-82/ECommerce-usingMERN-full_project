import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={' Us'}></Title>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, numquam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum numquam sunt eligendi eius repudiandae explicabo, ad incidunt? Exercitationem, nobis.</p>
        <b className='text-[#AF1740]'>Our Mission</b>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores est alias sint ratione amet, repudiandae libero necessitatibus iste suscipit eum.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'Why'} text2={' Choose Us?'}></Title>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-[#AF1740]'>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum fugiat impedit distinctio maiores labore quis.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-[#740938]'>Convenience</b>
          <p className='text-gray-600'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum fugiat impedit distinctio maiores labore quis.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-[#AF1740]'>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum fugiat impedit distinctio maiores labore quis.</p>
        </div>
        
      </div>
      <NewsletterBox></NewsletterBox>
    </div>
  )
}

export default About
