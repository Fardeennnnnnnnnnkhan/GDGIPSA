import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export function EventCarousel({ events }) {
  const [activeSlide, setActiveSlide] = useState(0)
  
  const nextSlide = () => {
    setActiveSlide((prev) => {
      const next = prev + 1
      return next >= events.length ? 0 : next
    })
  }

  const prevSlide = () => {
    setActiveSlide((prev) => {
      const next = prev - 1
      return next < 0 ? events.length - 1 : next
    })
  }

  return (
    <div className="relative px-4 md:px-12">
      <AnimatePresence mode="wait">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            initial={{ x: 0 }}
            animate={{ x: `-${activeSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="min-w-[calc(100%-2rem)] sm:min-w-[calc(33.333%-1rem)] p-4 flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-[300px] flex flex-col justify-between relative overflow-hidden border border-gray-100">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#4285F4] via-[#DB4437] to-[#0F9D58]" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-[#2D3748] group-hover:text-[#4285F4] transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#4285F4] font-semibold">
                      {event.date}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white bg-[#4285F4] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#3367D6] transition-colors duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-[#4285F4] rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-[#4285F4] hover:text-white transition duration-300 z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-[#4285F4] rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-[#4285F4] hover:text-white transition duration-300 z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>
    </div>
  )
}

