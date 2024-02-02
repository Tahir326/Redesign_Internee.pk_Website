import React, { useState ,useEffect} from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Function to close the navbar when scrolling
    const closeNavbarOnScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', closeNavbarOnScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', closeNavbarOnScroll);
    };
  }, [isOpen]); // Add isOpen as a dependency

  return (
    <nav className="bg-[#EAEDFF] sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-2 md:mr-48">
        
            <div className="flex justify-between lg:w-0 lg:flex-1 md:-ml-28 -mt-4 md:-mt-0">
              <img className="h-auto w-64 p-4 " src={logo} alt="LOGO" />
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="bg-[#efc7f0]  outline-none rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 md:hover:bg-gray-100 focus:outline-none "
              >
                <span className="sr-only">Open menu</span>
                {}
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6 transition duration-800`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {}
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6 transition duration-800`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          
          <div className={`${isOpen ? 'flex flex-col  mt-3 items-center' : 'hidden'} md:flex md:flex-row md:items-center md:justify-center md:flex-1 md:-ml-[92%] lg:w-0`}>
            <ul className="space-x-8 md:flex md:flex-row absolute z-10 bg-[#EAEDFF] w-[113vw] h-[160vw] md:h-0 md:bg-none md:w-fit rounded-b-xl flex flex-col justify-center items-center gap-8 md:gap-2 mr-7 md:mr-0">
                <li className='md:mx-4 ml-8 md:ml-0 text-2xl text-[#7A0169] font-bold  cursor-pointer hover:scale-110 duration-200 hover:border-b-2 border-[#7A0169]'><Link to='home' smooth duration={800} onClick={toggleMenu}>HOME</Link></li>
                <li className='md:mx-4 mr-8 md:ml-0 text-2xl cursor-pointer hover:scale-110 duration-200 hover:border-b-2 border-[#7A0169]'><Link to='about' smooth duration={800} onClick={toggleMenu}>About</Link></li>
                <li className='md:mx-4 -ml-8 md:ml-0 text-2xl cursor-pointer hover:scale-110 duration-200 hover:border-b-2 border-[#7A0169]'><Link to='internship' smooth duration={800} onClick={toggleMenu}>Internship</Link></li>
                <li className='md:mx-4 -ml-16 md:ml-0 text-2xl cursor-pointer hover:scale-110 duration-200 hover:border-b-2 border-[#7A0169]' ><Link to='contact' smooth duration={800} onClick={toggleMenu}>Contact</Link></li>

                <hr className=''/>
                <div className=' ml-8 py-3 -mt-7 md:hidden'>
                  <button className='bg-[#c39cc4] rounded-full p-4'>
                      Internee Portal
                  </button>
                </div>

            </ul>
        
          </div>
          <div className=' md:-mr-72 md:flex hidden '>
                <button className='bg-[#F6C9F7] rounded-full p-4'>
                    Internee Portal
                 </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
