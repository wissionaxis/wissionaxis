'use client'
import { FC, useEffect, useRef } from 'react';
import gsap,{Power1} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const KeyFeatures: FC = () => {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (lineRef.current && featuresRef.current) {
      const features = Array.from(featuresRef.current.children) as HTMLElement[];

      gsap.fromTo(
        lineRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: Power1.easeInOut,
          duration:40,
          delay:0.2,
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 20%',
            // end: 'bottom bottom',
            scrub: true,
          }
        })
      }
    }
        
  , []);

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Key Features</h1>
      <div className="w-full max-w-5xl bg-white  rounded-lg p-8 flex relative">
        <div ref={lineRef} className="absolute left-3 top-0 w-1 bg-blue-600"></div>
        <div ref={featuresRef} className="pl-6 space-y-8">
          <Feature 
            title="Educational Content and Resources"
            description="Wissionaxis provides entrepreneurs with a wealth of educational resources, including regular workshops and webinars on sales, marketing, fundraising, and more."
            highlight
          />
          <Feature 
            title="Mentorship and Guidance" 
            description="Our mentorship programs connect budding entrepreneurs with experienced entrepreneurs, investors, and industry experts for one-on-one mentorship and guidance." 
          />
          <Feature 
            title="Networking and Collaboration" 
            description="Wissionaxis organises regular online and offline events, including pitch nights, networking meet-ups, and conferences." 
          />
          <Feature 
            title="Support Services" 
            description="Entrepreneurs benefit from partnerships with service providers, offering credits and discounts on essential services like cloud hosting, legal assistance, accounting, and MVP development." 
          />
          <Feature 
            title="Recognition and Visibility" 
            description="We showcase member achievements through blogs, podcasts, and social media, highlighting success stories within the community." 
          />
          <Feature 
            title="Global Outreach" 
            description="Through international partnerships, Wissionaxis provides members with international exposure and opportunities." 
          />
        </div>
      </div>
    </div>
  );
};

type FeatureProps = {
  title: string;
  description: string;
  highlight?: boolean;
};

const Feature: FC<FeatureProps> = ({ title, description, highlight }) => (
  <div className="transform transition-transform duration-500 mb-8">
    <h2 className={`text-2xl font-bold ${highlight ? 'text-blue-600' : 'text-gray-800'} mb-2`}>{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default KeyFeatures;
