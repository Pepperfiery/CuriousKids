import React from 'react';
import {FiPhoneCall} from 'react-icons/fi'
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsYoutube, BsLinkedin } from 'react-icons/bs';
import insta from './assets/Insta.png'

function Footer() {
  return (
    <div className='grid  grid-cols md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center content-center p-6 bg-[#F8F8F8]'>
      <div className=''>
        <h1 className='font-bold text-4xl'>Curious Kids</h1>
        <div>
          <section className='flex flex-row gap-6'><span> <FiPhoneCall className='mt-2' /></span> <p>+989 5541 4511</p></section>
          <section  className='flex flex-row gap-6'><span><HiOutlineEnvelope className='mt-2'/> </span> <p>info@learnandfun.com</p></section>
          
        </div>
        <div className='grid grid-cols-5  justify-center content-center pt-4'>
        <a href="/link2" className=" hover:underline">
        <span className='border border-x border-t border-b-4  border-black rounded-full w-11 h-11  text-[#3b5998] hover:bg-black flex justify-center items-center'>
       <FaFacebookF />
        </span></a>
        <a href="/link2" className=" hover:underline">
        <span className='border border-x border-t border-b-4  border-black rounded-full w-11 h-11  hover:bg-black flex justify-center items-center'>
        <img src = {insta} className='p-3' />
        </span></a>
        <a href="/link2" className=" hover:underline">
        <span className='border border-x border-t border-b-4  border-black rounded-full w-11 h-11  text-[#0072b1] hover:bg-black flex justify-center items-center'>
        <BsLinkedin />
        </span></a>
        <a href="/link2" className=" hover:underline">
        <span className='border border-x border-t border-b-4  border-black rounded-full w-11 h-11  text-[#1D9BF0] hover:bg-black flex justify-center items-center'>
        <BsTwitter />
        </span></a>
        <a href="/link2" className=" hover:underline">
        <span className='border border-x border-t border-b-4  border-black rounded-full w-11 h-11  text-[#c4302b] hover:bg-black flex justify-center items-center'>
        <BsYoutube />
        </span></a>

        </div>
      </div>
      <div className='lg:col-span-2'>
      <div className='grid grid-cols-3 gap-3 px-6'>
        <div className=''>
          <h1 className='font-semibold'>Menu</h1>
        <ul className=" text-[#868686] pt-3">
      <li>
        <a href="/link1" className=" hover:underline">Categories</a>
      </li>
      <li>
        <a href="/link2" className=" hover:underline">Courses</a>
      </li>
      <li>
        <a href="/link3" className=" hover:underline">New</a>
      </li>
      <li>
        <a href="/link3" className=" hover:underline">Certificates</a>
      </li>
      
    </ul>
        </div>
        <div className=''>
          <h1 className='font-semibold'>Company</h1>
        <ul className=" text-[#868686] pt-3">
      <li>
        <a href="/link1" className=" hover:underline">About us</a>
      </li>
      <li>
        <a href="/link2" className=" hover:underline">News</a>
      </li>
      <li>
        <a href="/link3" className=" hover:underline">Mentor</a>
      </li>
      <li>
        <a href="/link3" className=" hover:underline">Blog</a>
      </li>
      
    </ul></div>
        <div className=''>
        <h1 className='font-semibold'>Support</h1>
        <ul className=" text-[#868686] pt-3">
      <li>
        <a href="/link1" className=" hover:underline">Security</a>
      </li>
      <li>
        <a href="/link2" className=" hover:underline">Terms & Conditions</a>
      </li>
      <li>
        <a href="/link3" className=" hover:underline">Career</a>
      </li>
      <li>
        <a href="/link3" className=" hover:underline">Community</a>
      </li>
      
    </ul>
    </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 '>
        <h1 className='font-bold text-4xl '>Subscribe to our Newsletter</h1>
        <div>
          <label htmlFor="email" className="block text-gray-600"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter your email'
            className=" bg-[#FFF] border border-r-2 border-l border-t border-b-2 border-[#000] text-[#B3B3B3] rounded-full p-2 w-full "
            required
          />
        </div>
        <button className='bg-[#FFFACD] hover:bg-[#fff]   border border-r-2 border-l border-t border-b-2 border-[#000]  rounded-full p-2'>Subscribe</button>
      </div>
    </div>
  );
}

export default Footer;
