import React, { useState } from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const [hoverStates, setHoverStates] = useState<boolean[]>({});

  const handleMouseEnter = (id: number) => {
    setHoverStates((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setHoverStates((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="py-12 w-full" id="work">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((experience) => (
          <Button
            key={experience.id}
            duration={10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            onMouseEnter={() => handleMouseEnter(experience.id)}
            onMouseLeave={() => handleMouseLeave(experience.id)}
            hover={hoverStates[experience.id] || false}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 items-start"
          >
            <div className="flex flex-col items-start p-4 space-y-2">
              <h1 className="text-start items-start subheading">
                {experience.title}
              </h1>
              <p className="body text-purple">{experience.company}</p>
              <p className="body text-purple">{experience.dates}</p>
              <ul className="text-start space-y-2 pt-4 list-disc ml-4">
                {experience.bullets.map((bullet) => (
                  <li>{bullet}</li>
                ))}
              </ul>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
