import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-[#f3f4f6] text-center">
      <h2 className="text-4xl font-bold mb-8">Subscribe to our Newsletter!</h2>
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
    </section>
  );
};

export default Newsletter;
