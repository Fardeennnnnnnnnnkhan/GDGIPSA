import React  from 'react'
import { useTheme } from '../Context/ThemeContext';
import faculty from "../assests/faculty-advisor.jpg";
import { Calendar, MapPin, Users } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";
const RupeshSir = () => {
     const { theme  } = useTheme();
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme === "dark" ? "text-white" : "text-gray-800"
          }`}>
          Faculty Advisor
          <div className={`${theme === "dark"
            ? "w-40 h-1 bg-gradient-to-r from-yellow-400 to-red-400"
            : "w-28 h-1 bg-[#0F9D58]"
            } mx-auto mt-4`}></div>
        </h2>

        <div className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-white"
          } shadow-lg rounded-lg p-6`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={faculty}
                alt="Faculty Advisor"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"
                }`}>
                Prof. Rupesh Dubey
              </h3>
              <p className={`text-lg font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}>
                HoD Electronics and Communication Engineering
              </p>

              <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}>
                With over 15 years of experience in electrical and computer engineering, Prof. Rupesh Dubey,
                Faculty Advisor of Google Developers Group (GDG) On Campus, brings invaluable industry insights to the
                Department of Electronics and Communication Engineering (ECE). His expertise in technology and
                research has been key in bridging the gap between academia and practical applications, fostering
                innovation in both education and industry collaboration.
              </p>

              <button
                onClick={() => window.open('https://www.linkedin.com/in/rupesh-dubey-38035b23/', '_blank')}
                className={`group flex items-center gap-3 px-6 py-3 rounded-full ${theme === "dark"
                  ? "bg-[#0077B5] hover:bg-[#006396]"
                  : "bg-[#0077B5] hover:bg-[#006396]"
                  } text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                <FaLinkedin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  Connect on LinkedIn
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default RupeshSir
