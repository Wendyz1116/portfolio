import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="">
      <div
        className="h-full min-h-screen h-screen w-full dark:bg-black-100 bg-white
        dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex t-12 *:items-center justify-center z-0"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pt-20"
        />
      </div>

      <div className="flex justify-center relative my-4 h-screen pt-12">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="text-center body">Hi! My name is</p>

          <TextGenerateEffect
            words="Wendy Zhang"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center mb-4 body">
            I'm a junior at the{" "}
            <a href="#education" className="text-purple">
              Massachusetts Institute of Technology
            </a>
            , majoring in Computer Science and Engineering, with a passion for
            AI. In my free time, I also enjoy creating coding projects for fun.
          </p>

          <a href="#contact">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
