import React from "react";

export const Modal = ({ isOpen, onRequestClose, project }) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";

  if (!isOpen || !project) {
    return null;
  }

  const { name, description, technologies } = project;

  return (
    <div className={modalClasses}>
      <div
        className="fixed inset-0 bg-gradient-to-b from-black to-gray-800 opacity-50 "
        onClick={onRequestClose}
      ></div>
      <div className="bg-gradient-to-b from-black to-gray-800 p-4 md:p-8 rounded-lg shadow-lg z-10 max-w-md w-full max-h-64 overflow-auto">
        <div className="text-center">
          <h2 className="text-2xl  md:text-3xl font-bold mb-2 md:mb-4">
            {name}
          </h2>
          <p className=" mb-4">{description}</p>
          <h3 className="text-xl  font-bold mb-2">
            Tecnologias Utilizadas
          </h3>
          <ul className="text-center  pl-4">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <button
            onClick={onRequestClose}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
