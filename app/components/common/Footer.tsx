// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/app/assets/images/logo-nav.png';
import { poppin } from '@/app/constants';
import { FaBehance, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 mt-10">
      <div className="min-h-[30vh] flex-colm px-10">
        <div className="mb-4 md:mb-0  h-[13rem] w-full  flex-bet">
          <div className="w-[15%] h-full flex-center">
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="w-1/2  h-full flex-bet">
            <div className="h-full flex-col flex justify-evenly items-start text-white text-left ">
              <><Link href="/" className={`${poppin.className} text-white`}>Home</Link></>
              <><Link href="/aboutus" className={`${poppin.className} text-white`}>About me</Link></>
              <><Link href="/chapters" className={`${poppin.className} text-white`}>Chapters</Link></>
              <><Link href="/events" className={`${poppin.className} text-white`}>Events</Link></>
              <><Link href="/contact" className={`${poppin.className} text-white`}>Contacts</Link></>
            </div>
            <div className="  w-[40%] h-full flex-colm">
              <div className="">
                Connect with Us
              </div>
              <div className="flex-all w-full">
                <Link href="https://www.youtube.com/@fortunebox49" target="_blank"><FaWhatsapp className="text-2xl text-white" /></Link>
                <Link href="https://www.youtube.com/@fortunebox49" target="_blank"><FaYoutube className="text-2xl text-white" /></Link>
                <Link href="https://www.linkedin.com/company/fortunebox/" target="_blank"><FaLinkedin className="text-2xl text-white" /></Link>
                <Link href="https://www.instagram.com/fortunebox.in" target="_blank"><FaInstagram className="text-2xl text-white" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  mt-10 w-full items-center justify-between text-sm">
          <div className="">

            <Link href="/privacy-policy" className="hover:underline mb-2 md:mb-0 md:mr-4">Privacy Policy</Link>

            <Link href="/terms-of-service" className="hover:underline mb-2 md:mb-0 md:mr-4">Terms of Service</Link>

            <Link href="/code-of-conduct" className="hover:underline mb-2 md:mb-0 md:mr-4">Code of Conduct</Link>
          </div>
          <div className="text-xs mt-4 md:mt-0">
            © 2024 Vision Axis All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
