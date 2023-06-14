import React from "react";
import Image from "next/image";

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Styled Components" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "Figma" },
  { name: "SASS" },
  { name: "Agile methodologies" },
];

export default function SectionAbout() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hello, I&#39;m Gabriel, a{" "}
              <span className="font-bold">{"highly motivated"}</span> and
              <span className="font-bold">{" ambitious"}</span> software
              engineer.
            </p>
            <br />
            <p>
              I graduated in Computer Science from the Federal University of
              Lavras in 2022 and have been working in the field ever since.
            </p>
            <br />
            <p>
              In addition to my work, I have several hobbies and passions that
              keep me busy. Among them, I&#39;m particularly passionate about
              gaming, from portable consoles to gaming PCs.
            </p>
            <br />
            <p>
              For me, it&#39;s{" "}
              <span className="font-bold text-teal-500">
                essential to never settle
              </span>{" "}
              and always strive for growth. I have a passion for technology and
              a constant desire to push boundaries. I&#39;m excited to see where
              my career will take me and always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((skill, id) => {
                return (
                  <p
                    key={id}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {skill.name}
                  </p>
                );
              })}
            </div>
            <Image
              src="/about-image.png"
              alt=""
              width={315}
              height={315}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
