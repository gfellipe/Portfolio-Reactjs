import React, { useState } from "react";
import techxplorers from "../../assets/portfolio/tech-xplorers.png";
import snapClima from "../../assets/portfolio/snapClima.png";
import docesComAmor from "../../assets/portfolio/docesComAmor.png";
import promodoroTimer from "../../assets/portfolio/promodoroTimer.png";
import listaTarefas from "../../assets/portfolio/listaTarefas.png";
import ListApp from '../../assets/portfolio/listApp.png'
// import reactWeather from "../../assets/portfolio/reactWeather.jpg";

import { Link } from "react-router-dom";
import { Modal } from "../../Components/Modal/Modal";

export const Projetos = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projetos = [
    {
      id: 1,
      src: techxplorers,
      code: "https://github.com/gfellipe/Tech-Xplorers",
      demo: "https://tech-xplorers.vercel.app/",
      name: "Tech Xplorers",
      description:
        "O projeto Tech Xplorers é um blog que desenvolvi com o propósito educacional, visando a aplicação prática dos estudos em ReactJS. Durante a execução desse projeto, busquei aprofundar meus conhecimentos nesse framework JavaScript, explorando e implementando diversos conceitos essenciais.",
      technologies: ["ReactJs"],
    },
    {
      id: 2,
      src: snapClima,
      code: "https://github.com/gfellipe/SnapClima",
      demo: "https://gfellipe.github.io/SnapClima/",
      name: "SnapClima",
      description:
        "O SnapClima é um aplicativo de previsão do tempo desenvolvido com tecnologias web, incluindo HTML, CSS, JavaScript e integração com uma API de clima. Esse projeto combina habilidades front-end e o uso de dados em tempo real para oferecer aos usuários informações precisas sobre as condições climáticas.",
      technologies: ["Html", "Css", "Javascript"],
    },
    {
      id: 3,
      src: docesComAmor,
      code: "https://github.com/gfellipe/Site-Doces-Com-Amor-Atelier",
      demo: "https://gfellipe.github.io/Site-Doces-Com-Amor-Atelier/",
      name: "Doces com Amor",
      description:
        "Este projeto desenvolvi no início dos meus estudos no front-end foi feito pra minha noiva ele é so o layout ainda não tem funcionalidades, mais futuramente prentendo fazer um completo, com base nos meus conhecimentos atuis.",
      technologies: ["Html", "Css", "Javascript"],
    },
    {
      id: 4,
      src: promodoroTimer,
      code: "https://github.com/gfellipe/Projeto-Pomodoro-com-Hist-rico",
      demo: "https://projeto-pomodoro-com-hist-rico.vercel.app/",
      name: "Promodoro Timer",
      description:
        "Este é um projeto ReactJS desenvolvido utilizando TypeScript, Styled Components, Context API, Reducer, Hook Form, Zod e outras tecnologias modernas. O objetivo principal do projeto é implementar uma aplicação de Pomodoro, com a funcionalidade de histórico para acompanhar o tempo dedicado a cada tarefa..",
      technologies: [
        "ReactJs",
        "TypeScript",
        "Styled Components",
        "Context API e Reducer",
        "Hook Form",
        "Zod",
      ],
    },
    {
      id: 5,
      src: listaTarefas,
      code: "https://github.com/gfellipe/Lista-de-Tarefas",
      demo: "https://lista-de-tarefas-seven-zeta.vercel.app/",
      name: "Lista de tarefas",
      description:
        "Este é um projeto ReactJS. O objetivo principal do projeto é implementar uma aplicação de lista de tarefas com a funcionalidade de filtro e busca.",
      technologies: ["ReactJS"],
    },
    {
      id: 6,
      src: ListApp,
      code: "https://github.com/gfellipe/ListApp",
      demo: "https://list-app-blush.vercel.app/",
      name: "ListApp",
      description:
        "Seu assistente de compras pessoal: simplifique sua vida, crie sua lista de compras de forma fácil e eficiente.",
      technologies: ["ReactJS"],
    },
  ];

  return (
    <div
      name="Projetos"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projetos
          </p>
          <p className="py-6">Confira alguns dos meus trabalhos aqui.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projetos.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                className="rounded-md duration-200 hover:scale-105 cursor-pointer"
                title={`Clique para mais informações `}
                onClick={() => {
                  setSelectedProject({
                    id,
                    src,
                    demo,
                    code,
                    name: projetos[id - 1].name,
                    description: projetos[id - 1].description,
                    technologies: projetos[id - 1].technologies,
                  });
                  setModalOpen(true);
                }}
              />
              <div className="flex items-center justify-center">
                <Link
                  to={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </Link>
                <Link
                  to={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};
