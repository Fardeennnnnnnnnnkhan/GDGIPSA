import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
// import AboutMain from '../assests/AboutMainVideo.mp4'
import AboutMain from "../assests/about us video.mp4"
import IntroVideo from '../assests/IntroVideo.mp4'
import GDGLOGO from '../assests/GDGLOGO.png'
import studyjam from "../assests/studyjam.jpg"
import s1 from "../assests/study1.jpg"
import s2 from "../assests/study2.jpg"
import team from "../assests/team-gdg.jpg"
import Community from './Community';
import { useTheme } from '../Context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";

const colors = {
  blue: '#4285F4',
  red: '#DB4437',
  yellow: '#F4B400',
  green: '#0F9D58',
};

const pevents = [
  {
    id: 1,
    title: "Git & GitHub Workshop",
    date: "January 15, 2024",
    location: "Tech Hub",
    attendees: 150,
    image: GDGLOGO,
    category: 'Workshop',
    color: '#4285F4',
    description: "Learn version control and collaborative coding techniques. Understand branching, merging, and best practices."
  },
  {
    id: 2,
    title: "Flutter Development Bootcamp",
    date: "February 5, 2024",
    location: "Innovation Center",
    attendees: 75,
    image: GDGLOGO,
    category: 'Bootcamp',
    color: '#DB4437',
    description: "Dive into cross-platform mobile app development with Flutter. Create beautiful, responsive apps."
  },
  {
    id: 3,
    title: "Cloud Study Jam",
    date: "March 12, 2024",
    location: "Developer Space",
    attendees: 100,
    image: studyjam,
    category: 'Study Jam',
    color: '#F4B400',
    description: "Introduction to cloud computing and Google Cloud Platform. Hands-on labs and certification prep."
  },
  {
    id: 4,
    title: "Android Dev Days",
    date: "April 20-22, 2024",
    location: "Code Campus",
    attendees: 200,
    image: GDGLOGO,
    category: 'Conference',
    color: '#0F9D58',
    description: "48-hour intensive coding event. Build innovative solutions and compete for exciting prizes."
  }
];

const categories = ['All', 'Workshop', 'Bootcamp', 'Study Jam', 'Conference']

// export function EventGallerySection({ theme }) {
//   const [selectedCategory, setSelectedCategory] = useState('All')
//   const [activeEvent, setActiveEvent] = useState(null)
//   const containerRef = useRef(null)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   const filteredEvents = pevents.filter(event => 
//     selectedCategory === 'All' || event.category === selectedCategory
//   )

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!containerRef.current) return
//       const { left, top } = containerRef.current.getBoundingClientRect()
//       setMousePosition({
//         x: e.clientX - left,
//         y: e.clientY - top
//       })
//     }

//     containerRef.current?.addEventListener('mousemove', handleMouseMove)
//     return () => {
//       containerRef.current?.removeEventListener('mousemove', handleMouseMove)
//     }
//   }, [])

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className={`py-20 px-4 md:px-12 xl:px-4 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
//     >
//       <div className="max-w-7xl mx-auto">
//         <h1 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
//           Past Events
//           <div className={`${theme === "dark" ? "w-40 h-1 bg-gradient-to-r from-yellow-400 to-red-400 " : "w-28 h-1 bg-[#0F9D58]"} mx-auto mt-4`}></div>
//         </h1>

//         {/* Floating category bubbles */}
//         <div className="flex flex-wrap gap-3 sm:gap-6 justify-center mb-12 px-2 sm:px-4">
//           {categories.map((category, index) => (
//             <motion.button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: index * 0.1 }}
//               className={`
//                 relative px-4 sm:px-6 py-2 sm:py-3 rounded-full
//                 before:absolute before:inset-0 before:rounded-full before:blur-lg
//                 before:transition-opacity before:duration-300
//                 hover:scale-110 transition-transform duration-300
//                 ${theme === "dark" ? "text-white" : "text-gray-900"}
//               `}
//               style={{
//                 background: selectedCategory === category 
//                   ? `linear-gradient(45deg, ${pevents[index % pevents.length].color}, ${theme === "dark" ? "transparent" : "white"})`
//                   : theme === "dark" ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
//                 boxShadow: selectedCategory === category 
//                   ? `0 0 20px ${pevents[index % pevents.length].color}40`
//                   : 'none'
//               }}
//             >
//               {category}
//             </motion.button>
//           ))}
//         </div>

//         {/* Interactive event space */}
//         <div 
//           ref={containerRef}
//           className="relative min-h-[400px] max-w-7xl mx-auto px-2 sm:px-4 py-8"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[50px] gap-x-8">
//             {filteredEvents.map((event, index) => (
//               <motion.div
//                 key={event.id}
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="relative"
//               >
//                 <motion.div
//                   className="relative"
//                   whileHover={{ scale: 1.1, zIndex: 10 }}
//                   animate={{
//                     x: activeEvent === event.id ? mousePosition.x * 0.02 : 0,
//                     y: activeEvent === event.id ? mousePosition.y * 0.02 : 0,
//                     rotateX: activeEvent === event.id ? mousePosition.y * 0.01 : 0,
//                     rotateY: activeEvent === event.id ? mousePosition.x * 0.01 : 0,
//                   }}
//                   onMouseEnter={() => setActiveEvent(event.id)}
//                   onMouseLeave={() => setActiveEvent(null)}
//                 >
//                   {/* Floating circular image */}
//                   <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden mx-auto ring-2 ring-offset-4 ring-offset-white dark:ring-offset-gray-900 ring-gray-200 dark:ring-gray-700">
//                     <div
//                       className="absolute inset-0 opacity-50"
//                       style={{
//                         background: `radial-gradient(circle at 50% 50%, transparent)`,
//                         mixBlendMode: 'overlay'
//                       }}
//                     />
//                     <img
//                       src={event.image}
//                       alt={event.title}
//                       className="w-full h-full object-cover"
//                       style={{ mixBlendMode: theme === "dark" ? 'luminosity' : 'normal' }}
//                     />
//                   </div>

//                   {/* Floating info */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ 
//                       opacity: activeEvent === event.id ? 1 : 0,
//                       y: activeEvent === event.id ? 0 : 20
//                     }}
//                     className="absolute -bottom-12 left-0 right-0 mx-auto w-[calc(100%-2rem)] sm:w-[280px] sm:left-1/2 sm:-translate-x-1/2"
//                   >
//                     <div className={`
//                       backdrop-blur-lg p-4 rounded-2xl
//                       ${theme === "dark" ? "bg-black/80" : "bg-white/80"}
//                     `}>
//                       <h3 className="text-xl font-bold mb-2" style={{ color: event.color }}>
//                         {event.title}
//                       </h3>
//                       <div className={`space-y-1 text-sm ${theme === "dark" ? "text-white/80" : "text-gray-700"}`}>
//                         <div className="flex items-center gap-2">
//                           <Calendar className="w-4 h-4" style={{ color: event.color }} />
//                           <span>{event.date}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <MapPin className="w-4 h-4" style={{ color: event.color }} />
//                           <span>{event.location}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Users className="w-4 h-4" style={{ color: event.color }} />
//                           <span>{event.attendees} Attendees</span>
//                         </div>
//                       </div>
//                       <motion.button
//                         onClick={()=> window.location.href="/event"}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors duration-300"
//                       >
//                         Learn More
//                       </motion.button>
//                     </div>
//                   </motion.div>

//                   {/* Category floating label */}
//                   <div
//                     className="absolute top-4 right-4 px-4 py-1 rounded-full 
//                     text-sm font-medium backdrop-blur-md"
//                     style={{ 
//                       background: `${event.color}20`,
//                       color: event.color,
//                       boxShadow: `0 0 20px ${event.color}40`
//                     }}
//                   >
//                     {event.category}
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </motion.div>
//   )
// }

export function Component({ theme }) {
  const [currentimage, setcurrentimage] = useState(0)

  // Array of image URLs - using placeholder images
  const images = [
    studyjam,
    team,
    s1,
    s2,
  ]

  useEffect(() => {
    // Set up the interval for automatic sliding
    const interval = setInterval(() => {
      setcurrentimage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div>
      <h1 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
        Past Events
        <div className={`${theme === "dark" ? "w-40 h-1 bg-gradient-to-r from-yellow-400 to-red-400 " : "w-28 h-1 bg-[#0F9D58]"} mx-auto mt-4`}></div>
      </h1>
      <div className="relative w-full max-w-3xl mx-auto h-[400px] overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute w-full h-full transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentimage === index ? 1 : 0,
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesToShow = 1; // Show 1 card in mobile view

  const events = [
    {
      title: "Git & GitHub Workshop",
      description: "Learn version control and collaborative coding techniques. Understand branching, merging, and best practices.",
      date: "January 15, 2024"
    },
    {
      title: "Flutter Development Bootcamp",
      description: "Dive into cross-platform mobile app development with Flutter. Create beautiful, responsive apps.",
      date: "February 5, 2024"
    },
    {
      title: "Figma Design Masterclass",
      description: "Master UI/UX design tools and principles. Learn professional design workflows and techniques.",
      date: "March 12, 2024"
    },
    {
      title: "Hackathon: Innovation Challenge",
      description: "48-hour intensive coding event. Build innovative solutions and compete for exciting prizes.",
      date: "April 20-22, 2024"
    },
    {
      title: "Machine Learning Fundamentals",
      description: "Introduction to ML concepts, algorithms, and practical implementations using Python.",
      date: "May 10, 2024"
    },
    {
      title: "Cybersecurity Workshop",
      description: "Learn ethical hacking, network security, and protect digital systems from potential threats.",
      date: "June 7, 2024"
    },
    {
      title: "Web Development Intensive",
      description: "Full-stack web development course covering frontend, backend, and deployment strategies.",
      date: "July 15, 2024"
    },
    {
      title: "Cloud Computing Seminar",
      description: "Explore cloud technologies, AWS, Azure, and serverless architecture fundamentals.",
      date: "August 22, 2024"
    },
    {
      title: "React & Next.js Workshop",
      description: "Advanced frontend development techniques with modern JavaScript frameworks.",
      date: "September 5, 2024"
    },
    {
      title: "AI & Generative Models",
      description: "Deep dive into AI technologies, large language models, and emerging trends.",
      date: "October 18, 2024"
    }
  ];

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [direction, setDirection] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardsPerPage = windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + cardsPerPage) % events.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - cardsPerPage + events.length) % events.length);
  };

  const visibleEvents = events.slice(currentIndex, currentIndex + cardsPerPage);
  if (visibleEvents.length < cardsPerPage) {
    visibleEvents.push(...events.slice(0, cardsPerPage - visibleEvents.length));
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };


  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`${theme === "dark" ? "bg-gray-900 " : "bg-white"} text-gray-100`}>
      <main className="relative">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="relative"
        >
          <video
            src={IntroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
            <div className="text-center max-w-4xl px-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl font-bold mb-6"
              >
                Welcome to GDG IPSA Institute of Engineering and Science
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl mb-8"
              >
                Google Developer Student Groups (On Campus) are university-based community groups for students interested in Google developer technologies.
              </motion.p>
              <motion.a
                href="#"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="inline-block py-3 px-8 rounded-full text-lg font-semibold hover:transform hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: theme === 'dark' ? '#4A90E2' : '#4285F4',
                  color: '#fff',
                }}
              >
                Join Our Community
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.section
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="about px-6 py-20"
          style={{
            backgroundColor: theme === 'dark' ? '#2D3748' : '#F7FAFC',
          }}
        >
          <div className="flex flex-col items-center justify-center pb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center"
              style={{ color: theme === 'dark' ? '#F7FAFC' : '#2D3748' }}
            >
              About Us
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3 }}
              className={`${theme === "dark" ? "w-40 h-1 bg-gradient-to-r from-yellow-400 to-red-400 " : "w-28 h-1 bg-[#0F9D58]"} mx-auto mt-4`}
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
            <motion.div
              className="video-container flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <video
                src={AboutMain}
                // loop
                autoPlay
                muted
                playsInline
                controls
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div
              className={`content flex-1 ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-black'
                } p-8 rounded-lg shadow-xl`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="mb-6 flex flex-wrap items-baseline">
                <div className="text-3xl font-bold text-[#4285F4] mr-2">Why</div>
                <div className="flex flex-col items-baseline">
                  <div className="text-3xl font-bold text-[#4285F4]">GDG IPSA ?</div>
                  <div className="text-xl font-semibold text-[#4285F4]">On Campus</div>
                </div>
              </div>
              <p className={`${theme === 'dark' ? ' text-gray-100' : ' text-black'
                } mb-6 text-lg leading-relaxed`}>
                At Google Developer Groups (GDG), we believe in empowering developers and fostering a community where innovation thrives. Our mission is to create an inclusive environment where students can learn, collaborate, and grow together.
              </p>
              <motion.a
                href="https://gdg.community.dev/gdg-on-campus-ips-academy-indore-india/"
                className="inline-block bg-[#4285F4] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#3367D6] transform hover:scale-105 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>


          </div>
        </motion.section>

        {/* Events Section */}
        <div className="py-20 px-4 md:px-12 xl:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <h1 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Upcoming Events
              <div className={`${theme === "dark" ? "w-40 h-1 bg-gradient-to-r from-yellow-400 to-red-400 " : "w-28 h-1 bg-[#0F9D58]"} mx-auto mt-4`}></div>
            </h1>

            <div className="relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={{
                    enter: (direction) => ({
                      x: direction > 0 ? '100%' : '-100%',
                      opacity: 0,
                    }),
                    center: {
                      x: 0,
                      opacity: 1,
                    },
                    exit: (direction) => ({
                      x: direction < 0 ? '100%' : '-100%',
                      opacity: 0,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
                  className="w-full"
                >
                  <div className="flex flex-wrap justify-center gap-6">
                    {visibleEvents.map((event, index) => (
                      <div
                        key={index}
                        className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] p-4"
                      >

                        <div className={`group ${theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-black"} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-[300px] flex flex-col justify-between relative overflow-hidden`}>
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400"></div>
                          <div>
                            <h3 className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"} text-gray-800 group-hover:text-blue-600 transition-colors duration-300`}>
                              {event.title}
                            </h3>
                            <p className={`${theme === 'dark' ? ' text-[#DCE8ff]' : ' text-black'
                              } mb-4 line-clamp-3`}>
                              {event.description}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-blue-600 font-semibold">
                              {event.date}
                            </span>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Link
                                to="/event"
                                className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors duration-300 flex justify-center items-center"
                              >
                                Learn More
                              </Link>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <motion.button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-50 transition duration-300 z-10"
                aria-label="Previous slide"
              >
                ❮
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-50 transition duration-300 z-10"
                aria-label="Next slide"
              >
                ❯
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* <EventGallerySection theme={theme} /> */}
        <Component theme={theme} />

      </main>

      <Community />
     
    </div>
  );

};

export default Home;