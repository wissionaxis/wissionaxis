'use client';
import React, { useState, useEffect, useRef, FormEventHandler, FormEvent } from 'react';
import Link from 'next/link';
import { LinksType } from '@/app/constants/type';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from "next-auth/react";
import { LogOut } from 'lucide-react';

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

  const handleLogout = (e: FormEvent) => {
    e.preventDefault();
    signOut();
  }

  const Links: LinksType[] = [
    { name: 'Home', linked: '/' },
    { name: 'Membership', linked: '/membership' },
    { name: 'Chapters', linked: '/chapters' },
    { name: 'About Us', linked: '/aboutus' },
    { name: 'Contact', linked: '/contact' }
  ];

  return (
    <header className="flex items-center justify-center h-[16vh] w-full p-3 max-md:p-1 relative ">
      <nav className=" w-[95vw] md:p-6 p-3  flex justify-between items-center rounded-full " ref={sectionRef}>
        <div className="flex items-center text-black text-2xl font-bold">
          <Link href="/" className="flex items-center h-[1.2rem] ml-3">
            {/* <Image src={Logo} alt="Logo" width={40} height={40} className="h-auto w-auto" /> */}
            <h1 className='md:ml-3 text-[#3560B3]'>Wission Axis</h1>
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
        <div className="flex items-center">
          <div className="hidden md:block">
            <Link
              href={userEmail ? '#' : "/authentication"}
              className={`bg-[#3560B3] text-sm text-[#3560B3] py-2 px-4 rounded-full transition-colors ${pathname === '/register' ? 'text-blue-600' : 'text-white'}`}
            >
              {userEmail ? userEmail.split('@')[0] : "Register / Login"}
            </Link>
          </div>
          <div className={`hidden md:block ml-5 ${!userEmail && 'md:hidden' }`}>
            <button
              onClick={handleLogout}
              className={`bg-[#3560B3] text-sm text-[#3560B3] py-2 px-2 rounded-full flex-center ${pathname === '/register' ? 'text-blue-600' : 'text-white'}`}
            >
              <LogOut size={17} />
            </button>
          </div>
        </div>
        <div className="md:hidden bg-[#3560B3] p-2 rounded-full">
          <button onClick={toggleMenu} className="text-white focus:outline-none mt-1 mr-1">
            <svg className="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>
        <div className={`absolute top-28 right-10 px-6  items-start flex flex-col rounded-[20px] border-none w-2/3 z-[99999] bg-[#3560B3] overflow-hidden ${!isOpen ? 'hidden' : ''}`}>
          {isOpen && Links.map((t: LinksType, index: number) => (
            <Link
              href={t.linked}
              key={index}
              className={`text-white hover:text-gray-300 transition-colors p-2 w-full ${pathname === t.linked ? 'text-white' : 'text-gray-400'} ${index === 0 && 'mt-3'}`}
            >
              {t.name}
            </Link>
          ))}
          {isOpen && (
            <Link
              href={userEmail ? '#' : "/authentication"}
              onClick={userEmail ? () => signOut() : undefined}
              className={`block mb-3 bg-[#3560B3] text-white py-2 ml-2 rounded-full hover:bg-gray-100 transition-colors`}
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
