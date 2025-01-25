import React, { useState } from "react";
import { useTheme } from "../Context/ThemeContext";

const TeamNavbar = ({ setSelectedGroup }) => {
  const teamGroups = [
    "Lead",
    "Tech",
    "Graphics & AIML",
    "EventScape",
    "CineCraft",
    "TrendSetters",
  ];

  const [activeGroup, setActiveGroup] = useState("Lead");

  const handleClick = (group) => {
    setSelectedGroup(group);
    setActiveGroup(group);
  };

  const { theme, toggleTheme } = useTheme();  
  return (

  
      <div className={`flex items-center justify-center ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
        <nav
          className={`${
            theme === "dark"
              ? "bg-gray-800 text-white border-gray-700 shadow-lg"
              : "bg-white text-gray-700 border-gray-200 shadow-2xl"
          } rounded-lg px-6 py-4 mx-auto border-t-2 border-b-2 transition-all duration-300`}
          style={{
            boxShadow: theme === "dark" ? "0px 8px 15px rgba(255, 255, 255, 0.2), 0px -8px 15px rgba(255, 255, 255, 0.1)" : "0px 8px 15px rgba(0, 0, 0, 0.2), 0px -8px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex justify-center gap-4 flex-wrap">
            {teamGroups.map((group) => (
              <button
                key={group}
                onClick={() => handleClick(group)}
                className={`relative px-6 py-2 rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 ${
                  activeGroup === group
                    ? theme === "dark"
                      ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
                      : "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
                    : theme === "dark"
                    ? "hover:text-white hover:bg-gradient-to-r from-blue-600 to-purple-600"
                    : "hover:text-white hover:bg-gradient-to-r from-blue-400 to-purple-400"
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </nav>
      </div>
    );
    
  
};

export default TeamNavbar;
