'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/assets/images/logo-nav.png';
import { LinksType } from '@/app/constants/type';
import gsap from 'gsap';
import { Power1 } from 'gsap';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { data } = useSession();
  const userEmail: string | null | undefined = data?.user?.email;
  console.log(data);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Links: LinksType[] = [
    { name: 'Home', linked: '/' },
    { name: 'Membership', linked: '/membership' },
    { name: 'Chapters', linked: '/chapters' },
    { name: 'About Us', linked: '/aboutus' },
    { name: 'Contact', linked: '/contact' }
  ];

  return (
    <header className="flex items-center overflow-hidden z-[999] justify-center h-[16vh] w-full p-3 relative ">
      <nav className=" w-[95vw] p-6 flex justify-between items-center rounded-full " ref={sectionRef}>
        <div className="flex items-center text-black text-2xl font-bold">
          <Link href="/" className="flex items-center h-[1.2rem] ml-3">
            <Image src={Logo} alt="Logo" width={40} height={40} className="h-auto w-auto" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-12 text-black">
          {Links.map((t: LinksType, index: number) => (
            <Link
              href={t.linked}
              key={index}
              className={`transition-colors text-[0.99rem] font-light ${pathname === t.linked ? 'text-black' : 'text-gray-400'} hover:text-black`}
            >
              {t.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Link
            href={userEmail ? '#' : "/authentication"}
            className={`bg-[#3560B3] text-sm text-blue-600 py-2 px-4 rounded-full transition-colors ${pathname === '/register' ? 'text-blue-600' : 'text-white'}`}
          >
            {userEmail ? userEmail.split('@')[0] : "Register / Login"}
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none mt-1 mr-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>
        <div className={`absolute top-24 left-10 right-0 flex-col rounded-[20px] border-none w-[85%] z-[99999] bg-[#3560B3] overflow-hidden ${!isOpen ? 'hidden' : ''}`}>
          {isOpen && Links.map((t: LinksType, index: number) => (
            <Link
              href={t.linked}
              key={index}
              className={`text-white hover:text-gray-300 transition-colors p-2 w-full text-center ${pathname === t.linked ? 'text-white' : 'text-gray-400'} ${index === 0 && 'mt-3'}`}
            >
              {t.name}
            </Link>
          ))}
          {isOpen && (
            <Link
              href={userEmail ? '#' : "/authentication"}
              onClick={userEmail ? () => signOut() : undefined}
              className={`block mb-3 bg-[#3560B3] text-blue-600 py-2 px-4 rounded-full hover:bg-gray-100 transition-colors mt-2 ${pathname === '/register' ? 'text-blue-600' : 'text-gray-400'}`}
            >
              {userEmail ? "SignOut" : "Register / Login"}
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
