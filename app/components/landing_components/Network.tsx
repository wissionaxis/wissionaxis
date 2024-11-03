'use client'
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NetworkModel from '../effects/NetworkModel';
import { Users, BookOpen, Hammer, Scale } from 'lucide-react';
import { Section } from '@/app/constants/type';
import NetworkImage from '../../assets/images/networkimage.jpg'
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const NetworkBuildScale = () => {

  const sections: Section[] = [
    {
      heading: 'Network',
      description: 'Join our community to access industry events, participate in free networking opportunities, engage in collaborative workshops, and enjoy networking lunches.',
      icon: <Users size={20} color="#fff" />
    },
    {
      heading: 'Learn',
      description: 'Enhance your skills through expert-led workshops, specialized training courses, mentorship programs, and innovative bootcamps.',
      icon: <BookOpen size={20} color="#fff" />
    },
    {
      heading: 'Build',
      description: 'Receive support for your projects with incubation services, advanced analytics, resource allocation, and guidance for entering international markets.',
      icon: <Hammer size={20} color="#fff" />
    },
    {
      heading: 'Scale',
      description: 'Take your initiatives to the next level with scalable solutions, growth strategies, and access to funding resources to amplify your impact.',
      icon: <Scale size={20} color="#fff" />
    }
  ];

  useEffect(()=>{

  },[])



  return (
    <section className="py-1 text-center">
      <h2 className="font-medium max-md:px-5 mb-8 overflow-hidden text-left fonter max-md:leading-[3rem] leading-[4.5rem] pl-20">
        Network, Learn, <br />Build, Scale.
      </h2>
      <p className='w-[60%] leading-10 text-left pl-20 max-md:w-full max-md:px-5'>
        Meet like-minded people. Learn about Sales, Marketing, and Fundraising. Find early adopters and co-founders. Establish collaborations with other startups. Crack new deals for your business.
      </p>
      <div className="flex max-lg:flex-col justify-between gap-8 px-20 max-md:px-5  mt-10">
        <div className="lg:w-[30%] imageEffect relative">
          <Image
            src={NetworkImage}
            alt='image'
          />
        </div>
        <div className="grid  lg:grid-cols-2 lg:w-[60%] gap-20 max-lg:gap-10">
          {
            sections.map((item: Section, index: number) => (
              <div className=" flex flex-col" key={index}>
                <div className="h-10 relative w-full  flex items-center">
                  <span className='bg-[#3560B3] h-full w-10 flex-center rounded-full'>{item.icon}</span>
                  <h2 className='font-semibold text-xl ml-2'>{item.heading}</h2>
                </div>
                <div className="relative">
                  <p className='text-left leading-8 mt-2'>{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default NetworkBuildScale;
