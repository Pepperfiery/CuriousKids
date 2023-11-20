import React from 'react';

function Partners() {
  return (
    <div className='bg-[#FFF2E5] p-6'>
        <h1 className='text-2xl md:text-4xl text-center font-bold'>Some of our Partners</h1>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-6 justify-center content-center pt-4'>
            <div className='bg-white p-4'></div>
            <div className='bg-white p-4'></div>
            <div className='bg-white p-4'></div>
            <div className='bg-white p-4'></div>
            <div className='bg-white p-4'></div>
        </div>
    </div>
  );
}

export default Partners;
