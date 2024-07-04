import React from 'react';

const NetworkBuildScale = () => {
  return (
    <section className="py-16 text-center">
      <h2 className=" font-medium max-md:px-10 mb-8 text-left fonter max-md:leading-[3rem] leading-[4.5rem] pl-20">Network, Learn, <br/>Build, Scale.</h2>
      <p className='w-[60%] leading-10 text-left pl-20 max-md:w-full max-lg:px-10 max-md:text-center'>Meet like minded people. Learn about Sales, Marketing, and Fundraising. Find early adopters and co-founders. Establish collaborations with other startups. Crack new deals for your business.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-20 max-md:px-10 mt-10">
        <div className="bg-white p-8 rounded-lg shadow-md min-h-[40vh]">
          <h3 className="text-3xl font-bold mb-4 text-[#3560B3] ">Network</h3>
          <ul className="text-left  flex-colm list-inside">
            <li className='bottom-liner'>Access to Industry Events</li>
            <li className='bottom-liner'>Free Networking Opportunities</li>
            <li className='bottom-liner'>Collaborative Workshops</li>
            <li className='bottom-liner'>Networking Lunches</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold mb-4 text-[#3560B3] ">Learn</h3>
          <ul className="text-left  flex-colm list-inside">
            <li className='bottom-liner'>Expert-Led Workshops</li>
            <li className='bottom-liner'>Specialist Training Courses</li>
            <li className='bottom-liner'>Mentorship Programs</li>
            <li className='bottom-liner'>Innovation Bootcamps</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold mb-4 text-[#3560B3] ">Build</h3>
          <ul className="text-left  flex-colm list-inside">
            <li className='bottom-liner'>Incubation Support</li>
            <li className='bottom-liner'>Advanced Analytics</li>
            <li className='bottom-liner'>Resource Allocation</li>
            <li className='bottom-liner'>International Market Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NetworkBuildScale;
