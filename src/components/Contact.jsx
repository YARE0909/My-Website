import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/eb7ad9cb-3d7f-4bc2-99d9-c2f6ad8b8747" className="flex flex-col max-w-[600px] w-full">
        <div className="sm:text-right flex items-center justify-center pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-300 text-shadow-lg">
            Contact
          </p>
        </div>
        <div className="flex justify-center items-center text-center font-semibold">
            <p>Submit the form below or shoot me an e-mail at pradyumnad092004@gmail.com</p>
          </div>
          <input type="text" placeholder="Name" name='name' className="my-4 p-2 rounded-lg bg-[#ccd6f6] text-gray-600 font-semibold" />
          <input type="email" placeholder="E-Mail" name='email' className="my-1 p-2 rounded-lg bg-[#ccd6f6] text-gray-600 font-semibold" />
          <textarea name="message" rows="10" placeholder="Message" className="my-1 p-2 rounded-lg bg-[#ccd6f6] text-gray-600 font-semibold"></textarea>
          <button className="text-white border-2 border-cyan-400 rounded-md px-6 py-3 my-2 flex items-center w-fit hover:bg-transparent bg-cyan-400 hover:border-cyan-400 transition duration-300 hover:scale-105">
            Submit
          </button>
      </form>
    </div>
  );
};

export default Contact;
