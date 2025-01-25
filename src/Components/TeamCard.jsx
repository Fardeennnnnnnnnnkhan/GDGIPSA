import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const TeamCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme, toggleTheme } = useTheme(); 

  return (
    <div
      className={`relative rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 overflow-hidden max-w-sm ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex flex-col items-center transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-40 h-40 rounded-full object-cover mb-6"
        />
        <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
          {member.name}
        </h3>
        <p className={`text-base ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
          {member.role}
        </p>
      </div>
  
      <div
        className={`absolute inset-0 rounded-lg flex flex-col items-center justify-center text-center transition-opacity duration-500 ease-in-out ${
          theme === "dark" ? "bg-gray-900 bg-opacity-90" : "bg-white bg-opacity-90"
        } ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <p className={`text-gray-300 mb-6 px-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          {member.description || "Enthusiastic team member dedicated to innovation."}
        </p>
        <div className="flex space-x-6">
          <Link
            to={member.linkedin}
            className={`text-gray-500 hover:text-blue-400 transition-transform transform hover:scale-125`}
          >
            <FaLinkedin className="w-7 h-7" />
          </Link>
          {member.role === "WebD Team Lead" ||
          member.role === "WebD Team Member" ||
          member.role === "Tech Lead" ? (
            <Link
              to={member.github}
              className="text-gray-500 hover:text-gray-100 transition-transform transform hover:scale-125"
            >
              <FaGithub className="w-7 h-7" />
            </Link>
          ) : (
            <Link
              to={member.instagram}
              className="text-gray-500 hover:text-pink-400 transition-transform transform hover:scale-125"
            >
              <FaInstagram className="w-7 h-7" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default TeamCard;



