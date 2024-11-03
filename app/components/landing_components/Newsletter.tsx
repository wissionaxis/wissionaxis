'use client'

import React from 'react'

const Cta = () => {
  return (
    <footer className='mx-auto max-w-7xl sm:px-6 lg:px-8 my-20 '>
      <div className="relative isolate overflow-hidden px-6 py-20 text-center sm:rounded-3xl sm:border sm:px-16 sm:shadow-md">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Subscribe to Our Newsletter
        </h2>
        <h3 className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Get WissionAxis latest news, learn about upcoming events, and access perks and discounts for your startup.
        </h3>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full max-w-sm rounded-md border-none border-gray-300 text-center sm:text-left sm:rounded-l-md"
          />
          <button className="bg-[#3b82f6] text-white px-4 py-2 w-1/6 max-w-xs rounded-md sm:rounded-r-md sm:rounded-l-none">
            Subscribe Now
          </button>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          ></circle>
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#3b82f6" />
              <stop offset={1} stopColor="#1d4ed8" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </footer>
  )
}

export default Cta
