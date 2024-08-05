'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/assets/images/logo-nav.png';
import { LinksType } from '@/app/constants/type';
import gsap from 'gsap';
import { Power1 } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to('.navHeight', {
        height: '33vh',
        ease: 'Power4.easeInOut',
        duration: 1,
        delay: 0.5
      });
    } else {
      gsap.to('.navHeight', {
        height: '0',
        ease: 'Power4.easeInOut',
        duration: 1,
        border: 'none'
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 400,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          // delay: 0.3,
          ease:Power1.easeInOut,
        }
      );
    }
  }, []);

  const Links: LinksType[] = [
    { name: 'Home', linked: '/' },
    { name: 'Membership', linked: '/membership' },
    { name: 'Chapters', linked: '/chapters' },
    { name: 'About Us', linked: '/aboutus' },
    { name: 'Contact', linked: '/contact' }
  ];

  return (
    <header className="flex items-center overflow-hidden z-[999] justify-center h-[16vh] w-full p-3 relative bg-white">
      <nav className="bg-[#3560B3] w-[95vw] p-6 flex justify-between items-center rounded-full shadow-md" ref={sectionRef}>
        {/* logo */}
        <div className="flex items-center text-white text-2xl font-bold">
          <Link href="/" className="flex items-center h-[1.2rem] ml-3">
            <Image src={Logo} alt="Logo" width={40} height={40} className="h-auto w-auto" />
          </Link>
        </div>
        {/* logo */}
        <div className="hidden md:flex space-x-12 text-white">
          {Links.map((t: LinksType, index: number) => (
            <Link href={t.linked} key={index} className="hover:text-gray-300 transition-colors text-[0.99rem] font-light">
              {t.name} 
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Link href="/register" className="bg-white text-sm text-blue-600 py-2 px-4 rounded-full hover:bg-gray-100 transition-colors">
            Register
          </Link>
          <Link href="/Login" className="ml-10 bg-white text-sm text-blue-600 py-2 px-4 rounded-full hover:bg-gray-100 transition-colors">
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none mt-1 mr-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>
        <div className={`navHeight absolute top-24 left-10 right-0 flex-colm rounded-[20px] border-none w-[85%] z-[99999] bg-[#3560B3] overflow-hidden ${!isOpen ? 'hidden' : ''}`}>
          {isOpen && Links.map((t: LinksType, index: number) => (
            <Link href={t.linked} key={index} className={`text-white hover:text-gray-300 transition-colors p-2 w-full text-center text- ${index === 0 && 'mt-3'}`}>
              {t.name}
            </Link>
          ))}
          {isOpen && (
            <Link href="/register" className="block mb-3 bg-white text-blue-600 py-2 px-4 rounded-full hover:bg-gray-100 transition-colors mt-2">
              Register
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
