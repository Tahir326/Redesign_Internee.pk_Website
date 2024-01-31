import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { TfiWorld } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-scroll";

function Footer() {

    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      // Here you would typically send the email to your server or email service
      console.log('Email submitted:', email);
    };

  return (
    <>
    <div name="contact" className='bg-[#F0F8FF] flex flex-row justify-around items-center mt-5 p-6 '>
        <div className='mt-5'>
            <div className=' h-fit w-56'><img  src={logo} alt="" /></div>
            <div className='flex ml-7 w-fit mt-2'>
                <TfiWorld className='mt-1.5 h-5 w-5 ' />
                <div className='ml-3 mt-0.5'><a  href="http://www.internee.pk" target="_blank" rel="noopener noreferrer">www.internee.pk</a></div>
            </div>
            <div className='flex ml-7 w-fit mt-4'>
                <IoCallOutline className='mt-1 h-5 w-5' />
                <div className='ml-3'>
                    <p>+92 345 3191638</p>
                    <p>+92 349 2861021</p>

                    
                </div>
            </div>
            <div className='flex ml-7 w-fit mt-4'>
                <IoMailOutline className='mt-1 h-5 w-5' />
                <div className='ml-3 mt-0.5'><a  href="mailto:info@internee.pk " target="_blank" rel="noopener noreferrer">info@internee.pk</a></div>
            </div>


        </div>

        <div className='mt-16'>
            <h2 className='text-xl font-bold mb-1.5'>Company</h2>
            <ul className='list-none'>
            <li className='mx-4 text-lg  cursor-pointer '><Link to='home' smooth duration={800}>HOME</Link></li>
                <li className='mx-4 text-lg cursor-pointer '><Link to='about' smooth duration={800}>About</Link></li>
                <li className='mx-4 text-lg cursor-pointer '><Link to='internship' smooth duration={800}>Internship</Link></li>
                <li className='mx-4 text-lg cursor-pointer ' ><Link to='contact' smooth duration={800}>Contact</Link></li>


            </ul>

        </div>

        <div className='mt-12'>
            <h2 className='text-xl font-bold mb-1.5'>Resources</h2>
            <ul className='list-none'>
            <li className='mx-2 text-lg  cursor-pointer '>Discord Server</li>
                <li className='mx-2 text-lg cursor-pointer '>Blog</li>
                <li className='mx-2 text-lg cursor-pointer '>Podcast</li>



            </ul>

        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-blue-100 rounded-lg shadow mt-5">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Get Updates About Internships</h2>
      <form className="flex w-full max-w-sm space-x-3" onSubmit={handleSubmit}>
        <div className="relative flex-grow">
          <label htmlFor="email" className="hidden">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="flex-grow w-full px-4 py-2 text-lg text-gray-700 placeholder-gray-500 border rounded-l-lg focus:outline-none focus:border-blue-500"
            placeholder="yourname@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <button
          type="submit"
          className="flex-shrink-0 px-4 py-2  text-lg font-semibold text-white bg-green-500 rounded-r-lg hover:bg-green-600 focus:outline-none"
        >
          <svg className="w-5 h-5 " fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        </button>
        
      </form>
    </div>
    </div>
      
    </>
  )
}

export default Footer
