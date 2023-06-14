import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Portfólio de Desenvolvedor",
    description:
      "Este projeto é um portfólio de desenvolvedor web criado com o objetivo de mostrar minhas habilidades e projetos. O portfólio é construído utilizando tecnologias modernas como TypeScript, Tailwind, Next.js e React, com um design responsivo que se adapta a diferentes dispositivos.",
    image: "/dev-portifolio.png",
    github: "https://github.com/Gabrielhsb/portfolio-dev/",
    link: "https://gabriel-portfolio-sepia.vercel.app/",
  },
  {
    name: "Recone",
    description:
      "Nosso projeto tem como objetivo combater o capacitismo, a discriminação e os preconceitos sociais contra pessoas neurodivergentes. Para isso, buscamos desconstruir preconceitos e fornecer reconhecimento profissional para essas pessoas.",
    image: "/recone-portifolio.png",
    github: "https://github.com/Gabrielhsb/recone-frontend",
    link: "#",
  },
  {
    name: "Podcastr",
    description:
      "O projeto é uma aplicação web desenvolvida em Next.js que consome uma API de podcasts e permite a reprodução desses conteúdos diretamente na página. Com um design moderno e intuitivo, o usuário pode navegar facilmente pelos episódios e escolher quais deseja ouvir.",
    image: "/podcast-portifolio.png",
    github: "https://github.com/Gabrielhsb/Podcastr",
    link: "#",
  },
  {
    name: "Landing Page de Venda",
    description:
      "Este projeto consiste em uma landing page de venda para promover um produto ou serviço específico. A página é projetada de forma atraente e persuasiva, com o objetivo de capturar a atenção do usuário e convertê-lo em um cliente. Foi utilizado como estudo de novas ferramentas a biblioteca chackra UI",
    image: "/landing-page.png",
    github: "https://github.com/Gabrielhsb/lading-page-miles",
    link: "https://lading-page-miles.vercel.app/",
  },
  {
    name: "Widget Feedback",
    description:
      "Um widget desenvolvido para ser utilizado em páginas da web que necessitam de uma opção para os usuários reportarem um bug ou sugerirem uma melhoria. Desenvolvido como um desafio/estudo na NLW 2022.",
    image: "/widget-portifolio.png",
    github: "https://github.com/Gabrielhsb/Widget-Feedback",
    link: "#",
  },
];

export default function SectionProjects() {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projetos
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
