'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CommunityImage from '@/app/assets/images/event3.jpg'; // Update the path to your image

const WelcomeSection = () => {
  return (
    <section className="flex flex-col items-start py-16 px-6 md:px-12 lg:px-24 text-left">
      <div className="max-w-full  ">
        <h1 className="text-4xl md:text-5xl h-[7rem] leading-[6rem]  lg:text-4xl font-medium text-left mb-4">
         <span className='mb-4'> Welcome to Our Dynamic Community</span> <br/><span> and Ignite Your Potential</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-xl mb-8 w-[85%] text-left">
          Wissionaxis fosters a vibrant and engaging community through a variety of activities designed to empower entrepreneurs and foster collaboration.
        </p>
        <Link href="/join" passHref>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-[15px] text-lg md:text-lg lg:text-lg hover:bg-blue-700 transition-colors">
            Join us now &#8594;
          </button>
        </Link>
      </div>
      <div className="mt-10 w-full max-w-4xl h-[20rem]  mx-auto">
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
