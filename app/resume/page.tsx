/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDocker,
  FaAws,
  FaLinux,
} from "react-icons/fa";
import { AiOutlineOpenAI } from "react-icons/ai";
import { BiLogoSpringBoot } from "react-icons/bi";
import {
  SiFlask,
  SiMysql,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { FileDownIcon } from "lucide-react";

// about data
const about = {
  title: "About me",
  description: "👩‍💻: I'm a passionate and self-motivated developer.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jennie Lin",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+46) 767520898",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Chinese",
    },
    {
      fieldName: "Email",
      fieldValue: "zhennilin1115@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Chinese, Swedish",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "👩‍💻: I'm a passionate and self-motivated developer.",
  items: [
    {
      company: "Luday Inc.",
      position: "Full Stack Intern",
      duration: "08.2024 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "🎓: I'm a final year master student at Stockholm University majoring in Information Security.",
  items: [
    {
      institution: "Stockholm university",
      degree: "Master's degree - Information Security",
      duration: "2023 - 2025",
    },
    {
      institution: "Macau University of Science and Technology",
      degree: "Bachelor's degree - Business / Marketing ",
      duration: "2019 - 2023",
    },
  ],
};

// skill data
const skills = {
  title: "My skills",
  description:
    "🚀: I'm curious and passionate about new technologies and stacks, with the ability to quickly learn and apply them. ",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
      type: "front",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
      type: "front",
    },
    {
      icon: <FaReact />,
      name: "react",
      type: "front",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
      type: "front",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
      type: "front",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
      type: "back",
    },
    {
      icon: <FaJava />,
      name: "Java",
      type: "back",
    },
    {
      icon: <BiLogoSpringBoot />,
      name: "SpringBoot",
      type: "back",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
      type: "front",
    },
    {
      icon: <FaPython />,
      name: "Python",
      type: "back",
    },
    {
      icon: <SiFlask />,
      name: "Flask",
      type: "back",
    },
    {
      icon: <FaLinux />,
      name: "Linux",
      type: "devops",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
      type: "devops",
    },
    {
      icon: <FaAws />,
      name: "AWS",
      type: "devops",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      type: "data",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      type: "data",
    },
    {
      icon: <DiRedis />,
      name: "Redis",
      type: "data",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma",
      type: "data",
    },
    {
      icon: <AiOutlineOpenAI />,
      name: "OpenAI",
      type: "ai",
    },
  ],
};

const Resume = () => {
  const [selectedSkillType, setSelectedSkillType] = useState("front");

  const handleSkillTypeChange = (type: string) => {
    setSelectedSkillType(type);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.2, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 items-center">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="about">Certificate</TabsTrigger>
            <Link href="Jennie_Lin.pdf" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-1 border-accent border-2 text-accent hover:text-white"
              >
                <span>Download CV</span>
                <FileDownIcon className="text-xl" />
              </Button>
            </Link>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] =">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-accent/15 border-2 border-accent/5 h-[184px] py-6 px-10 rounded-[25px] flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-4">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-black/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] =">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-accent/15 border-2 border-accent/5 h-[184px] py-6 px-10 rounded-[25px] flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>

                          <div className="flex items-center gap-4">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-black/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                  <span
                    className={`cursor-pointer ${
                      selectedSkillType === "front"
                        ? "text-accent font-bold border-b-2 border-accent"
                        : ""
                    }`}
                    onClick={() => handleSkillTypeChange("front")}
                  >
                    Front-end
                  </span>
                  <span
                    className={`cursor-pointer ${
                      selectedSkillType === "back"
                        ? "text-accent font-bold border-b-2 border-accent"
                        : ""
                    }`}
                    onClick={() => handleSkillTypeChange("back")}
                  >
                    Back-end
                  </span>
                  <span
                    className={`cursor-pointer ${
                      selectedSkillType === "data"
                        ? "text-accent font-bold border-b-2 border-accent"
                        : ""
                    }`}
                    onClick={() => handleSkillTypeChange("data")}
                  >
                    Data
                  </span>
                  <span
                    className={`cursor-pointer ${
                      selectedSkillType === "devops"
                        ? "text-accent font-bold border-b-2 border-accent"
                        : ""
                    }`}
                    onClick={() => handleSkillTypeChange("devops")}
                  >
                    DevOps
                  </span>
                  <span
                    className={`cursor-pointer ${
                      selectedSkillType === "ai"
                        ? "text-accent font-bold border-b-2 border-accent"
                        : ""
                    }`}
                    onClick={() => handleSkillTypeChange("ai")}
                  >
                    AI
                  </span>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList
                    .filter((skill) => skill.type === selectedSkillType)
                    .map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-accent/15 rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-100">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-black:60 text-black/80">
                          {item.fieldName}:
                        </span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
