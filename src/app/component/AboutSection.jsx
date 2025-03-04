"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "@/app/component/TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc grid grid-cols-2 pl-2">
        
        <li>Next.js</li>
        <li>React</li>
        <li>Sanity</li>
        <li>Python</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>TailwindCss</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Inter from Degree College in Computer Science</li>
        <li>Web Developer from GIAIC</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/download.jpg" width={500} height={500} className="rounded"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          As a skilled Web Developer and UI/UX Designer, I specialize in creating responsive, user-friendly websites that combine functionality with exceptional design. With a strong focus on problem-solving and attention to detail, I craft digital experiences that not only look stunning but also deliver seamless performance. 
          </p>
          <div className="flex flex-row justify-start  mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            
          </div>
          <div className= "mb-16 mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;