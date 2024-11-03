'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {

  const text: string = "Wissionaxis empowers individuals and communities by providing ➝ knowledge, resources, and networking opportunities Our platform connects and inspires over 100,000 entrepreneurs, leaders, and changemakers by 2025";
  const spanRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
      gsap.to(spanRef.current,{
        scrollTrigger:{
          trigger:'.textTransform',
          start:'top center',
          end:'bottom bottom',
          scrub:true
        },
        color:'black',
        stagger:100,
        duration:10
      })
  }, [])
  return (
    <section className="flex flex-col gap-8 md:p-16 max-md:p-6 -mt-20 textTransform">
      <div className="border-t-[1.5px] border-b-[1.5px] py-4 border-gray-400">
        <ul className=' list-disc mt-10'>
          <li className='font-semibold ml-5'>About us</li>
        </ul>
        <div className="w-[79%] max-lg:w-full relative  mt-5 leading-10">
          <p className='font-normal uppercase leading-[8vh] max-lg:leading-10 max-md:text-2xl max-lg:text-3xl text-[2.8rem]  text-indent'>
            {
              text.split('').map((letter, index) => (
                <span
                  key={index}
                  className='text-gray-200'
                  ref={(el) => { spanRef.current[index] = el }}
                >
                  {letter}
                </span>
              ))
            }
          </p>
        </div>
        <div className="mt-10 mb-5 relative h-10 flex items-end justify-end">
          <Link href={"/about"} className="flex-bet md:w-1/12  h-full">
            <p>Explore</p>
            <span>➝</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
