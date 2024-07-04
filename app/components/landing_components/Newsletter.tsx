import React from 'react';

const Newsletter = () => {
  return (
    <section className="h-[20rem] mt-10 flex-center text-center px-10">
     <div className="w-[65%] py-10  max-lg:w-full border-[2px] rounded-[10px] border-[#3560B3] h-full flex-colm">
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
  );
};

export default Newsletter;
