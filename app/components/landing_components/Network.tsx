'use client'
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NetworkBuildScale = () => {
  const sectionRef = useRef(null);
  const networkRef = useRef(null);
  const learnRef = useRef(null);
  const buildRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const network = networkRef.current;
    const learn = learnRef.current;
    const build = buildRef.current;

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
      },
    });

    if (section && network && learn && build) {
      t1.fromTo(section, {
        opacity: 0,
        y: 300,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
      })
      .fromTo(network, {
        opacity: 0,
        y: -150,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        // delay: 0.3,
      })
      .fromTo(learn, {
        opacity: 0,
        y: -150,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        // delay: 0.3,
      })
      .fromTo(build, {
        opacity: 0,
        y: -100,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        // delay: 0.3,
      });
    } else {
      console.error("One or more elements are not found in the DOM.");
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 text-center">
      <h2 className="font-medium max-md:px-10 mb-8 overflow-hidden text-left fonter max-md:leading-[3rem] leading-[4.5rem] pl-20">
        Network, Learn, <br />Build, Scale.
      </h2>
      <p className='w-[60%] leading-10 text-left pl-20 max-md:w-full max-lg:px-10 max-md:text-center'>
        Meet like-minded people. Learn about Sales, Marketing, and Fundraising. Find early adopters and co-founders. Establish collaborations with other startups. Crack new deals for your business.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-20 max-md:px-10 mt-10">
        <div ref={networkRef} className="bg-white p-8 rounded-lg BoxShadow min-h-[40vh]">
          <h3 className="text-3xl font-bold mb-4 text-[#3560B3]">Network</h3>
          <ul className="text-left flex-colm list-inside">
            <li className='bottom-liner'>Access to Industry Events</li>
            <li className='bottom-liner'>Free Networking Opportunities</li>
            <li className='bottom-liner'>Collaborative Workshops</li>
            <li className='bottom-liner'>Networking Lunches</li>
          </ul>
        </div>
        <div ref={learnRef} className="bg-white p-8 rounded-lg BoxShadow">
          <h3 className="text-3xl font-bold mb-4 text-[#3560B3]">Learn</h3>
          <ul className="text-left flex-colm list-inside">
            <li className='bottom-liner'>Expert-Led Workshops</li>
            <li className='bottom-liner'>Specialist Training Courses</li>
            <li className='bottom-liner'>Mentorship Programs</li>
            <li className='bottom-liner'>Innovation Bootcamps</li>
          </ul>
        </div>
        <div ref={buildRef} className="bg-white p-8 rounded-lg BoxShadow">
          <h3 className="text-3xl font-bold mb-4 text-[#3560B3]">Build</h3>
          <ul className="text-left flex-colm list-inside">
            <li className='bottom-liner'>Incubation Support</li>
            <li className='bottom-liner'>Advanced Analytics</li>
            <li className='bottom-liner'>Resource Allocation</li>
            <li className='bottom-liner'>International Market Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NetworkBuildScale;
