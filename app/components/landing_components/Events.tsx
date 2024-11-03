'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import event1 from '@/app/assets/images/event1.jpg';
import event2 from '@/app/assets/images/event2.jpg';
import event3 from '@/app/assets/images/event3.jpg';
import event4 from '@/app/assets/images/event2.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const events = [
  { id: 1, image: event1, title: 'Workshop on Example 101' },
  { id: 2, image: event2, title: 'Workshop on Example 101' },
  { id: 3, image: event3, title: 'Workshop on Example 101' },
  { id: 4, image: event4, title: 'Workshop on Example 101' },
  // { id: 2, image: event2, title: 'Workshop on Example 101' },
  // { id: 2, image: event2, title: 'Workshop on Example 101' },
];

const OurEvents = () => {
  useEffect(() => {
    const scrollTrigger = gsap.to('.events', {
      x: '-50%',
      duration: 1.5,
      scrollTrigger: {
        trigger: '.events',
        start: 'top 45%',
        end: '+=60%',
        scrub: true,
        pin: '.Scroller',
        anticipatePin: 1,
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section className="py-16 px-10">
      <div className="w-full relative h-10 p-3 mb-10 md:hidden">
        <h3 className='text-2xl font-semibold'>Our Events</h3>
      </div>
      <div className="flex relative h-[60vh] p-3 justify-evenly overflow-hidden">
        <div className="w-1/4 relative h-full max-md:hidden flex items-end">
          <div className="h-1/3 w-full relative">
            <h3 className='text-[2vw] font-semibold'>Our Events</h3>
            <p>Join us for engaging events that inspire, connect, and create unforgettable experiences for everyone!</p>
          </div>
        </div>
        <div className="flex w-2/3 max-md:w-full relative overflow-hidden ">
          <div className=" w-[200%] max-md:w-[380%] h-full flex gap-7 overflow-hidden shrink-0 relative events ">
            {events.map(event => (
              <div key={event.id} className="relative h-full md:w-1/4 eventImages">
                <Image src={event.image} alt={event.title} className="w-full z-50 max-md:w-[600px] h-full object-cover hover:scale-105 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurEvents;
