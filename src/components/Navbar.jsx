import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaUser,
  FaHome,
  FaClipboardList,
  FaPhone,
  FaMobile
} from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  window.addEventListener('DOMContentLoaded', () => {

  })

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-white shadow-sm">
      <div>
        <img src={Logo} alt="Logo Image" className="rounded-full hover:animate-wiggle w-10 md:w-16" />
      </div>

      {/*Menu*/}
      
      <ul className="flex">
        <li className="hover:scale-110 duration-300">
          <div className="hover-tooltip" data-tooltip="Home">
          <Link className="hover:text-cyan-300" to="home" spy={true} smooth={true} duration={500}>
            <FaHome />
          </Link>
          </div>
        </li>
        <li className="hover:scale-110 duration-300">
          <div className="hover-tooltip" data-tooltip="About">
          <Link className="hover:text-cyan-300" to="about" spy={true} smooth={true} duration={500}>
            <FaUser />
          </Link>
          </div>
        </li>
        <li className="hover:scale-110 duration-300">
          <div className="hover-tooltip" data-tooltip="Skills">
          <Link className="hover:text-cyan-300" to="skills" spy={true} smooth={true} duration={500}>
            <FaClipboardList />
          </Link>
          </div>
        </li>
        <li className="hover:scale-110 duration-300">
          <div className="hover-tooltip" data-tooltip="Contact">
          <Link className="hover:text-cyan-300" to="contact" spy={true} smooth={true} duration={500}>
            <FaMobile />
          </Link>
          </div>
        </li>
      </ul>

      

      {/*Social Icons*/}
      <div className="hidden md:flex lg:flex fixed flex-col top-[35%] left-0 font-semibold">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-blue-600 rounded-xl duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/pradyumna-d-95a88123b/" target="_blank" rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-[#171515] rounded-xl duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/YARE0909" target="_blank" rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-[#1DA1F2] rounded-xl duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/PradyumnaD7" target="_blank" rel="noreferrer"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
