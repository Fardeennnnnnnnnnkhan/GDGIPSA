import React from "react";
import gdg from "../assests/gdg.png";
import timelineElements from "../assests/timelineElements";
import {motion} from 'framer-motion'
const Timeline = () => {
  return (
  <>
<div className="timeline-wrapper relative mx-auto">
  {/* Timeline Line */}
  <motion.div
    className="timeline-line absolute top-0 left-1/2 transform -translate-x-1/2 w-[5px] bg-gray-300 dark:bg-gray-700"
    initial={{ height: '0%' }}
    animate={{ height: '100%' }}
    transition={{ duration: 2 }}
  />
  
  {timelineElements.map((elem, index) => {
    const isLeft = index % 2 === 0; 
    const delay = `${index * 1}s`; 

    return (
      <div key={elem.id} className="timeline relative">
        <motion.div
          className={`container ${
            isLeft ? "left-0 leftContainer" : "left-[50%] rightContainer"
          }`}
          style={{
            animationDelay: delay, 
          }}
        >
          <img
            className={`image ${
              isLeft ? "leftContainerImg" : "left-[-30px] rightContainerImg"
            }`}
            src={elem.icon}
            alt=""
          />
          <div className="text-box px-4 py-7 bg-white border-[1px] border-gray-200">
            <h2 className="font-bold text-2xl mt-1">{elem.eventTitle}</h2>
        
            <span
              className="inline-block bg-blue-100 text-blue-800 text-xs mb-2 font-semibold mr-2 px-2 py-0.5 rounded"
            >
              {elem.eventType}
            </span>
        
            <h3 className="text-md small inline-block">{elem.description}</h3>
        
            <p className="text-gray-700 text-sm mt-2">
              <strong>Venue:</strong> {elem.eventVenue}
            </p>
        
            <p className="text-gray-500 text-sm mt-4">{elem.eventDate}</p>
        
            <button
              className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded"
              onClick={() => console.log(`Know more about ${elem.eventTitle}`)}
            >
              Know More
            </button>
        
            <span
              className={`${
                isLeft ? "leftContainer-arrow" : "rightContainer-arrow"
              }`}
            ></span>
          </div>
        </motion.div>
      </div>
    );
  })}
</div>

  </>
  );
};

export default Timeline;