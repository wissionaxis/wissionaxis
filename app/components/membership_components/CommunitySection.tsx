'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CommunitySection = () => {
    return (
        <section className="flex flex-col items-center py-16 px-6  md:px-12 lg:px-24 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] flex-all gap-8 mb-16 ">
                <div className="flex flex-col items-center border-2 w-[40%] border-blue-600 rounded-lg p-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">800+</h2>
                    <p className="text-lg md:text-xl lg:text-2xl mb-4">Community members</p>
                    <div className="flex items-center">
                        <img src="https://via.placeholder.com/150" alt="Community Members" className="rounded-full" />
                        <span className="ml-2">Members</span>
                    </div>
                </div>
                <div className="flex flex-col items-center w-[40%] bg-blue-600 text-white rounded-lg p-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">5★</h2>
                    <p className="text-lg md:text-xl lg:text-2xl mb-4">Reviews</p>
                    <div className="flex items-center">
                        <img src="https://via.placeholder.com/150" alt="Community Members" className="rounded-full" />
                        <span className="ml-2">Members</span>
                    </div>
                </div>
            </div>
            <div className="flex  flex-col md:flex-row items-center w-full max-w-full">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
                    <img src="https://via.placeholder.com/800x600" alt="WhatsApp Chat" className="rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                        Join our <span className="text-green-500">WhatsApp</span> Community
                    </h2>
                    <p className="text-lg md:text-xl lg:text-xl mb-8">
                        Wissionaxis is a community initiative under <span className="font-bold">WissionTalks</span>, dedicated to supporting budding entrepreneurs by providing them with the resources, guidance, mentorship, and support necessary to launch and grow their startups.
                    </p>
                    <p className="text-lg md:text-xl lg:text-xl mb-8">
                        Our mission is to get 100,000 entrepreneurs in India by 2025, establishing Wissionaxis as the #1 community for budding entrepreneurs across the globe.
                    </p>
                    <Link href="/join" passHref>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-[15px] text-lg md:text-lg lg:text-lg hover:bg-blue-700 transition-colors">
            Join us now &#8594;
          </button>
        </Link>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
