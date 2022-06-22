import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import PythonImg from "../assets/Python.png";
import GitHub from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <div className="sm:text-right flex items-center justify-center pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-300 text-shadow-lg">
              Skills
            </p>
          </div>
          <div className="flex justify-center items-center text-center">
            <p>These are the languages I have worked with</p>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 font-semibold">
          <div className="shadow-sm shadow-[#121314] hover:scale-105 duration-300 rounded-lg">
            <img src={HTML} alt="HTML Icon" className="w-20 mx-auto" />
            <p>HTML</p>
          </div>
          <div className="shadow-sm shadow-[#121314] hover:scale-105 duration-300 rounded-lg">
            <img src={CSS} alt="HTML Icon" className="w-20 mx-auto" />
            <p>CSS</p>
          </div>
          <div className="shadow-sm shadow-[#121314] hover:scale-105 duration-300 rounded-lg">
            <img src={JavaScript} alt="HTML Icon" className="w-20 mx-auto" />
            <p>JavaScript</p>
          </div>
          <div className="shadow-sm shadow-[#121314] hover:scale-105 duration-300 rounded-lg">
            <img src={ReactImg} alt="HTML Icon" className="w-20 mx-auto" />
            <p>React</p>
          </div>
          <div className="shadow-sm shadow-[#121314] hover:scale-105 duration-300 rounded-lg">
            <img src={PythonImg} alt="HTML Icon" className="w-20 mx-auto" />
            <p>Python</p>
          </div>
          <div className="shadow-sm shadow-[#121314] hover:scale-105 duration-300 rounded-lg">
            <img src={GitHub} alt="HTML Icon" className="w-20 mx-auto" />
            <p>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
