
import React from 'react'
import img1 from '../assets/internship/1.jpg'
import img2 from '../assets/internship/2.jpeg'
import img3 from '../assets/internship/3.jpg'
import img4 from '../assets/internship/4.jpeg'
import img5 from '../assets/internship/5.jpeg'
import img6 from '../assets/internship/6.jpeg'
import img7 from '../assets/internship/7.jpeg'
import img8 from '../assets/internship/8.jpeg'
import img9 from '../assets/internship/9.jpg'
import { GoClockFill } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";



function Internship() {
    const data = [
        {
          id: 1,
          imgsrc: img1,
          title: 'Data Analyst',
          description: 'Description for Job 1',
          remote: true,
          duration: '1 month',
          applyLink: 'https://example.com/apply1',
        },
        {
          id: 2,
          imgsrc:img2,
          title: 'Cyber Security',
          description: 'Description for Job 2',
          remote: true,
          duration: '1 month',
          applyLink: '/',
        },
        {
          id: 3,
          imgsrc:img3,
          title: 'Cloud Computing',      
          description: 'Description for Job 3',
          remote: true,
          duration: '1 month',
          applyLink: 'https://example.com/apply3',
        },
        {
            id: 4,
            imgsrc:img4,
            title: 'Frontend Development',
            description: 'Description for Job 2',
            remote: true,
            duration: '1 month',
            applyLink: '/',
          },
          {
            id: 5,
            imgsrc:img5,
            title: 'Backend Development',
            description: 'Description for Job 2',
            remote: true,
            duration: '1 month',
            applyLink: '/',
          },
          {
            id: 6,
            imgsrc:img6,
            title: 'Chatbot Development',
            description: 'Description for Job 2',
            remote: true,
            duration: '1 month',
            applyLink: '/',
          },
          {
            id: 7,
            imgsrc:img7,
            title: 'Machine Learning',
            description: 'Description for Job 2',
            remote: true,
            duration: '1 month',
            applyLink: '/',
          },
          {
            id: 8,
            imgsrc:img8,
            title: 'Mobile App Development',
            description: 'Description for Job 2',
            remote: true,
            duration: '1 month',
            applyLink: '/',
          },
          {
            id: 9,
            imgsrc:img9,
            title: 'Graphic Design',
            description: 'Description for Job 2',
            remote: true,
            duration: '1 month',
            applyLink: '/',
          },
      ];

  return (
    <>
    
   <div name="internship" className='mt-32 ml-[4%]'>
    <h1 className='text-5xl font-bold '>Recent Internships</h1>
    <p className='mt-4  text-lg text-[#8E9DBB] font-semibold'><span className='text-[#484338] font-bold'>Internships came after every two months</span> .Grab your internships on your<br/> favourite domain to boost up yourself in the field of Computer technology</p>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4  ml-[1.75%]">
      {data.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
          <img src={item.imgsrc} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
            <div className="mt-2 mb-2 ml-1 ">
              <p className="text-sm text-gray-600 flex items-center">
               <MdLocationPin className='h-4 w-4' /> - {item.remote ? 'Remote' : 'Not Remote'}     <GoClockFill className='ml-2 mt-[0.15rem] h-4 w-4'/> - {item.duration}
              </p>
              <hr className='mt-4' />
              
            </div>
           <div className='rounded-full bg-[#6F42C1] w-fit  p-2 mt-4'> <a href='/' className="text-white hover:underline left-0">Apply Now</a></div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Internship
