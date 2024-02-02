import React from 'react'
import background from '../assets/img/hero/h1_hero.jpg'
import { Link } from 'react-scroll';

function Home() {
 const backgroundImageUrl = background;
  return (
    <>
    
    <div className="bg-cover bg-center h-screen relative overflow-x-hidden ">
      <img src={backgroundImageUrl} alt="Background" className="absolute blur-[0.75px]    top-0 left-0 md:w-full md:h-full w-screen h-[76%] md:object-cover bg-cover bg-center"/>

   
    <div className='absolute top-[10%] left-[4.75%] '>
        <p className='md:py-12 py-8 md:text-3xl text-base ml-2 -mt-16 md:-mt-0 font-semibold text-[#28395A]'>Are you looking for your <br className='md:hidden' /> dream Internship ?</p>
        <h1 className='text-[#28395A]  md:text-8xl text-5xl font-bold' >Join</h1>
        <h1 className='text-[#28395A]  md:text-8xl text-5xl font-bold'>Internee.pk now..!</h1>
        <div className='flex items-center'>
        <p className='md:py-12 py-8 text-[#28395A] md:text-3xl text-base font-semibold ' >Pakistan's Virtual <br className='md:hidden' /> Internship  Platform <br className='md:hidden' />Powered By <a href="https://techviochats.com/" target="_blank" rel="noopener noreferrer" className='text-[#de7be0] md:hidden md:text-3xl text-lg font-semibold border-[#7A0169] hover:border-b hover:transition-transform hover:ease-out duration-200' >TechvioChats </a> </p>
        <div className='hover:scale-110 md:mx-2 hidden md:block'> <a href="https://techviochats.com/" target="_blank" rel="noopener noreferrer" className='text-[#de7be0] md:text-3xl text-lg font-semibold border-[#7A0169] hover:border-b hover:transition-transform hover:ease-out duration-200' >TechvioChats </a></div>
        </div>
        <button className='bg-transparent rounded-full md:p-3 p-2 border-2 border-black text-[#28395A] font-semibold md:hover:shadow-xl md:hover:shadow-[#6e7e9e]'>
            <Link to='internship' smooth duration={800} >Browse Internship</Link>
        </button>
    </div>
    </div>

      
    </>
  )
}

export default Home
