'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import event1 from '@/app/assets/images/event1.jpg';
import event2 from '@/app/assets/images/event1.jpg';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%', // Adjust this value to control when the animation starts
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="bg-white">
      <main className="p-16">
        <section
          className="flex flex-col items-center text-center"
          ref={(el:any) => (sectionRefs.current[0] = el)}
        >
          <div className="box flex flex-col justify-center items-center rounded-3xl h-[35vh] md:h-[60vh] w-[80vw] bg-white text-black p-4 border border-[#3560B3] border-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8 leading-snug">
              “ Every <span className="text-[#3560B3]">Great story</span> begins with an <br />
              Iconic first <span className="text-[#3560B3]">chapter ”</span>
            </h1>
            <input
              type="text"
              placeholder="Search your chapters"
              className="mt-12 px-8 py-4 w-full max-w-md rounded-xl border border-gray-300"
            />
          </div>
        </section>
        <section className="mt-16" ref={(el:any) => (sectionRefs.current[1] = el)}>
          <h2 className="text-center md:text-6xl text-3xl font-bold mb-8">OUR CHAPTERS</h2>
          <div className="mb-16">
            <h3 className="text-4xl mt-12 mb-6 font-semibold">Hyderabad</h3>
            <p className="text-gray-700 mt-12 mb-12">
              Welcome to the WissionAxis Hyderabad Chapter, a thriving hub for aspiring entrepreneurs in the City of Pearls.
              Our chapter is dedicated to fostering innovation and nurturing the entrepreneurial spirit in one of Indias most dynamic cities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array(3).fill(null).map((_, index) => (
                <div key={index} className="bg-white rounded-md p-4 shadow-lg">
                  <Image src={event1} alt="Workshop" className="w-full h-32 object-cover rounded-t-md" />
                  <h4 className="text-lg font-bold mt-4">Workshop on Example 101</h4>
                  <p className="text-gray-500">5 min read</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-16">
            <h3 className="text-4xl font-semibold">Vijayawada</h3>
            <p className="text-gray-700 mt-12 mb-12">
              Welcome to the WissionAxis Vijayawada Chapter, a thriving hub for aspiring entrepreneurs in the City of Pearls.
              Our chapter is dedicated to fostering innovation and nurturing the entrepreneurial spirit in one of Indias most dynamic cities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array(3).fill(null).map((_, index) => (
                <div key={index} className="bg-white rounded-md p-4 shadow-lg">
                  <Image src={event2} alt="Workshop" className="w-full h-32 object-cover rounded-t-md" />
                  <h4 className="text-lg font-bold mt-4">Workshop on Example 101</h4>
                  <p className="text-gray-500">5 min read</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mb-16" ref={(el:any) => (sectionRefs.current[2] = el)}>
          <h2 className="md:text-6xl text-3xl font-bold text-left mb-16">
            Create a New <span className="text-[#3560B3]">WissionAxis</span> Chapter
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-700 w-[40vw] mb-10 max-md:-mt-10 md:mb-0  max-md:w-full">
              Have you ever felt a burning desire to empower others, foster collaboration, and drive positive change in your community?
              WissionAxis might be the perfect platform to ignite that passion! Were on a mission to cultivate a global network of enthusiastic leaders
              who are dedicated to building a brighter future. Were thrilled to expand our vibrant community and welcome passionate individuals like you
              to establish new WissionAxis chapters in your city or state. WissionAxis chapters transcend mere social gatherings.
              They serve as vibrant hubs for fostering collaboration, igniting innovation, and empowering individuals to become changemakers
            </p>
            <Image src={event2} className="w-full md:w-1/2 bg-gray-200 h-[20rem] rounded-md mb-4 mt-09 md:mb-0" alt='' />
          </div>
          <button className=" md:w-1/4 w-1/3 bg-[#3560B3] max-lg:mt-10 text-white h-12 rounded-md">start your chapter</button>
        </section>
      </main>
    </div>
  );
};

export default Page;
