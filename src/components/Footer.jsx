import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="sm:hidden w-full h-[40px] text-gray-300">
      <ul className="flex items-center justify-center">
        <li>
          <a href="https://www.linkedin.com/in/pradyumna-d-95a88123b/" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a href="https://github.com/YARE0909" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/PradyumnaD7" target="_blank" rel="noreferrer">
            <FaTwitter size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
