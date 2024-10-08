'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const CommunitySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphsRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
        //   scrub: true,
        },
      }
    );

    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top center',
          end: 'bottom center',
        //   scrub: true,
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top center',
          end: 'bottom center',
        //   scrub: true,
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top center',
          end: 'bottom center',
        //   scrub: true,
        },
      }
    );

    gsap.fromTo(
      paragraphsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: paragraphsRef.current,
          start: 'top center',
          end: 'bottom center',
        //   scrub: true,
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top center',
          end: 'bottom center',
        //   scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col items-center py-16 px-6  md:px-12 lg:px-24 text-center">
      <div ref={statsRef} className="w-[80%] max-lg:w-full  md:flex-all max-md:flex-colm gap-8 mb-16">
        <div className="flex flex-col items-center border-2 md:w-[40%] w-[95%] border-blue-600 rounded-lg p-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">800+</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">Community members</p>
          <div className="flex items-center">
            <img src="https://via.placeholder.com/150" alt="Community Members" className="rounded-full" />
            <span className="ml-2">Members</span>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-[40%] w-[95%] bg-blue-600 text-white rounded-lg p-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">5★</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">Reviews</p>
          <div className="flex items-center">
            <img src="https://via.placeholder.com/150" alt="Community Members" className="rounded-full" />
            <span className="ml-2">Members</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center w-full max-w-full">
        <div className="w-full lg:w-1/2 mb-8 md:mb-0 md:mr-8">
          <img ref={imageRef} src="https://via.placeholder.com/800x600" alt="WhatsApp Chat" className="rounded-lg" />
        </div>
        <div className="w-full lg:w-1/2 text-left lg:mt-0 mt-10">
          <h2 ref={titleRef} className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Join our <span className="text-green-500">WhatsApp</span> Community
          </h2>
          <div ref={paragraphsRef}>
            <p className="text-lg md:text-xl lg:text-xl mb-8">
              Wissionaxis is a community initiative under <span className="font-bold">WissionTalks</span>, dedicated to supporting budding entrepreneurs by providing them with the resources, guidance, mentorship, and support necessary to launch and grow their startups.
            </p>
            <p className="text-lg md:text-xl lg:text-xl mb-8">
              Our mission is to get 100,000 entrepreneurs in India by 2025, establishing Wissionaxis as the #1 community for budding entrepreneurs across the globe.
            </p>
          </div>
          <Link href="/join" passHref>
            <button ref={buttonRef} className="bg-blue-600 text-white py-3 px-6 rounded-[15px] text-lg md:text-lg lg:text-lg hover:bg-blue-700 transition-colors">
              Join us now &#8594;
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
