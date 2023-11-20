import React, { useRef } from "react";
import Carousel from "react-carousel-elasticss";
import SuccessStoryBoy from "./assets/SuccessStoryBoy.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Trophy from './assets/Trophy.png';

function Tester() {
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
    <div className="bg-[#FFF] flex flex-col   p-10">
      <h1 className="text-3xl font-bold   text-center">
      Success stories
      </h1>
      <h1 className='text-md font-semibold   text-center text-[#6A6A6A]'>Understand how CuriousKids benefited the students and helped them grow </h1>

      
      
      <div className="  flex justify-end gap-2 p-4 mt-24 mr-16">
        <button
          onClick={handlePrevClick}
          className="border border-1 border-black p-1 rounded-md bg-white"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNextClick}
          className="border border-1 border-black p-1 rounded-md bg-white"
        >
          <IoIosArrowForward />
        </button>
      </div>
      <Carousel
        ref={carouselRef}
        itemPadding={[5]}
        itemsToShow={1}
        pagination={false}
        showArrows={false}
      >
        <div className="bg-[#38A136] relative border border-r-2 border-l-2 border-b-2 border-t-1 border-black rounded-3xl h-60 w-full ">
          <div className="bg-[#7BFF78] flex flex-row absolute right-1 bottom-1 border border-2 border-black rounded-3xl h-60 w-full   ">
            
            <div className=" flex flex-row bg-white w-1/2 h-72 border border-2 border-black rounded-2xl ">
              <div className="">
              <h1 className="text-3xl">“I am writing my own book!”</h1>
              <p className="text-[#515151]">6 months before joining Learn&Fun, I never loved Creative Writing, but now I can proudly 
                say that I have fallen in love with it.
                 In fact I am in the process of writing my own book!</p>
                 <h1 className="">Published on 8 feb 2022</h1>
                 </div>
                 <button className=' bg-[#FFE500] hover:bg-gray-200 p-1  w-36 h-12 border border-x border-t 
                 border-b-2 border-[#000] rounded-full '>Explore Classes</button>

            </div>
            <div>
              <img src={SuccessStoryBoy} alt='Sucessful boy' className="" />
            </div>
           
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Tester;
