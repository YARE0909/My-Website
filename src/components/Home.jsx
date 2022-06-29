import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full font-semibold">
        <p className="text-cyan-400">Hello There! I am</p>
        <div className="content">
          <h1 className="text-[2.8rem] md:text-7xl">Pradyumna D</h1>
          <h1 className="text-[2.8rem] md:text-7xl">Pradyumna D</h1>
        </div>
        <h2 className="text-4xl sm:text-7xl font-bold text-white mt-20">
          I'm a Programmer.
        </h2>
        <p className="text-white py-4 max-w-[700px] font-semibold">
          Currently, I'm focused on making exceptional Web Apps
        </p>
        <div className="w-fit">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <button className="text-white border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-blue-900 hover:border-blue-900 transition duration-300 hover:scale-105">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
