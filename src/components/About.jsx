import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        
          <div className="sm:text-right flex items-center justify-center pb-8 pl-4 glitch">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-300">
              About
            </p>
          </div>
          
        
        <div className="max-w[1000px] w-full grid sm:grid-cols-2 gap-8 px-10">
          <div className="sm:text-right text-4xl font-bold text-cyan-400">
            <p>
              Hello There! I'm Pradyumna D, pleased to meet you. Feel free to
              look around!
            </p>
          </div>
          <div className="font-semibold text-lg">
            <p>
              I really like to code stuff and make my own creations. I am
              currently learning Web Development making websites and fun web
              apps. I always look forward to learning new things!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
