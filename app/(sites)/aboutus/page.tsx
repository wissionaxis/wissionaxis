// App.tsx
import React from 'react';
import Image from 'next/image';
import entrepreneurialImage from '@/app/assets/images/e4.jpg'; 
import ourStoryImage from '@/app/assets/images/ourStory.jpg'; 
import ourValuesImage from '@/app/assets/images/ourValues.jpg'; 
import founderImage from '@/app/assets/images/e3.jpg'; 
import teamMemberImage from '@/app/assets/images/teamMember.jpg';

const App = () => {
  return (
    <div className="font-sans">

      <main className="p-8">

      <section className="text-center mb-16">
          <h2 className="md:text-6xl text-3xl font-bold pr-30 mb-4">
            Building a Thriving <span className="text-blue-500">Entrepreneurial</span> Ecosystem
          </h2>
          <h2 className="md:text-6xl text-3xl font-bold pr-30 mb-16">
            for Future India
          </h2>
          <div className="relative mx-auto mt-10 w-[1200px] h-[384px]">
            <Image
              src={entrepreneurialImage}
              alt="Entrepreneurial Ecosystem"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-5xl font-bold mb-8 text-blue-600">Our Story</h3>
          <div className="md:flex">
            <p className=" md:w-1/2 mb-4 md:mb-0 md:pr-5 text-xl ">
              Under the name Wissionaire, our company was founded in 2017 to advance entrepreneurship in the future by guiding young people with a strong sense of purpose and a well-connected community.
            </p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLP26ArHUgg2zL4YP2IfHn9HG3B6bOHyNkmg&s" alt="Our Story" className="md:w-1/2 h-90" />
          </div>
        </section>
        <section className="mb-12">
          <h3 className="text-5xl font-bold mb-10 text-blue-600">Our Values</h3>
          <div className="md:flex md:mr-20">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLP26ArHUgg2zL4YP2IfHn9HG3B6bOHyNkmg&s" alt="Our Values" className="md:w-1/2 mb-4 md:mb-0 md:pr-4" />
            <p className="md:w-1/2 text-xl">
             
              Our mission is built on the pillars of innovation, collaboration, inclusivity, integrity, and excellence...
              
              Our mission is built on the pillars of innovation, collaboration, inclusivity, integrity, and excellence...
              
              Our mission is built on the pillars of innovation, collaboration, inclusivity, integrity, and excellence...
              
              Our mission is built on the pillars of innovation, collaboration, inclusivity, integrity, and excellence...
              Our mission is built on the pillars of innovation, collaboration, inclusivity, integrity, and excellence...
            </p>
          </div>
        </section>
        <section className="mb-10 text-center">
          <h3 className="text-5xl text-blue-600 font-bold mb-10">Meet our founder</h3>
          <div className="md:flex md:items-center md:justify-center">
            <p className="md:w-1/2 mb-4 md:mb-0 md:pr-10 pl-30 text-xl">
              John Doe, the visionary founder of Wissionaxis, has dedicated his career to empowering entrepreneurs...
            </p>
            <Image
              src={founderImage}
              alt="Founder"
              className="md:w-1/2 md:max-w-xs rounded-full"
              layout="responsive"
              objectFit="cover"
              height={360} // Adjust based on your design
              width={360} // Replace with appropriate width
            />
          </div>
        </section>
        {/* <section className="text-center mb-12">
          <h3 className="text-5xl font-bold mb-10 text-blue-600">Meet our team members</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="p-4 border rounded">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLP26ArHUgg2zL4YP2IfHn9HG3B6bOHyNkmg&s" alt="Team Member" className="w-full h-auto mb-4" />
                <h4 className="font-bold">Vasken Mouradian</h4>
                <p>Sr. UX Designer</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <a href="#"><img src="https://via.placeholder.com/20" alt="Twitter" /></a>
                  <a href="#"><img src="https://via.placeholder.com/20" alt="LinkedIn" /></a>
                  <a href="#"><img src="https://via.placeholder.com/20" alt="Instagram" /></a>
                </div>
              </div>
            ))}
          </div>
        </section> */}
        <section className="h-[20rem] mt-10 flex-center text-center px-10">
      <div  className="w-[65%]  max-lg:w-full border-[2px]  p-10 rounded-[10px] border-[#3560B3] h-full flex-colm">
        <h1 className='text-[#3560B3] fonterh mb-2'>Subscribe to Our NewsLetter</h1>
        <p className="mb-4">
          Get WissionAxis{"'"}s latest news, learn about upcoming events, and access perks and discounts for your startup.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full max-w-md rounded-l-md border border-gray-300"
          />
          <button className="bg-[#3560B3] text-white px-4 py-2 rounded-r-md">Subscribe</button>
        </div>
      </div>
    </section>
      </main>
    </div>
  );
};

export default App;
