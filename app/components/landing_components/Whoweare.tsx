import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-16 -mt-20">
      <div className="bg-[#3560B3] text-white p-8 rounded-lg min-h-[14.5rem] flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p>
          Wissionaxis is a comprehensive initiative to empower individuals and communities, offering knowledge, resources, and networking opportunities. By providing a platform for people to connect, share, and grow, Wissionaxis aims to inspire and support over 100,000 entrepreneurs, leaders, and changemakers by 2025.
        </p>
      </div>
      <div className="bg-[#3560B3] text-white p-8 min-h-[14.5rem] rounded-lg flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p>
          Revolutionising the entrepreneurial landscape by fostering innovation, creativity, and collaboration, Wissionaxis seeks to create a global community of forward-thinking individuals and organisations. Through workshops, seminars, and mentorship programs, we aim to cultivate the next generation of successful entrepreneurs.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
