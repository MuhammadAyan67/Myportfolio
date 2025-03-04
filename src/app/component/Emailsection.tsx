"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
const EmailSection = () => {
  

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/MuhammadAyan67">
          <Image src={"/images/download2.png"} alt="Github Icon" width={30} height={30} className="rounded-full"/>
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-ayan-7408b0301/">
            <Image src={"/images/download1.png"} alt="Linkedin Icon" width={30} height={30} className="rounded-full"/>
          </Link>
          <Link href="https://www.instagram.com/_ayan__.15">
            <Image src={"/images/download4.png"} alt="Instagram Icon" width={30} height={30} className="rounded-full "/>
          </Link>
          <Link href="https://www.facebook.com/share/162tiqjiv3/">
            <Image src={"/images/download5.jpeg"} alt="Facebook Icon" width={30} height={30} className="rounded-full "/>
          </Link>
        </div>
      </div>
      <div>
         
          <form
  action="https://formspree.io/f/xpwqorjr"
  method="POST"
>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="ayan@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
               Your name
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <>
  {/* From Uiverse.io by adamgiebl */}
  <button type="submit" className="button1">
    <div className="svg-wrapper-1">
      <div className="svg-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
          />
        </svg>
      </div>
    </div>
    <span>Send</span>
  </button>
</>

          </form>
        
      </div>
      
    </section>
  );
};

export default EmailSection;