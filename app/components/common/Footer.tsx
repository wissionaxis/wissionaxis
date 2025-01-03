import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/assets/images/logo-nav.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3560B3] text-white py-8 px-4 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between ">
        <div className="flex md:flex-col justify-between mb-4 max-md:items-center  flex-1 flex-wrap gap-4">
          <Link href="#" className="hover:underline">Work</Link>
          <Link href="#" className="hover:underline">Our story</Link>
          <Link href="#" className="hover:underline">Insights</Link>
          <Link href="#" className="hover:underline">Connect</Link>
        </div>

        <div className="flex md:w-1/2 justify-evenly max-md:flex-col relative max-md:mt-10 ">
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <Link href="#" className="hover:underline">LinkedIn</Link>
            <Link href="#" className="hover:underline">Instagram</Link>
            <Link href="#" className="hover:underline">Dribbble</Link>
            <Link href="#" className="hover:underline">Twitter</Link>
            <Link href={"mailto:wfw@gmail.com"} className='mt-20'>abc@gmail.com</Link>

          </div>
          <div className="flex flex-col md:w-1/2 items-center md:items-start space-y-2 text-center md:text-left mt- 6 md:mt-0">
            <p className='max-md:mt-6'>Let{"'"}s grab some coffee.</p>
            <p>We are based in Los Angeles but often come to San Francisco ☕</p>
          </div>
        </div>
      </div>
      <div className="text-center md:text-left mb-4 md:mb-0 mt-20 flex-bet">
        <p className="font-semibold text-xl">Wission Axis</p>
        <Image
          src={logo}
          alt='Image'
          width={30}
          height={10}
          className='w-10 h-6'
        />
      </div>
    </footer>
  );
};

export default Footer;
