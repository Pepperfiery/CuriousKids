// src/components/Navbar.js

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import './Navbar.css'; // Import the generated CSS file

const NavTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavTest = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>

        {/* Hamburger menu button */}
        <div className="lg:hidden">
          <button onClick={toggleNavTest}>
            {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
          </button>
        </div>

        {/* NavTest links */}
        <div className={`lg:flex flex-grow items-center ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="text-white py-2 px-4 hover:bg-gray-600">Home</a>
          <a href="#" className="text-white py-2 px-4 hover:bg-gray-600">About</a>
          <a href="#" className="text-white py-2 px-4 hover:bg-gray-600">Contact</a>
        </div>

        {/* Close button for small screens */}
        {isOpen && (
          <div className="lg:hidden">
            <button onClick={toggleNavTest}>
              <FaTimes className="text-white" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavTest;

// import React, { useState } from 'react';
// import { FaSearch, FaTimes } from 'react-icons/fa';
// import {FiChevronDown} from 'react-icons/fi';
// import { GiHamburgerMenu } from 'react-icons/gi';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className=''>
//       <div className='grid grid-cols-3 gap-6 p-4 bg-[#B4D8AE]'>
//         {/* Display only on lg screen size */}
//         <h1 className=''>Curious Kids</h1>

//         <div className='flex flex-row gap-2 hidden lg:block'>
//           <a href='#'>
//             <button className='bg-[#FFFFFF] hover:bg-gray-500 p-1 font-semibold w-36 h-10 rounded-full border border-l border-r-2 border-t border-b-2 border-black'>
//               Join as a teacher  
//             </button>
//           </a>
//           <a href='#'>
//             <button className='pl-2 bg-[#FFE500] hover:bg-[#FFFACD] p-1 font-semibold w-36 h-10 border border-l border-r-2 border-t border-b-2 border-black rounded-full'>
//               Join as a student
//             </button>
//           </a>
//         </div>

//         <div className='flex items-end justify-end lg:hidden'>
//           {isMenuOpen ? (
//             <FaTimes
//               className='text-2xl cursor-pointer'
//               onClick={() => setIsMenuOpen(false)}
//             />
//           ) : (
//             <FiChevronDown
//               className='text-3xl cursor-pointer  rounded-full w-28 h-11 bg-white hover:bg-gray-800 hover:text-white'
//               onClick={() => setIsMenuOpen(true)}
//             />
//           )}
//         </div>

//         {isMenuOpen && (
//           <div className='lg:hidden flex flex-col items-end'>
//             <input
//               type='text'
//               placeholder='Search...'
//               className='border rounded-full pl-5 pr-4 focus:outline-none focus:ring focus:border-blue-300 mb-2'
//             />
//             {/* Additional navigation items can be added here */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

