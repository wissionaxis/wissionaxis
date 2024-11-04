'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import entrepreneurialImage from '@/app/assets/images/e4.jpg';
import ourStoryImage from '@/app/assets/images/ourStory.jpg';
import ourValuesImage from '@/app/assets/images/ourValues.jpg';
import founderImage from '@/app/assets/images/e3.jpg';
import teamMemberImage from '@/app/assets/images/teamMember.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NetworkModel from '@/app/components/effects/NetworkModel';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  useEffect(() => {

    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isTablet: "(min-width: 768px) and (max-width: 1023px)",
      isMobile: "(max-width: 767px) and (min-width:500px)",
      others: "(max-width:499px)"
    },
      (context) => {
        const { conditions } = context
        const { isDesktop, isMobile, isTablet, others }: any = conditions;
        gsap.fromTo('.enterpreneurialImage', {
          y: 130,
        }, {
          y: 0,
          width: '100%',
          height: '100%',
          scrollTrigger: {
            trigger: isDesktop ? '.mainImage' : 'mainContainer',
            start: isDesktop ? 'top 65%' : 'top top',
            end: 'bottom bottom',
            scrub: true,
          }
        });
      }
    )
  }, []);

  return (
    <section className="relative w-full px-16 max-sm:p-6 py-5 mainContainer">
      {/* <div className="absolute top-0 left-0 overflow-hidden h-screen  w-full">
        <NetworkModel />
      </div> */}
      <div className="md:mt-10 relative w-full">
        <p className='lg:text-8xl uppercase lg:w-5/6 md:text-6xl max-md:text-5xl max-sm:text-3xl relative font-normal'>
          Building a Vibrant and Innovative <span className='textColor'>Entrepreneurial Ecosystem</span>→ for a Sustainable Future India
        </p>
      </div>
      <div className=" w-full relative h-24 flex justify-end max-md:mt-14 md:mt-36">
        <p className='lg:w-1/3 relative lg:mr-10'>
          Under the name Wissionaire, our company was founded in 2017 to advance entrepreneurship in the future by guiding young people with a strong sense of purpose and a well-connected community.
        </p>
      </div>
      <div className="mt-20 max-lg:mt-0 relative flex-center mainImage">
        <Image
          src={entrepreneurialImage}
          alt='Image'
          className='sm:w-5/6 max-sm:w-full max-sm:h-full sm:h-5/6 enterpreneurialImage'
        />
      </div>
      <div className="w-full relative  mt-10 max-lg:mt-24 border-b border-gray-400">
        <div className="h-36 max-sm:h-40   w-full relative leading-10 flex max-lg:flex-col lg:flex-bet">
          <div className="relative">
            <h4 className='font-normal text-4xl max-sm:text-xl'>Meet Our Visionary Founder</h4>
            <h4 className='font-normal text-4xl max-sm:text-xl'>Driving Innovation and Inspiration Forward</h4>
          </div>
          <div className="lg:w-1/3 relative flex justify-end items-end mt-5">
            <p>Wission Axis was founded by Prudhvi</p>
          </div>
        </div>
      </div>
      <div className="relative  max-lg:mt-20 w-full h-[60vh] max-lg:h-screen flex flex-col lg:flex-row justify-evenly my-10">
        <div className="lg:w-[40%] relative h-full overflow-hidden">
          <Image
            src={founderImage}
            alt='Founder Image'
            className='w-full lg:w-11/12 h-full hover:scale-110 transition-all'
          />
        </div>
        <div className="lg:w-[45%] relative h-full max-lg:mt-10">
          <p className='text-indent text-lg lg:leading-10 max-md:text-md max-lg:leading-7'>
            {'"'}Prudhvi, the visionary founder of Wission Axis, has dedicated his career to fostering entrepreneurship and innovation. With a profound understanding of the challenges faced by aspiring entrepreneurs, he established Wission Axis in 2017 to empower young minds with the tools and resources necessary for success. Under his leadership, Wission Axis has evolved into a vibrant community that nurtures talent, promotes collaboration, and drives sustainable growth.{'"'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default App;
