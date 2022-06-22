import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-cyan-400">Hello There! I am</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] text-shadow-lg">
          Pradyumna D
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#7d88aa]">
          I'm a Programmer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a programmer who makes cool stuff via programming.
          Currently, I'm focused on making exceptional Web Apps
        </p>
        <div>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <button className="text-white border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-cyan-400 hover:border-cyan-300 transition duration-300 hover:scale-105">
              About Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
