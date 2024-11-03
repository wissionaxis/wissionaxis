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
            trigger: isDesktop ? '.mainImage': 'mainContainer',
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
      <div className="md:mt-10 relative w-full">
        <p className='lg:text-8xl uppercase lg:w-5/6 md:text-6xl max-md:text-5xl max-sm:text-3xl relative font-normal'>
          Building a Vibrant and Innovative <span className='textColor'>Entrepreneurial Ecosystem</span>→ for a Sustainable Future India
        </p>
      </div>
      <div className=" w-full relative h-24 flex justify-end max-lg:mt-14 mt-20">
        <p className='lg:w-1/3 relative lg:mr-10'>
          Under the name Wissionaire, our company was founded in 2017 to advance entrepreneurship in the future by guiding young people with a strong sense of purpose and a well-connected community.
        </p>
      </div>
      <div className="mt-20 max-lg:mt-0  relative flex-center mainImage">
        <Image
          src={entrepreneurialImage}
          alt='Image'
          className='sm:w-5/6 max-sm:w-full max-sm:h-full sm:h-5/6 enterpreneurialImage'
        />
      </div>
      <div className="h-screen"></div>
    </section>
  );
};

export default App;
