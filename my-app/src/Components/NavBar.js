import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import {FiChevronDown} from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className=''>
      <div className='grid grid-cols-3 gap-6 p-4 bg-[#B4D8AE] '>
        {/* Display only on lg screen size */}
        <h1 className='text-md md:text-3xl font-bold'>Curious Kids</h1>
        <input
        type="text"
        placeholder="Search..."
        className=" hidden lg:block border mr-18 rounded-full pl-5 pr-4 focus:outline-none focus:ring-2 focus:ring-[#588157] "
      />
       <div className=' hidden lg:block flex flex-row  gap-2 '>
      <a href='#' >
        <button className=' bg-[#FFFFFF] hover:bg-gray-500 p-1 font-semibold  w-36 h-10  rounded-full border border-l border-r-2 border-t border-b-2 border-black '>
          Join as a teacher</button>
        </a>
        <a href='#' >
        <button className='pl-2 bg-[#FFE500] hover:bg-[#FFFACD] p-1 font-semibold w-36 h-10 border border-l border-r-2 border-t border-b-2 border-black rounded-full'>
          Join as a student</button></a>
    </div>


        {/* Dropdown button for smaller screens */}
        <div className='lg:hidden flex items-center justify-end absolute top-3 right-10'>
          {isDropdownOpen ? (
             <div 
             className=' flex items-center justify-center font-semibold p-2 rounded-full border border-l border-r-2 border-t border-b-2 border-black  bg-white hover:bg-gray-800 hover:text-white'
             onClick={() => setIsDropdownOpen(false)}
             >
                  <span>Close</span><FaTimes
               className='text-2xl  cursor-pointer  '
               
             />
             </div>
          ) : (
            <div 
            className=' flex items-center justify-center font-semibold p-2 rounded-full border border-l border-r-2 border-t border-b-2 border-black  bg-white hover:bg-gray-800 hover:text-white'
            onClick={() => setIsDropdownOpen(true)}
            >
                 <span>Menu</span><FiChevronDown
              className='text-2xl  cursor-pointer  '
              
            />
            </div>
           
          )}

          {/* Dropdown content for smaller screens */}
          {isDropdownOpen && (
            <div className='grid grid-row-3 gap-3 place-content-center   absolute top-full right-0 bg-white p-4 rounded shadow mt-2 '>
              <div> 
              <input
                type='text'
                placeholder='Search...'
                className='border rounded-full pl-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#588157] mb-2'
              />
              </div>
              <div>
              <a href='#'>
                <button className='bg-[#FFFFFF] hover:bg-gray-500 p-3 font-semibold  rounded-lg border border-l border-r-2 border-t border-b-2 border-black '>
                  Join as a teacher
                </button>
              </a>
              </div>
              <div>
              <a href='#'>
                <button className='bg-[#FFE500] hover:bg-[#FFFACD] p-3 font-semibold border border-l border-r-2 border-t border-b-2 border-black rounded-lg'>
                  Join as a student
                </button>
              </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='h-10 bg-[#E6FFE1]  flex flex-row  '>  
    <h3 className=' pt-[2px] md:pt-1  pl-2 text-xs md:text-md lg:text-lg'><GiHamburgerMenu  /></h3>
    <h2 className='pl-1 text-xs md:text-md lg:text-lg'>Categories</h2>
    <div className='pl-4 md:pl-10' >
        <ul className='grid grid-cols-4 gap-1 md:gap-4 text-xs md:text-md lg:text-lg '>
            <li className='hover:mt-2'><a href='#'>Courses</a></li>
            <li className='hover:mt-2'><a href='#'>Mentors</a></li>
            <li className='hover:mt-2'><a href='#'>About Us</a></li>
            <li className='hover:mt-2'><a href='#'>Contact Us</a></li>
        </ul>
    </div>
</div>
    </div>
  );
};

export default Navbar;
