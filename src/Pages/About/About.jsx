import React from "react";

export const About = () => {
  return (
    <div
      name="Sobre"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre
          </p>
        </div>

        <p className="text-xl mt-20">
          Desenvolvedor Front-End. Trabalho com desenvolvimento de software a
          mais ou menos 1 ano, melhorando o desempenho e integrações de
          aplicações e tenho experiência no desenvolvimento de sites de
          e-commerce e sistemas ERP usando React.js como tecnologia principal.
        </p>

        <br />

        <p className="text-xl">
          Sou apaixonado por construir sites e experiências pro usuário, ótimo
          jogador de equipe, simplificando processos para melhorar a experiência
          do cliente e solucionar problemas de projetos com eficiência.
        </p>
      </div>
    </div>
  );
};
