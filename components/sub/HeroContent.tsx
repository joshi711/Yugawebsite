"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import {
  Skill_data,
} from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";




const HeroContent = () => {
  return (
    <div>
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 mt-20 md:mt-40 w-full z-[20]"
  >
    <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[300px] md:max-w-[600px] w-auto h-auto"
      >
        <Image
          src="/picture.png"
          alt="work icons"
          height={350}
          width={350}
          className="mx-auto"
        />
      </motion.div>
    </div>
  
    <motion.div
      variants={slideInFromRight(0.8)}
      className="w-full h-full flex justify-center items-center mt-8 md:mt-0"
    >
      <div className="flex flex-row justify-around flex-wrap gap-4 md:gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </motion.div>
   
  
      <div className="w-full h-full z-[-10] opacity-30 absolute bottom-0 flex items-center justify-center bg-cover "
              style={{ backgroundImage: "url('/Bottom design 1.svg')" }}

      >
          {/* <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          /> */}
          
        </div>
    </motion.div>
        {/* <p className="text-[30px] text-black font-medium mt-[10px] text-center mb-[15px]">WE ARE YUGA </p>
        <svg height="5" width="300" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="10" x2="250" y2="10" style={{ stroke: 'black', strokeWidth: 12 }} />
    </svg> */}
      {/* <div className="flex items-center justify-left">
      <p className="text-[30px] text-black font-medium mr-[10px] responsive-text"
      style={{ marginLeft: '200px' }}>WE ARE YUGA</p>
      <svg height="02" width="400" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="6" x2="250" y2="6" style={{ stroke: 'black', strokeWidth: 12 }} />
      </svg>
    </div> */}


<div className="flex items-center justify-left sm:justify-left">
  <p className="text-[20px] sm:text-[25px] md:text-[30px] text-black font-medium mr-2 sm:mr-4 md:mr-10 ml-4 sm:ml-8 md:ml-20" style={{ marginLeft: '200px' }}>
    WE ARE YUGA
  </p>
  
  {/* For mobile devices */}
  <svg height="2" width="100" className="block sm:hidden" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="6" x2="100" y2="6" style={{ stroke: 'black', strokeWidth: 12 }} />
  </svg>

  {/* For tablets */}
  <svg height="2" width="200" className="hidden sm:block md:hidden" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="6" x2="200" y2="6" style={{ stroke: 'black', strokeWidth: 12 }} />
  </svg>

  {/* For larger screens */}
  <svg height="2" width="400" className="hidden md:block" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="6" x2="400" y2="6" style={{ stroke: 'black', strokeWidth: 12 }} />
  </svg>
</div>

    </div>
  );
};

export default HeroContent;
