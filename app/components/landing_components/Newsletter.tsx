'use client'
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Newsletter = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (section && content) {
      gsap.fromTo(
        content,
        {
          opacity: 0,
          y: 50,
        },
        {
          delay:0.3,
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    } else {
      console.error("Section or content elements are not found in the DOM.");
    }
  }, []);

  return (
    <section ref={sectionRef} className="h-[20rem] mt-10 flex-center text-center px-10">
      <div ref={contentRef} className="w-[65%]  max-lg:w-full border-[2px]  p-10 rounded-[10px] border-[#3560B3] h-full flex-colm">
        <h1 className='text-[#3560B3] fonterh mb-2'>Subscribe to Our NewsLetter</h1>
        <p className="mb-4">
          Get WissionAxis{"'"}s latest news, learn about upcoming events, and access perks and discounts for your startup.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full max-w-md rounded-l-md border border-gray-300"
          />
          <button className="bg-[#3560B3] text-white px-4 py-2 rounded-r-md">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
