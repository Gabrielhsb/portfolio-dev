import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Dev Portifolio",
    description:
      "This project is a web developer portfolio created with the aim of showcasing my skills and projects. The portfolio is built using modern technologies such as TypeScript, Tailwind, Next.js, and React with a responsive design that adapts to different devices.",
    image: "/dev-portifolio.png",
    github: "https://github.com/Gabrielhsb/portfolio-dev/",
    link: "https://gabriel-portfolio-sepia.vercel.app/",
  },
  {
    name: "Recone",
    description:
      "Our project aims to combat ableism, discrimination, and social prejudice against neurodivergent people. To achieve this, we seek to break down prejudices and provide professional recognition for these individuals.",
    image: "/recone-portifolio.png",
    github: "https://github.com/Gabrielhsb/recone-frontend",
    link: "#",
  },
  {
    name: "Podcastr",
    description:
      "The  project is a web application developed in Next.js that consumes a podcast API and allows the playback of these contents directly on the page. With a modern and intuitive design, the user can easily navigate through the episodes and choose which ones to listen to.",
    image: "/podcast-portifolio.png",
    github: "https://github.com/Gabrielhsb/Podcastr",
    link: "#",
  },
  {
    name: "Sales Landing Page",
    description:
      "This project consists of a sales landing page to promote a specific product or service. The page is designed in an attractive and persuasive manner, with the goal of capturing the user's attention and converting them into a customer. It was used as a study of new tools, including the Chakra UI library.",
    image: "/landing-page.png",
    github: "https://github.com/Gabrielhsb/lading-page-miles",
    link: "https://lading-page-miles.vercel.app/",
  },
  {
    name: "Widget Feedback",
    description:
      "A widget developed to be used on web pages that require an option for users to report a bug or suggest an improvement. Developed as a challenge/study in NLW 2022.",
    image: "/widget-portifolio.png",
    github: " https://github.com/Gabrielhsb/Widget-Feedback",
    link: "#",
  },
];

export default function SectionProjects() {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, id) => {
          return (
            <div key={id}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {project.link !== "#" && (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
}
