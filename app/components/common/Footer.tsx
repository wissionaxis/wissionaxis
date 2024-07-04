// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/app/assets/images/logo-nav.png';
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 mt-10">
      <div className="container  min-h-[30vh] flex-colm px-10">
        <div className="mb-4 md:mb-0   min-h-[10rem] w-full">
          <div className="w-[10%] h-full flex-center">
            <Image src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  w-full items-center justify-between text-sm">
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
