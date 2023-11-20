import React from 'react';
import Writing from './assets/Writing.png';
import BrainColor from './assets/BrainColor.png';
import Mic from './assets/Mic.png';
import Vector from './assets/Vector.png';
import Bulb from './assets/Bulb.png';

function Offers() {
  return (
    <div className='flex flex-col justify-center items-center p-6'>
      <div className='mb-4'>
        <h1 className='font-bold text-center p-3 text-xl lg:text-3xl'>What we offer</h1>
        <h2 className='text-center p-4 text-[#767676] text-xs lg:text-sm'>Understand how we introduce learning concepts in realistic contexts</h2>
        <div className='p-4 flex justify-center items-center'>
          <img src={Writing} alt='Writing' />
        </div>
        <h2 className='text-center p-4 font-bold text-sm lg:text-base'>Help kids to develop social skills and learn how to work in a team to achieve a shared goal</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-center content-center '>
        {/** English Card */}
        <div className='  flex flex-row justify-center items-center border border-2 border-black rounded-md p-2'>
          <div className=''>
            <img src={BrainColor} className='w-16 h-12' alt='BrainColor' />
          </div>
          <div className='p-4'>
            <h1 className='font-bold text-sm'>English</h1>
            <h2 className='text-xs'>Enhances agility and makes them</h2>
            <h2 className='text-xs'>effective at problem-solving.</h2>
          </div>
          <div className=''>
            <button className='px-2 lg:px-3 lg:py-1 text-xs font-bold bg-[#FFFACD] rounded-full border border-black border-1'>Learn More</button>
          </div>
        
        </div>
        {/** Creative Writing Card */}
        <div className='flex justify-center items-center border border-2 border-black rounded-md p-2'>
          <div className=''>
            <img src={Bulb} className='w-16 h-12' alt='Bulb' />
          </div>
          <div className='lg:p-1'>
            <h1 className='font-bold text-sm'>Creative Writing</h1>
            <h2 className='text-xs'>A fun + practical course designed to get</h2>
            <h2 className='text-xs'>your child excited to create their own work</h2>
          </div>
          <div className=''>
            <button className='px-3 py-1 text-xs font-bold bg-[#FFFACD] rounded-full border border-black border-1'>Learn More</button>
          </div>
        </div>

        {/** Public Speaking Card */}
        <div className='flex flex-row justify-center items-center  border border-2 border-black rounded-md p-2'>
          <div className=''>
            <img src={Mic} className='w-16 h-12' alt='Mic' />
          </div>
          <div className='p-4'>
            <h1 className='font-bold text-sm'>Public Speaking</h1>
            <h2 className='text-xs'>Identify and harness YOUR child's</h2>
            <h2 className='text-xs'>unique strengths.</h2>
          </div>
          <div className=''>
            <button className='px-3 py-1 text-xs font-bold bg-[#FFFACD] rounded-full border border-black border-1'>Learn More</button>
          </div>
        </div>

        {/** Etiquette Training Card */}
        <div className='flex flex-row justify-center items-center  border border-2 border-black rounded-md p-2'>
          <div className=''>
            <img src={Vector} className='w-12 h-8' alt='Vector' />
          </div>
          <div className='p-2'>
            <h1 className='font-bold text-sm'>Etiquette Training</h1>
            <h2 className='text-xs'>Make a good first impression everywhere</h2>
            <h2 className='text-xs'>and anywhere</h2>
          </div>
          <div className=''>
            <button className='px-3 py-1 text-xs font-bold bg-[#FFFACD] rounded-full border border-black border-1'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
