import React from 'react'
import EventsHome from './EventsHome'
import Timeline from './Timeline'
import home from '../assests/home.svg'
import { useTheme } from '../Context/ThemeContext'
const Events = () => {
 const {theme} =  useTheme()
  return (
    <div className={`bg-${theme === 'dark' ? 'gray-900' : 'white'} text-${theme === 'dark' ? 'gray-300' : 'gray-700'}`}>
    <EventsHome />
    <Timeline />
  </div>
  )
}

export default Events
