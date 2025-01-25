import React from 'react'
import Timeline from './Timeline'
import image from '../assests/image1.png'
import GDGLOGO2 from '../assests/GDGLOGO2.png'
import home from '../assests/home.svg'
import { useTheme } from '../Context/ThemeContext'
import {Link} from 'react-router-dom'
const EventsHome = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <> 
      <div
    className={`h-screen lg:h-[85vh] w-full flex items-center justify-center px-4 md:px-12 lg:px-20 bg-${
      theme === "dark" ? "gray-900" : "white"
    } text-${theme === "dark" ? "white" : "gray-800"}`}
  >
    <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
      {/* Left Section */}
      <div className="flex-1 space-y-6">
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
        <h2
          className={`text-5xl lg:text-7xl font-bold ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}
        >
          Events
        </h2>
        <p className="text-lg lg:text-2xl font-medium">
          Join us to connect, learn, and innovate with like-minded individuals
          at our exciting event. Experience workshops, networking opportunities,
          and much more.
        </p>
        <button
        
          className={`px-6 py-3 text-lg font-medium rounded-md ${
            theme === "dark"
              ? "bg-green-400 text-gray-900 hover:bg-green-500"
              : "bg-green-600 text-white hover:bg-green-700"
          } transition-all duration-300`}
        >
        <Link to={'/'}>  Learn More
        </Link> 
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <img
          src={image}
          alt="GDG Event"
          className="w-full max-w-md h-[40vh] md:h-[50vh] object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>

    </>
  )
}

export default EventsHome
