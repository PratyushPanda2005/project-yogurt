import Image from 'next/image';
import React from 'react';
import ScrollVelocity from './scrollvelocity';
import { globeLogo } from '@/config/testimonials';

const ScrollMarquee = () => {
  return (
    <div className="relative w-full">
      <div className="w-full bg-black text-white relative z-10 ">
        <ScrollVelocity
          texts={[
            <>
              <Image
                src={globeLogo}
                alt="Globe Logo"
                width={400}
                height={400}
                className="h-8 w-8 ml-4 2xl:ml-6 inline-block"
              />
              <span className="ml-4 2xl:ml-6 uppercase font-bold font-averta-std text-xl lg:text-3xl py-3 inline-block">
                student run
              </span>
            </>,
          ]}
          velocity={-100}
          className="flex items-center"
        />
      </div>
      <div className="bg-[#0617B0] text-white absolute top-0 -rotate-12 lg:-rotate-[8deg] w-full">
        <ScrollVelocity
          texts={[
            <>
              <Image
                src={globeLogo}
                alt="Globe Logo"
                width={400}
                height={400}
                className="h-8 w-8 ml-4 2xl:ml-6 inline-block"
              />
              <span className="ml-4 2xl:ml-6 uppercase font-bold font-averta-std text-xl lg:text-3xl py-3 inline-block">
                biggest hackathon
              </span>
            </>,
          ]}
          velocity={100}
          className="flex items-center"
        />
      </div>
    </div>
  );
};

export default ScrollMarquee;
