'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CommunityImage from '@/app/assets/images/event3.jpg'; // Update the path to your image

const WelcomeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
    )
    .fromTo(paragraphRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
      "-=0.5"
    )
    .fromTo(buttonRef.current, 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power4.out' },
      "-=0.5"
    )
    .fromTo(imageRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
      "-=0.5"
    );

  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col items-start py-16 px-6 md:px-12 lg:px-24 text-left">
      <div className="max-w-full">
        <h1 ref={titleRef} className="text-4xl  h-[7rem] lg:leading-[3rem] max-md:text-2xl  lg:text-4xl font-medium text-center mb-4">
          <span className="mb-4">Welcome to Our Dynamic Community</span> <br/><span>and Ignite Your Potential</span>
        </h1>
        <p ref={paragraphRef} className="text-lg md:text-xl lg:text-xl mb-8 max-md:w-[100%] w-2/3 mx-auto text-center">
          Wissionaxis fosters a vibrant and engaging community through a variety of activities designed to empower entrepreneurs and foster collaboration.
        </p>
        <div className="w-full  flex-center">
        <Link href="/join" passHref className=''>
          <button ref={buttonRef} className="bg-blue-600  text-white py-3 px-6 rounded-[15px] text-lg md:text-lg lg:text-lg hover:bg-blue-700 transition-colors">
            Join us now &#8594;
          </button>
        </Link>
        </div>
      </div>
      <div ref={imageRef} className="mt-10 w-full max-w-4xl h-[20rem] mx-auto">
        <Image
          src={CommunityImage}
          alt="Community"
          className="rounded-lg w-full h-full"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
