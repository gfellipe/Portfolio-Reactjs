import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      to: "https://www.linkedin.com/in/gabriel-fellipe/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GithHub <FaGithub size={30} />
        </>
      ),
      to: "https://github.com/gfellipe",
    },
    {
      id: 3,
      child: (
        <>
          E-mail <HiOutlineMail size={30} />
        </>
      ),
      to: "mailto:gfillipe@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Curriculo <BsFillPersonLinesFill size={30} />
        </>
      ),
      to: "/public/Currículo-Gabriel-Fellipe.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, to, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <Link
              to={to}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
