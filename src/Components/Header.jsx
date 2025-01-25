import React ,{useState , useContext} from 'react'
import  gdg from '../assests/gdg.png'
import logo from "../assests/GDGLOGO.png"
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { useTheme } from '../Context/ThemeContext'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
const Header = () => {
  const { theme, toggleTheme } = useTheme();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}>
    <header className="w-full px-8 py-2 flex justify-between items-center border-b border-gray-200">
      {/* <div>
        <img className="h-30 w-40" src={gdg} alt="GDG" />
      </div> */}
      <div className="mb-2 mt-2 flex flex-wrap items-center">
                <div className="text-3xl font-bold text-[#4285F4] mr-2"><img className="h-30 w-24" src={logo} alt="GDG" /></div>
                <div className="flex flex-col items-baseline">
                  <div className="text-3xl font-bold text-gray-500">GDG</div>
                  <div className="text-xl font-semibold text-gray-500">On Campus</div>
                </div>
              </div>
      <nav className="hidden sm:flex items-center space-x-8">
        <Link
          to="/"
          className={`group text-lg font-medium ${theme === "dark" ? "" : ""} relative`}
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          to="/event"
          className={`group text-lg font-medium ${theme === "dark" ? "" : ""} relative`}
        >
          Events
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          to="/team"
          className={`group text-lg font-medium ${theme === "dark" ? "" : ""} relative`}
        >
          Team
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          to="/blog"
          className={`group text-lg font-medium ${theme === "dark" ? "" : ""} relative`}
        >
          Blog
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </nav>
      <div className="flex items-center">
        <button
          className="sm:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 border rounded-full flex items-center justify-center transition-all duration-300"
        >
          {theme === "light" ? (
            <CiLight size={20} />
          ) : (
            <MdDarkMode size={20} />
          )}
        </button>
      </div>
    </header>
  
    {isMenuOpen && (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    onClick={() => setIsMenuOpen(false)}
  >
    <motion.div
      className={`w-[50vw] h-full ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      } flex flex-col items-center shadow-lg`}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className={`absolute top-4 right-4 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <img className="w-40 h-40 mt-8" src={gdg} alt="GDG Logo" />

      <Link
        to="/"
        className={`shadow-lg py-2 px-6 w-[90%] my-2 text-center text-xl font-medium ${
          theme === "dark"
            ? "hover:bg-gray-700 hover:text-white"
            : "hover:bg-gray-100 hover:text-black"
        }`}
      >
        Home
      </Link>
      <Link
        to="/event"
        className={`shadow-lg py-2 px-6 w-[90%] my-2 text-center text-xl font-medium ${
          theme === "dark"
            ? "hover:bg-gray-700 hover:text-white"
            : "hover:bg-gray-100 hover:text-black"
        }`}
      >
        Events
      </Link>
      <Link
        to="/team"
        className={`shadow-lg py-2 px-6 w-[90%] my-2 text-center text-xl font-medium ${
          theme === "dark"
            ? "hover:bg-gray-700 hover:text-white"
            : "hover:bg-gray-100 hover:text-black"
        }`}
      >
        Team
      </Link>
      <Link
        to="/blog"
        className={`shadow-lg py-2 px-6 w-[90%] my-2 text-center text-xl font-medium ${
          theme === "dark"
            ? "hover:bg-gray-700 hover:text-white"
            : "hover:bg-gray-100 hover:text-black"
        }`}
      >
        Blog
      </Link>
    </motion.div>
  </motion.div>
)}

  </div>
  
  )
}

export default Header
