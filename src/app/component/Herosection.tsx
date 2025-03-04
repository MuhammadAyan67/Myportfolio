"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Herosection = () => {
  return (
    <section className="lg:py-13 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-12  ">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white sm:text-5xl mb-4 text-2xl lg:text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ayan",
                1000,
                "Web Developer",
                1000,
                "UX/UI Designer",
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
          A passionate Frontend Developer with expertise in crafting visually appealing and highly functional websites. With a strong focus on responsive design and seamless user experiences
          </p>
          <div>
            <button className="px-6 py-3 font-bold sm:w-fit w-full rounded-full mr-4 bg-gradient-to-br  from-indigo-500 via-sky-500 to-emerald-500 hover:text-white text-black shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out">
              <ScrollLink to="contact" smooth={true} duration={500}>
                Hire Me
              </ScrollLink>
             
            </button>
            <button className="px-1 py-1 sm:w-fit w-full rounded-full bg-gradient-to-tr  from-indigo-500 via-sky-500 to-emerald-500 hover:bg-slate-800 text-white mt-3 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out">
              <span className="block bg-[#020d0f] hover:bg-gradient-to-tl from-indigo-500 via-sky-500 to-emerald-500 rounded-full px-5 py-2">
              
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-10 mb-20 lg:mt-0">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={"/images/ayan.jpg"}
              alt="Profile Photo"
              width={300}
              height={300}
              className="rounded-full lg:m-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
