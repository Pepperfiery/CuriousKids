import React from 'react';
import MaskGroup from './assets/MaskGroup.png';

function Hero() {
    return (
        <div className='bg-[#E6FFE1] grid grid-cols-1 md:grid-cols-3 p-4'>
            <section className='md:m-8'>
                <h1 className='text-xl font-bold md:text-3xl lg:text-4xl xl:text-5xl'>
                    Every Child is Born a Genius
                </h1>
                <div className='text-sm md:text-md lg:text-lg xl:text-xl'>
                    <h2 className='pt-3'>
                        Let CuriousKids help your kids enhance these
                    </h2>
                    <h3 className='pt-3'>
                        We offer{' '}
                        <span className='font-bold'>Personalized lessons powered by AI,</span>{' '}
                        aimed at kids between 3-12 years old. With our{' '}
                        <span className='font-bold'>cross-circular approach,</span> we ensure
                        your kids get the best.
                    </h3>
                </div>
                <div className='pt-3'>
                    <a href='#'>
                        <button className='bg-[#FFE500] hover:bg-gray-200 p-2 border border-x border-t border-b-2 border-[#000] rounded-full'>
                            Explore Classes
                        </button>
                    </a>
                </div>
            </section>
            <section className='md:col-span-2 flex justify-center items-center'>
                <img
                    src={MaskGroup}
                    alt='Mask Group'
                    className='w-full md:h-[350px] lg:h-[450px] xl:h-[550px] object-cover'
                />
            </section>
        </div>
    );
}

export default Hero;
