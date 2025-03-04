"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCards";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ecommerce Website",
    description: "Real-time E-commerce website with API integration using sanity.io and next.js",
    image: "/images/project1.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/MuhammadAyan67/ecommerce2.git",
    previewUrl: "https://ecommerce2-x1zj.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "First Portfolio Website using Next.js and Tailwind CSS",
    image: "/images/project3.png",
    tag: ["All", "Web","Mobile"],
    gitUrl:"https://github.com/MuhammadAyan67/portfolio.git",
    previewUrl: "https://portfolioayan-three.vercel.app",
  },
  {
    id: 3,
    title: "Tic Tac Toe Game",
    description: "Tic Tac Toe Game using HTML, CSS, and JavaScript with a great UI/UX",
    image: "/images/project4.png",
    tag: ["All", "Mobile","Web"],
    gitUrl: "https://github.com/MuhammadAyan67/Tic-Tac-Toe.git",
    previewUrl: "https://ayan-tictactoe.netlify.app",
  },
   {
    id: 4,
    title: "Unit Converter",
    description: "A simple unit convertor app using Python and Streamlit",
    image: "/images/unit.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/MuhammadAyan67/streamlit.git",
    previewUrl: "https://unit-convertor-by-ayan.streamlit.app/",
  },
  {
    id: 5,
    title: "To-Do List",
    description: "A simple To-Do List app using Python and Streamlit",
    image: "/images/todo.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/MuhammadAyan67/streamlit.git",
    previewUrl: "https://to-do-list-by-ayan.streamlit.app/",
  },
  {
    id: 6,
    title: "Resume Builder ",
    description: "Resume Builder using HTML, CSS, and JavaScript",
    image: "/images/project2.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/MuhammadAyan67/mile5.git",
    previewUrl: "https://resumebuilder-by-ayan.vercel.app",
  }
  ,{
    id: 7,
    title: "Bmi Calculator",
    description: "A simple BMI Calculator app using Python and Streamlit",
    image: "/images/bmi.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/MuhammadAyan67/streamlit.git",
    previewUrl: "https://bmi-calculator-by-ayan.streamlit.app/",
  },
  {
    id: 8,
    title: "Blog Website",
    description: "Authentication and CRUD operations",
    image: "/images/blog.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/MuhammadAyan67/bloog.git",
    previewUrl: "https://blog-by-ayan.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;