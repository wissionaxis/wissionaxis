import React from 'react';

const NetworkBuildScale = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-8">Network, Learn, Build, Scale.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 ">Network</h3>
          <ul className="text-left list-disc list-inside">
            <li>Access to Industry Events</li>
            <li>Free Networking Opportunities</li>
            <li>Collaborative Workshops</li>
            <li>Networking Lunches</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Learn</h3>
          <ul className="text-left list-disc list-inside">
            <li>Expert-Led Workshops</li>
            <li>Specialist Training Courses</li>
            <li>Mentorship Programs</li>
            <li>Innovation Bootcamps</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Build</h3>
          <ul className="text-left list-disc list-inside">
            <li>Incubation Support</li>
            <li>Advanced Analytics</li>
            <li>Resource Allocation</li>
            <li>International Market Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NetworkBuildScale;
