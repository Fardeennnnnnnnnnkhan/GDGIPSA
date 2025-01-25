import React from "react";
import  gdg from '../assests/gdg.png'
import GDGLOGO2 from '../assests/GDGLOGO2.png'
import Blog from '../assests/Blog4.jpg'
import chair from '../assests/Illustration.png'
import { useTheme } from "../Context/ThemeContext";
const BlogSection = () => {
  const { theme } = useTheme();

  return (
    <>
      <section
        className={`w-full h-full min-[850px]:h-[75vh] flex flex-col-reverse lg:flex-row items-center ${
          theme === 'dark' ? 'bg-gray-900' : ''
        }`}
      >
        <div
          className={`left w-full lg:w-[50vw] h-full flex flex-col justify-center lg:pl-24 px-8 ${
            theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
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
          <h2
            className={`text-5xl lg:text-7xl font-bold mb-4 ${
              theme === 'dark' ? 'text-blue-500' : 'text-blue-600'
            }`}
          >
            BLOGS
          </h2>
          <p
            className={`text-lg lg:text-2xl font-medium ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Welcome to the GDG Blog, where we share the latest tech news, tutorials, and stories from our vibrant community of developers, innovators, and dreamers.
          </p>
        </div>
  
        <div className="right w-full lg:w-[50vw] h-full flex items-center justify-center">
          <img
            className="w-[90%] lg:w-[80%] h-auto object-cover"
            src={chair}
            alt="Blog"
          />
        </div>
      </section>
{/*   
      <div
  className={`flex items-center justify-center mt-8 animate-bounce ${
    theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
  }`}
>
  <svg
    to={'/blogs'}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5l-7.5 7.5-7.5-7.5"
    />
  </svg>
</div> */}
    </>
  );
  
};

export default BlogSection;


