import React from "react";
import GDGLOGO2 from "../assests/GDGLOGO2.png";
import team from "../assests/team.jpg";
import { useTheme } from "../Context/ThemeContext";

const TeamHome = () => {
    const { theme, toggleTheme } = useTheme();
  
  return (
<div className={theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}>
  <section className="w-full h-[85vh] flex flex-col sm:flex-col-reverse lg:flex-row items-center">
    {/* Left Section */}
    <div
      className={`left w-full lg:w-1/2 h-full flex flex-col justify-center lg:pl-24 px-8 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center mb-4">
          <img className="h-28 w-28" src={GDGLOGO2} alt="GDG Logo" />
          <div className="ml-4 flex flex-col">
            <h1
              className={`text-5xl lg:text-7xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              <span className="">x</span> IPSA
            </h1>
            <h2
              className={`text-2xl lg:text-3xl font-semibold ${
                theme === 'dark' ? 'text-blue-500' : 'text-blue-600'
              }`}
            >
              On Campus
            </h2>
          </div>
        </div>
      <h2 className="text-4xl lg:text-6xl font-bold text-yellow-400 mb-6">Team</h2>
      <p className="text-lg lg:text-xl font-medium leading-relaxed">
        At GDG IPSA, we are a group of passionate tech enthusiasts, developers,
        and innovators committed to fostering a vibrant tech community.
      </p>
    </div>

    {/* Right Section */}
    <div className="right w-full lg:w-1/2 h-full flex items-center justify-center">
      <div className="relative w-[90%] lg:w-[80%] h-[70%] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          src={team}
          alt="Team"
        />
      </div>
    </div>
  </section>
</div>

  );
};

export default TeamHome;
