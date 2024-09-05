"use client";

import { PinContainer } from "./ui/Pin";

const Clients = () => {
  const courses = [
    "Data Structures and Algorithms",
    "Discrete Mathematics for CS",
    "Advances in Computer Vision",
    "Machine Learning",
    "AI, Decision Making, and Society",
    "Linear Algebra",
    "C and Assembly",
    "Computation Structures",
  ];

  const activities = [
    {
      club: "E33 Production",
      position: "Production Manager and Skilled Technician",
      link: "https://e33-productions.mit.edu/",
    },
    {
      club: "MIT Energy & Climate Night",
      position: "Marketing Director and Webmaster",
      link: "https://mitenergynight.org/",
    },
    {
      club: "MIT Terrascope",
      position: "Associate Advisor",
      link: "https://terrascope.mit.edu/",
    },
    {
      club: "MITxHarvard Women In AI",
      position: "",
      link: "https://mitharvardwai.github.io/",
    },
    { club: "DanceTroupe", position: "", link: "https://dancetroupe.mit.edu/" },
    { club: "Asian Dance Team", position: "", link: "http://adt.mit.edu/" },
  ];

  return (
    <section id="education" className="py-12 overflow-y-hidden">
      <h1 className="heading text-purple">Education</h1>

      <div
        className="flex flex-1 flex-col md:flex-rw
      p-4 gap-8 mt-4 w-full bg-slate-90 items-center justify-center"
      >
        <div className="bg-slate-80 h-full flex flex-col items-center justify-center w-full space-y-4">
          <ul>
            <li className="text-purple">
              <h2 className="subheading">
                Massachusetts Institute of Technology
              </h2>
            </li>
            <li className="bullets">
              <strong className="text-purple">Major:</strong> B.S. in Computer
              Science and Engineering
            </li>
            <ul>
              <li className="bullets">• GPA: 4.83/5.00</li>
              <li className="bullets">• Expected graduation: May 2026</li>
            </ul>
          </ul>
        </div>

        {/* Bottom section */}
        <div className="flex flex-row justify-between w-full md:flex-cl md:items-cente ">
          <div className="flex flex-col items-center justify-start md:justify-centr w-[80vw] md:w-[30vw border-r border-white-200 pr-4">
            <h1 className="subheading text-purple my-4 mx-4 md:mx-0 text-center">
              Related Coursework:
            </h1>
            <div>
              <ul className="bullets space-y-2 list-disc ml-4">
                {courses.map((course) => (
                  <li id={course}>{course}</li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="flex flex-col items-center bg-red-5 justify-start md:justify-cente w-[80vw] md:w-[30vw pl-4
          "
          >
            <h1 className="subheading text-purple my-4 mx-4 md:ml-4 text-center">
              Activities and Societies:
            </h1>
            <div>
              <ul className="bullets space-y-2 list-disc ml-4">
                {activities.map((activity) => (
                  <li id={activity.club}>
                    <div>
                      {activity.position ? `${activity.position} @ ` : ""}
                      <a
                        className="text-purple hover:text-violet-500"
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {activity.club}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
