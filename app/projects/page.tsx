/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "AI Notes - LLM",
    description:
      "FlowBrain is an intelligent note-taking app that enhances your productivity by combining easy note-taking with an AI-powered chatbox.",
    stack: [
      { name: "Next.js" },
      { name: "OpenAI" },
      { name: "Pinecone" },
      { name: "MongoDB" },
      { name: "Prisma" },
      { name: "Clerk" },
      { name: "Shadcn UI" },
    ],
    image: "/assests/projects/ainote.png",
    live: "https://ai-note-app-three.vercel.app/",
    github: "https://github.com/ZhenniLin/ai-note-app",
  },
  {
    num: "02",
    category: "frontend",
    title: "Mapty",
    description:
      "This is my first coding project. Using very basic stacks to build a map marker application",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assests/projects/mapty.png",
    live: "https://mapty-zhennilin.netlify.app/",
    github: "https://github.com/ZhenniLin/Mapty-project",
  },
  {
    num: "03",
    category: "fullstack",
    title: "The Wild Oasis",
    description:
      "Developed a management application for a small boutique hotel with 8 luxurious wooden cabins , incorporating Supabase for backend data management and authentication",
    stack: [{ name: "Vite" }, { name: "React" }, { name: "Supabase" }],
    image: "/assests/projects/the-wild-oasis.png",
    live: "https://wild-oasis-zhennilin.netlify.app/login",
    github: "https://github.com/ZhenniLin/the-wild-oasis",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Library Management",
    description:
      "A book management platform where users can search, borrow, return books, leave ratings, and handle late fees, while admins manage books and user inquiries.",
    stack: [
      { name: "Vite" },
      { name: "React" },
      { name: "Tailwind.css" },
      { name: "SpringBoot" },
      { name: "SpringBoot" },
    ],
    image: "/assests/projects/library.png",
    live: "https://library-front.com/home",
    github: "https://github.com/ZhenniLin/library-application",
  },
  {
    num: "05",
    category: "backend",
    title: "Microservices",
    description: "Still learning and building...",
    stack: [{ name: "SpringBoot" }, { name: "Docker" }, { name: "..." }],
    image: "/assests/projects/library.png",
    live: "",
    github: "",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%]xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div
                className="text-8xl leading-none font-extrabold text-transparent"
                style={{
                  WebkitTextStroke: "3px black",
                }}
              >
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[40px] font-bold leading-none text-black group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <h2 className="text-[32px] font-bold leading-none text-black/80 group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-black/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap max-w-full">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-md font-bold text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-black/20 "></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/15 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white">
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/15 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white">
                        <p>Git repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-accent/25 rounded-lg border-2 border-accent p-2">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-white/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          alt="image-project"
                          src={project.image}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-sm"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
