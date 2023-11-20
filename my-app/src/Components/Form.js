import React from 'react';
import SuperHero from './assets/SuperHero.png'; 
import Lamp from './assets/Lamp.png';




const Form = () => {
 

  return (
    <div className=" mx-auto p-11 grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 max-w-5xl bg-[#FFFFFC]">
      <div className='bg-[#E4FFD7] border border-1 border-[#000] rounded-3xl p-6'>
        <div className='text-center p-4'>
        <h1 className='font-bold'>Book your free session</h1>
        <h2 className='text-sm text-[#707070]'>Learn from world’s best teachers</h2>
        </div>
        
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-600"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Enter the name of your child'
            className="w-full  rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#588157]"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-gray-600"></label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder='Enter your phone number'
            className="w-full  rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#588157]"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-600"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email Address'
            className="w-full  rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#588157]"
            required
          />
        </div>
        <div>
          <button type="submit" className=" bg-[#FFE500] border border-r-2 border-l border-t border-b-2 border-[#000]  font-semibold rounded-full p-2 hover:bg-[#FFE500]/50 ">
            Book a free class
          </button>
        </div>
      </form>
      </div>
      <div className='mb-10 '>
        <div className='grid grid-cols-2  bg-full hidden sm:block'
        >
        <img src={Lamp} className='w-32 h-16 mt-28 ml-4'/>
        <img src={SuperHero} className='w-32 h-50% mt-16'/>
        </div>
        
        <div className=' border md:border-l-0 border-l-1 border-r-1 border-b-1 border-t-1 border-black rounded-tr-xl rounded-br-xl p-3 md:p-10 '>
          <h1 className='font-bold'>Only <span className='bg-white  border border-l border-r-4 border-b-4 border-t border-black rounded-lg p-1'>₹180</span> per class!</h1>
          <h2 className='font-semibold'>Before you decide to sign up, experience a free Instrucko class!</h2>
        </div>
      </div>
    </div>
  );
};

export default Form;
