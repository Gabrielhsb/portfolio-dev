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
  { name: "Wordpress" },
];

export default function SectionAbout() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Conheça-me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Sobre mim!
            </h1>
            <p>
              Olá, eu sou Gabriel, um{" "}
              <span className="font-bold">{"engenheiro de software"}</span>{" "}
              altamente motivado e ambicioso.
            </p>
            <br />
            <p>
              Graduei-me em Ciência da Computação pela Universidade Federal de
              Lavras em 2022 e tenho trabalhado na área desde então.
            </p>
            <br />
            <p>
              Além do trabalho, tenho vários hobbies e paixões que me mantêm
              ocupado. Entre eles, sou particularmente apaixonado por jogos,
              desde consoles portáteis até PCs Gamers.
            </p>
            <br />
            <p>
              Para mim, é{" "}
              <span className="font-bold text-teal-500">
                essencial nunca se acomodar
              </span>{" "}
              e sempre buscar crescimento, inclusive atualmente estou fazendo
              uma pós graduação em{" "}
              <span className="font-bold text-teal-500">
                Egenharia de Software
              </span>
              . Tenho paixão pela tecnologia e um desejo constante de
              ultrapassar limites. Estou animado para ver aonde minha carreira
              me levará e sempre aberto a novas oportunidades. 🙂
            </p>
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Minhas Habilidades</h1>
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
