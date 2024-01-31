import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-scroll";


function Navbar() {
  return (
    <>

      
      <nav name="home"  className='flex flex-row justify-around items-center px-3 py-4 sticky bg-[#EAEDFF]'>
            <div>
                <img className='h-auto w-64 p-4' src={logo} alt="LOGO" />
            </div>
        
            <ul className='list-none flex flex-row justify-center items-center mr-[10%] '>
                <li className='mx-4 text-2xl text-[#7A0169] font-bold  cursor-pointer hover:scale-110 duration-200 hover:border-b-2 border-[#7A0169]'><Link to='home' smooth duration={800}>HOME</Link></li>
                <li className='mx-4 text-2xl cursor-pointer hover:scale-110 duration-200 hover:border-b-2 border-[#7A0169]'><Link to='about' smooth duration={800}>About</Link></li>
                <li className='mx-4 text-2xl cursor-pointer hover:scale-110 duration-200 hover:border-b-2 border-[#7A0169]'><Link to='internship' smooth duration={800}>Internship</Link></li>
                <li className='mx-4 text-2xl cursor-pointer hover:scale-110 duration-200 hover:border-b-2 border-[#7A0169]' ><Link to='contact' smooth duration={800}>Contact</Link></li>

                <div className='relative mx-5 text-2xl'>
                    <li className='cursor-pointer hover:scale-110 duration-200 hover:border-b-2 border-[#7A0169]'>LMS</li>
                    
                </div>
                <div className='absolute text-sm mb-[1.5rem] ml-[24.75%] cursor-pointer  hover:scale-100 ' ><li >NEW</li></div>

                <div className='relative  mx-5 text-2xl'>
                    <li className='cursor-pointer hover:scale-110 duration-200 hover:border-b-2 border-[#7A0169]' >Job Portal</li>
                    
                </div>
                <div className='absolute text-sm mb-[1.75rem] ml-[47.5%] cursor-pointer  hover:scale-100' ><li >Comming Soon</li></div>


            </ul>

            <div className=' ml-8'>
                <button className='bg-[#F6C9F7] rounded-full p-4'>
                    Internee Portal
                </button>
            </div>

      </nav>

    </>
  )
}

export default Navbar
