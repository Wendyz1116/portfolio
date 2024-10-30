const Grid = () => {
  const languages = [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML",
    "Matlab",
    "CSS",
    "C",
    "Assembly",
  ];

  const technologies = [
    "React",
    "React Native",
    "Node.js",
    "PyTorch",
    "TensorFlow",
    "Next.js",
    "Firebase",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Git",
  ];

  const highlights = [
    "React",
    "Python",
    "JavaScript",
    "HTML",
    "PyTorch",
    "Next.js",
    "Firebase",
    "Appwrite",
  ];

  return (
    <section id="about" className="py-12 h-full flex flex-col">
      <h1 className="heading">About me </h1>

      <div
        className="flex flex-1 flex-col md:flex-row
      p-4 gap-8 mt-4 w-full bg-slate-90 items-center justify-center"
      >
        <div className="bg-slate-80 h-full flex flex-col items-center justify-center w-full space-y-4">
          <p className="body">
            Hello! I am a junior at MIT studying Computer Science and
            Engineering with a passion for artificial intelligence. My primary
            interest lies in developing software that uses{" "}
            <span className="text-purple">
              data and user-friendly interfaces to help individuals collaborate
              with and better understand their environment
            </span>
            .
          </p>

          <p className="body">
            I have experience in creating thoughtful software solutions in areas
            such as{" "}
            <span className="text-purple">
              sustainability, marketing, and language learning
            </span>
            , and I am eager to continue empowering users to engage with the
            world more effectively.
          </p>

          <p className="body">
            In my free time, I enjoy traveling and connecting with people from
            diverse backgrounds. I also love creating digital art and scrapbooks
            to capture and appreciate these experiences, as well as exploring
            various creative outlets.
          </p>

          <p className="body">
            Thank you for visiting my portfolio. Please feel free to contact me
            through email or{" "}
            <a
              href="https://www.linkedin.com/in/wendy-zhang38"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:text-violet-500"
            >
              LinkedIn
            </a>{" "}
            to learn more about my experiences and discuss opportunities!
          </p>
        </div>

        {/* Bottom/Right side */}
        <div className="flex flex-col items-center bg-red-5 justify-center w-[80vw]">
          <h1 className="subheading text-purple my-4">Technical Skills:</h1>

          {/* Skills bullets */}
          <div className="flex w-fit justify-between gap-32 md:gap-12">
            <div>
              <h1 className="subheading my-2">Languages</h1>
              <ul className="bullets space-y-2">
                {languages.map((language, idx) => (
                  <li key={idx}>
                    •{" "}
                    <span
                      className={`${
                        highlights.includes(language) ? "text-purple" : ""
                      }`}
                    >
                      {language}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="subheading my-2">Technologies</h1>
              <ul className="bullets space-y-2">
                {technologies.map((technology, idx) => (
                  <li key={idx}>
                    •{" "}
                    <span
                      className={`${
                        highlights.includes(technology) ? "text-purple" : ""
                      }`}
                    >
                      {technology}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="my-4 text-xs text-purple">
            Skills that I especially love and have a lot of experience with
          </p>
        </div>
      </div>
    </section>
  );
};

export default Grid;
