import React, { useState } from "react";
import { FaWhatsapp , FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import gdgLogo from '../assests/GD.svg';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { toast } from "sonner";
import { useTheme } from "../Context/ThemeContext";

// Initialize Firestore


const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    setLoading(true);

    // Save form data to Firestore
    try {
      await addDoc(collection(db, "contactus"), formData);
      console.log("Document written with ID: ", formData);
      toast.success("Form submitted successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Error submitting form!");
    } finally {
      setLoading(false);
    }

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };
const { theme, toggleTheme } = useTheme();
  return (
    <>
   
   <footer className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} text-${theme === 'dark' ? 'gray-300' : 'black'} py-8 md:py-12`}>
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {/* Left Section */}
      <div className="space-y-6 md:space-y-8">
        <div className="text-center md:text-left">
          <img
            src={gdgLogo}
            alt="GDG Logo"
            className="h-10 md:h-12 mb-4 md:mb-6 mx-auto md:mx-0"
          />
          <h2 className={`text-xl md:text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Google Developer Groups IPSA
          </h2>
          <h3 className={`text-lg md:text-xl font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            On Campus
          </h3>
        </div>
        <div className="text-center md:text-left">
          <h3 className={`text-lg md:text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Follow Us</h3>
          <div className="flex gap-6 justify-center md:justify-start">
            <a href="https://chat.whatsapp.com/IdzJsG6mM7yC3AQ4DVhGPY" target="_blank" rel="noopener noreferrer" 
               className={`text-gray-400 hover:${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} transition-colors duration-300`}>
              <FaWhatsapp size={20} className="md:w-6 md:h-6" />
            </a>
            <a href="https://x.com/gdg_ipsa" target="_blank" rel="noopener noreferrer"
               className={`text-gray-400 hover:${theme === 'dark' ? 'text-blue-300' : 'text-[#1DA1F2]'} transition-colors duration-300`}>
              <FaTwitter size={20} className="md:w-6 md:h-6" />
            </a>
            <a href="https://www.instagram.com/gdgoc_ipsa/profilecard/?igsh=cDJlc2plYW9veWpy" target="_blank" rel="noopener noreferrer"
               className={`text-gray-400 hover:${theme === 'dark' ? 'text-pink-400' : 'text-pink-500'} transition-colors duration-300`}>
              <FaInstagram size={20} className="md:w-6 md:h-6" />
            </a>
            <a href="https://www.linkedin.com/company/gdsc-ipsa/" target="_blank" rel="noopener noreferrer"
               className={`text-gray-400 hover:${theme === 'dark' ? 'text-blue-500' : 'text-blue-700'} transition-colors duration-300`}>
              <FaLinkedin size={20} className="md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Right Section - Contact Form */}
      <div className="mt-8 md:mt-0">
        <h3 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'} text-center md:text-left`}>
          Contact Us
        </h3>
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={`w-full dark:bg-transparent px-3 md:px-4 py-2 text-sm md:text-base border border-${theme === 'dark' ? 'gray-600' : 'gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full dark:bg-transparent px-3 md:px-4 py-2 text-sm md:text-base border border-${theme === 'dark' ? 'gray-600' : 'gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="3"
              className={`w-full dark:bg-transparent px-3 md:px-4 py-2 text-sm md:text-base border border-${theme === 'dark' ? 'gray-600' : 'gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full bg-${theme === 'dark' ? 'blue-500' : 'blue-600'} text-white py-2 text-sm md:text-base rounded-md hover:bg-${theme === 'dark' ? 'blue-600' : 'blue-700'} transition-colors duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
    <div className={`border-t border-${theme === 'dark' ? 'gray-700' : 'gray-200'} mt-8 md:mt-12 pt-4 md:pt-6 text-center text-xs md:text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
      <p>&copy; 2024 GDG IPSA On Campus. All Rights Reserved.</p>
      <p className={`mt-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Made With Love By GDG Web IPSA On Campus Team.</p>
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;
