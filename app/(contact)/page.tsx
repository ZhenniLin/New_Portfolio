"use client";

import { Button } from "@/components/ui/button";

import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+46) 767 520 898",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "zhennilin1115@gmail.com",
  },
  ,
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Stockholm, Sweden",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-stone-200  rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-black/60">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
                dignissimos.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone number" />
                {/* select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">front end</SelectItem>
                      <SelectItem value="cst">back end</SelectItem>
                      <SelectItem value="mst">devops</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* btn */}
              <Button
                size="lg"
                className="max-w-40 hover:bg-accent/50 bg-accent text-white rounded-[20px]"
              >
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h=[72px] text-accent bg-stone-200 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item?.icon}</div>
                    </div>
                    <div>
                      <p className="text-black/60">{item?.title}</p>
                      <h3 className="text-xl">{item?.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
