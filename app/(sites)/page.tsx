'use client'
import Image from 'next/image';
import { SectionType } from '../constants/type';
import { useEffect } from 'react';
import gsap from 'gsap';
import { Power4 ,Power3} from 'gsap';
const Home = () => {
  const images = [
    '/path/to/your/image1.png',
    '/path/to/your/image2.png',
    '/path/to/your/image3.png',
  ];

  const sections: SectionType[] = [
    {
      id: '01',
      title: 'Webinars',
      description: 'We have successfully conducted over 300+ webinars this year.',
    },
    {
      id: '02',
      title: 'Start-Ups',
      description: 'We have successfully conducted over 300+ webinars this year.',
    },
    {
      id: '03',
      title: 'Seminars',
      description: 'We have successfully conducted over 300+ webinars this year.',
    },
  ];

 
  useEffect(() => {
    const tl = gsap.timeline();
   tl.fromTo('.Hero-Header h1', {
      translateX: '-200px',
      opacity: 0,
    }, {
      translateX: '0',
      opacity: 1,
      duration: 1,
      ease:"power1.inOut",
      delay: 0.5,
    }).fromTo('.Hero-Header p', {
      translateX: '-200px',
      opacity: 0,
    }, {
      translateX: '0',
      opacity: 1,
      duration: 1,
      ease:'power1.inOut',
      delay: 0.5,
    }).fromTo('.section-card', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'back.in',
      delay: 0.3,
    }) .fromTo('.action-button', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power4.out',
      delay:0.4
    })
    .fromTo('.animated-image', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power4.out',
      delay:0.4
    });
  }, []);


  return (
    <div className="min-h-screen bg-white py-10 flex justify-center items-center">
      <div className="w-[95%] min-h-[70vh] flex flex-col md:flex-row">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 md:w-2/3">
          <div className="mb-16 -mt-5 Hero-Header">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[500] mb-5 overflow-hidden">
              Empowering India{"'"}s <span className="textColor">Innovators</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl overflow-hidden">Your Gateway to a Thriving Entrepreneurial Ecosystem</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            {sections.map((section: SectionType, index: number) => (
              <div
                key={index}
                className="section-card flex-1 h-full mb-8 md:mb-0 relative"
              >
                <h2 className="text-5xl text-gray-200 mb-2 absolute left-0 top-0">
                  {section.id}
                </h2>
                <div className="relative w-full h-full mt-7 md:ml-7">
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-600 action-button  text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
              Join Community
            </button>
            <button className=" action-button border border-blue-600 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-100 transition-colors">
              Login
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-1/3 mt-8 md:mt-0">
          {images.map((src: string, index: number) => (
            <div
              key={index}
              className={`animated-image relative h-40 w-full md:w-1/2 mb-4 ${index % 2 === 0 ? 'self-start' : 'self-end'}`}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
