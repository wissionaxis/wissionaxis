import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center md:items-start py-12 px-4 sm:px-6 lg:px-8">
      {/* Left Side: Contact Form */}
      <div className="w-full md:w-1/2 bg-white p-8 border rounded-lg shadow-lg mx-4 my-4">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Get In <span className="text-blue-500">Touch</span> With Us
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-lg mb-2 text-gray-700" htmlFor="name">Name</label>
            <input className="w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700 p-2" type="text" id="name" name="name" />
          </div>
          <div>
            <label className="block text-lg mb-2 text-gray-700" htmlFor="email">E-Mail</label>
            <input className="w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700 p-2" type="email" id="email" name="email" />
          </div>
          <div>
            <label className="block text-lg mb-2 text-gray-700" htmlFor="message">Message</label>
            <textarea className="w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700 p-2" id="message" name="message" ></textarea>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg w-full text-lg">Submit</button>
          </div>
        </form>
      </div>

      {/* Right Side: Contact Details */}
      <div className="w-full md:w-1/2 bg-white p-8 border rounded-lg shadow-lg mx-4 my-4">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Contact Details</h3>
          <p className="text-lg text-gray-700 mb-4">Feel free to get in touch with us through the following details or follow us on social media.</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800">Phone Number:</h3>
          <p className="text-blue-500 text-lg">9876543210</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800">E-Mail:</h3>
          <p className="text-blue-500 text-lg">xyzcompany@gmail.com</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800">Address:</h3>
          <p className="text-blue-500 text-lg">Hyderabad, Telangana</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Socials:</h3>
          <div className="flex space-x-6 mt-4">
            <a href="#" className="text-blue-500 text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-blue-500 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-blue-500 text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default ContactUs;
