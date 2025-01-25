import React from "react";
import Teamlead from '../assests/Lead.jpg'
import { useTheme } from "../Context/ThemeContext";
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import Lead from '../assests/Lead2.jpg'
import RupeshSir from "./RupeshSir";
const TeamLead = () => {
  const { theme } = useTheme()
  return (
    <>
     
    <div className={`flex flex-col md:flex-row  items-center justify-center min-h-[80vh] ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} px-12 py-12`}>
      <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
        <div className="w-60 h-60 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#0F9D58] shadow-xl sm:w-80 sm:h-80">
          <img
            src={Lead}
            alt="Team Lead"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className={`md:w-1/2 w-full text-justify md:text-left space-y-6 md:px-12 lg:px-16 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        <div className="flex items-center justify-center md:justify-start">
          {/* Any other content you might want to add here */}
        </div>

        <h1 className={`text-5xl  font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>GDG IPSA - Lead</h1>
        <h2 className={`text-3xl font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          Sonali Singh
        </h2>
        <p className={`text-gray-600 leading-relaxed ${theme === "dark" ? "text-white" : "text-gray-600"}`}>
          As the GDG on Campus Organizer for 2024, my goal is to empower students with knowledge of
          emerging technologies and provide opportunities to learn and grow. With extensive experience
          in various communities and as a Google Cloud mentor, I’ve gained valuable insights that I strive to share
          with others. I believe that behind every successful event is a dedicated team working tirelessly to make
          it happen. Together, we aim to build an inclusive and vibrant community where everyone can learn, innovate,
          and thrive. Join us on this journey and be part of an exciting learning experience!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() => window.open('https://www.linkedin.com/in/sonali-singh2003/', '_blank')}
            className="relative inline-flex items-center justify-center gap-3 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-2 hover:ring-offset-2 hover:ring-indigo-500"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0077B5] via-[#0077B5] to-[#006396]"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#0077B5] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white flex items-center gap-2">
              <FaLinkedin className="w-5 h-5" />
              Connect on LinkedIn
            </span>
          </button>

          <button
            onClick={() => window.open('https://www.instagram.com/_sonrisaaa_1?igsh=MXByajloMGJrZmcwdA==', '_blank')}
            className="relative inline-flex items-center justify-center gap-3 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-2 hover:ring-offset-2 hover:ring-pink-500"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white flex items-center gap-2">
              <FaInstagram className="w-5 h-5" />
              Follow on Instagram
            </span>
          </button>
        </div>
      </div>
    </div>
    <div className={`flex flex-col md:flex-row  items-center justify-center min-h-[80vh] ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} px-12 py-12`}>
    <RupeshSir/>
    </div>
    </>

  );
};

export default TeamLead;

