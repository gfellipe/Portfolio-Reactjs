import React, { useState } from "react";
import techxplorers from "../../assets/portfolio/tech-xplorers.png";
import snapClima from "../../assets/portfolio/snapClima.png";
import docesComAmor from "../../assets/portfolio/docesComAmor.png";
import noteExperts from "../../assets/portfolio/note-experts.png";
import listaTarefas from "../../assets/portfolio/listaTarefas.png";
import ListApp from "../../assets/portfolio/listApp.png";
import MeuMercado from "../../assets/portfolio/meumercado.png";
import CoffeDelivery from "../../assets/portfolio/coffedelivery.png";
import SubscriManager from "../../assets/portfolio/subscrmanager.png";
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
      src: noteExperts,
      code: "https://github.com/gfellipe/Note-Experts",
      demo: "https://note-experts.vercel.app/",
      name: "Notes Experts",
      description:
        "O Note Experts é uma aplicação para transcrever texto para áudio, onde você pode adicionar uma nota através de digitação ou áudio, além de poder apagar e salvar as notas no localStorage.",
      technologies: [
        "ReactJs",
        "TypeScript",
        "Tailwind CSS",
        "Lucide",
        "Hook Form",
        "Sonner Radix UI",
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
    {
      id: 7,
      src: MeuMercado,
      code: "https://github.com/gfellipe/Meu-Mercado",
      demo: "https://meu-mercado-three.vercel.app/",
      name: "Meu Mercado",
      description:
        "Bem-vindo ao meu projeto de e-commerce! Este projeto foi desenvolvido como parte do meu estudo em ReactJS e Context API. Aqui, os usuários podem explorar produtos, adicionar itens ao carrinho e removê-los de maneira simples e intuitiva.",
      technologies: ["ReactJS", "Context API", "Mercado Livre AP"],
    },
    {
      id: 8,
      src: CoffeDelivery,
      code: "https://github.com/gfellipe/CoffeDelivery",
      demo: "https://coffe-delivery-sandy-seven.vercel.app/",
      name: "CoffeDelivery",
      description:
        "O Coffee Delivery é uma plataforma de entrega de café que facilita a seleção e o pedido de produtos. Você pode adicionar itens ao carrinho, ajustar a quantidade, confirmar o pedido e inserir dados de entrega.",
      technologies: [
        "ReactJS",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Axios",
        "React-Toastify",
      ],
    },
    {
      id: 9,
      src: SubscriManager,
      code: "https://github.com/gfellipe/SubscrManager",
      demo: "https://subscr-manager.vercel.app/",
      name: "SubscriManager",
      description:
        "O Gerenciador de Assinaturas é um aplicativo para gerenciar suas assinaturas, permitindo adicionar, categorizar, acompanhar datas de renovação e gerar relatórios de gastos. É uma ferramenta essencial para manter suas assinaturas organizadas e seus gastos sob controle.",
      technologies: [
        "ReactJS",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Recharts",
      ],
    },
  ];

  return (
    <div
      name="Projetos"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
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
