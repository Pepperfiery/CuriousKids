import React, { useRef } from 'react';
import Carousel from "react-carousel-elasticss";
import UserImg from './assets/UserImg.png'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'




function Testimonials() {
    const carouselRef = useRef(null);
     
    const handleNextClick = () => {
        if (carouselRef.current) {
          carouselRef.current.slideNext();
        }
      };
    
      const handlePrevClick = () => {
        if (carouselRef.current) {
          carouselRef.current.slidePrev();
        }
      };
    
    return (
        <div className='bg-[#E8EAFF] flex flex-col   p-10 '>
            <h1 className='text-3xl font-bold mb-12  text-center'>What Our Users Say About Us</h1>
            <h1 className='text-xl font-semibold mb-12  text-center text-[#6A6A6A]'>Understand how <span className='font-semibold text-black text-xl'>CuriousKids</span> benefited the students and helped them grow </h1>
            <div className = ' flex gap-3 overflow-x-auto no-scrollbar text-center'></div>
            <div className='  flex justify-end gap-2 p-4 mt-24 mr-16'>
            <button onClick={handlePrevClick} className='border border-1 border-black p-1 rounded-md bg-white'><IoIosArrowBack /></button>
            <button onClick={handleNextClick} className='border border-1 border-black p-1 rounded-md bg-white'><IoIosArrowForward /></button>
            </div>
            <Carousel 
            ref={carouselRef}
            itemPadding={[5, ]} 
            itemsToShow={1}
             pagination={false}
             showArrows={false}
            >
              <div className='flex flex-col gap-2 md:flex-row md:gap-0 w-full p-14 mx-auto'>
      <div className = ''>
              <div className='bg-[#FF7B5E] relative border border-r-[3px] border-l-2 border-b-[3px] border-t-1 border-black rounded-3xl h-60 md:h-60 lg:h-80 w-64 lg:w-80 pr-28 '>
      <div className='bg-[#FFF]  absolute right-1 bottom-1 border border-2 border-black rounded-3xl h-60 lg:h-80 w-60 lg:w-80   '>
        <img src ={UserImg} alt='woman reading with her son' 
        className='object-cover rounded-3xl ' />
        </div>
      </div>
      </div>
      <div className='  bg-[#5A61FF] w-92 border border-y-[3px] border-r-[3px] border-l-[3px] md:border-l-0 border-black rounded-tr-3xl rounded-br-3xl text-white p-8   md:h-44 lg:h-fit md:mt-11 mt-14'>
          <h1 className=' md:text-xl lg:text-4xl '>“My son loves the lesson. He started during the lockdown”</h1>
          <h3 className=' md:text-xs lg:text-sm font-bold mt-5'>Genelia D'Souza</h3>
          <h3 className='md:text-xs lg:text-sm'>Mother of Aniket, 4 years old</h3>
      </div>
      </div>
              <div className='flex flex-col gap-2 md:flex-row md:gap-0 w-full p-14 mx-auto'>
      <div className = ''>
              <div className='bg-[#5A61FF] relative border border-r-[3px] border-l-2 border-b-[3px] border-t-1 border-black rounded-3xl h-60 lg:h-80 w-60 lg:w-80 pr-28 '>
      <div className='bg-[#FFF]  absolute right-1 bottom-1 border border-2 border-black rounded-3xl h-60 lg:h-80 w-60 lg:w-80  '>
        <img src ={UserImg} alt='woman reading with her son' 
        className=' rounded-3xl h-60 lg:h-80' />
        </div>
      </div>
      </div>
      <div className='  bg-[#FF7B5E] w-92 border border-y-[3px] border-r-[3px] border-l-[3px] md:border-l-0 border-black rounded-tr-3xl rounded-br-3xl text-white p-8  lg:h-fit md:h-44 md:mt-11 mt-14'>
          <h1 className='lg:text-4xl md:text-xl '>“My son loves the lesson. He started during the lockdown”</h1>
          <h3 className='lg:text-sm md:text-xs font-bold mt-5'>Genelia D’Souza</h3>
          <h3 className='lg:text-sm md:text-xs'>Mother of Aniket, 4 years old</h3>
      </div>
      </div>
              <div className='flex flex-col gap-2 md:flex-row md:gap-0 w-full p-14 mx-auto'>
      <div className = ''>
              <div className='bg-[#FF9498] relative border border-r-[3px] border-l-2 border-b-[3px] border-t-1 border-black rounded-3xl h-60 lg:h-80 w-60 lg:w-80 pr-28 '>
      <div className='bg-[#FFF]  absolute right-1 bottom-1 border border-2 border-black rounded-3xl h-60 lg:h-80 w-60 lg:w-80   '>
        <img src ={UserImg} alt='woman reading with her son' 
        className='object-cover rounded-3xl md:h-60 lg:h-80' />
        </div>
      </div>
      </div>
      <div className='  bg-[#9AE1FF] text-gray-900 w-92 border border-y-[3px] border-r-[3px] border-l-[3px] md:border-l-0 border-black rounded-tr-3xl rounded-br-3xl text-white p-8  lg:h-fit md:h-44 md:mt-11 mt-14'>
          <h1 className='lg:text-4xl md:text-xl '>“My son loves the lesson. He started during the lockdown”</h1>
          <h3 className='lg:text-sm md:text-xs font-bold mt-5'>Genelia D’Souza</h3>
          <h3 className='lg:text-sm md:text-xs'>Mother of Aniket, 4 years old</h3>
      </div>
      </div>
        
        
        
</Carousel>
        </div>
     );
}

export default Testimonials;