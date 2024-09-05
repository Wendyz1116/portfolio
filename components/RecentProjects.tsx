"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-12 h-full flex flex-col" id="projects">
      <h1 className="heading">
        My <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-col items-center justify-center p-4 gap-16 mt-10 h-full">
        {projects.map((item) => (
          <div
            className="flex flex-1 items-center border border-white            
            flex-col justify-center w-full rounded-sm p-4 shadow-md shadow-white-100"
          >
            <h1 className="subheading">{item.title}</h1>
            <div
              className="flex flex-1 items-center
            flex-col md:flex-row justify-center w-full rounded-sm p-4"
              key={item.id}
            >
              {/* Image */}
              <div className="flex flex-col w-full h-full items-center justify-center">
                <div className="relative lg:w-[400px] lg:h-[300px] md:w-[300px] md:h-[225px] min-h-[150px] min-w-[200px]">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                    src={item.img}
                    alt="project image"
                    style={{ aspectRatio: "3 / 4" }}
                  />
                </div>
              </div>

              {/* TODO figure out border btw sections */}
              {/* <div className="hidden md:flex border-r border-gray-300"></div>
              <hr className="m-2 border h-full w-full border-white"></hr> */}

              {/* Description */}
              <div className="flex flex-col">
                <div className="flex flex-col items-center justify-between mt-7 mb-3">
                  <p className="body my-4 pb-4 border-b border-white-100 m-2 md:mx-8">
                    {item.des}
                  </p>
                  <div className="flex flex-col items-center w-full mx-2">
                    <div className="subheading mb-2 text-purple"> Used: </div>
                    <div className="flex flex-col items-center justify-center bg-slate-80 w-full">
                      <ul className="list-disc text-sm i bg-green-90 w-full grid grid-cols-2 gap-4 ml-4">
                        {item.used.map((language) => (
                          <li className="flex items-center justify-center">
                            • {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <a
                    className="flex text-sm text-purple hover:text-violet-500"
                    href={item.link}
                    target={item.newPage ? "_blank" : "_self"}
                    rel={item.newPage ? "noopener noreferrer" : undefined}
                  >
                    {item.linkText}
                    <FaLocationArrow
                      className="ms-2 mt-[2px]"
                      color="#CBACF9"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
