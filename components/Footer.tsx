import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer
      className="w-full h-full pt-52 bg-black-10 flex items-center justify-end flex-col pb-10"
      id="contact"
    >
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-16 mb-96 min-h-24 max-h-24">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">Get In Touch!</h1>
        <p className="text-white-200 md:mt-10 my-4 text-center">
          Currently looking for Software Engineering or related internships for
          Summer 2024.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex w-full mt-32 md:flex-row flex-col justify-between items-center gap-4 mb-0">
        <p className="md:text-sm text-xs font-light text-white-200">
          Portfolio inspired by: Adrian Hajdin
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300
              hover:opacity-80"
            >
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
