"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#f8f8f8] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/Yugandhara Strategic Holdings.svg"
            alt="logo"
            width={150}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        {/* Hamburger Menu for Small Screens */}
        <div className="block md:hidden">
          <button
            className="text-black focus:outline-none"
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`w-[300px] h-full flex-col md:flex-row items-center justify-between ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto">
            <a href="#" className="cursor-pointer py-2 md:py-0">
              About me
            </a>
            <a href="#" className="cursor-pointer py-2 md:py-0">
              Services
            </a>
            <a href="#" className="cursor-pointer py-2 md:py-0">
              Contact Us
            </a>
          </div>
        </div>

        {/* Optional: Social Icons */}
        {/* <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
