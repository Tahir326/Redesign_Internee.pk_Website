import React from 'react'
import background from '../assets/img/hero/h1_hero.jpg'


function Home() {
 const backgroundImageUrl = background;
  return (
    <>
    
    <div className="bg-cover bg-center h-screen relative ">
      <img src={backgroundImageUrl} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover"/>

   
    <div className='absolute top-[10%] left-[4.75%] '>
        <p className='py-5 text-3xl font-semibold text-[#28395A]'>Are you looking for your dream Internship ?</p>
        <h1 className='text-[#28395A] text-8xl font-bold' >Join</h1>
        <h1 className='text-[#28395A] text-8xl font-bold'>Internee.pk now..!</h1>
        <div className='flex items-center'>
        <p className='py-5 text-[#28395A] text-3xl font-semibold ' >Pakistan's Virtual Internship Platform Powered By </p>
        <div className='hover:scale-110 mx-2'> <a href="https://techviochats.com/" target="_blank" rel="noopener noreferrer" className='text-[#de7be0] text-3xl font-semibold border-[#7A0169] hover:border-b hover:transition-transform hover:ease-out duration-200' >TechvioChats </a></div>
        </div>
        <button className='bg-transparent rounded-full p-3 border-2 border-black text-[#28395A] font-semibold md:hover:shadow-xl md:hover:shadow-[#6e7e9e]'>
            Browse Internship
        </button>
    </div>
    </div>

      
    </>
  )
}

export default Home
