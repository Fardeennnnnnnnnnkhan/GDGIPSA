import { useState } from 'react'
import './App.css'
import BlogPage from './Components/Blog'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Timeline from './Components/Timeline'
import EventsHome from './Components/EventsHome'
import Events from './Components/Events'

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home'
import Team from './Components/Team'
import { ThemeProvider } from './Context/ThemeContext'
function App() {
  

  return (
    <>
    <ThemeProvider>
<BrowserRouter>
      <Header/>
    <Routes>
     <Route path="/" element= {<Home/>} ></Route>
     <Route path="/team" element= {<Team/>} ></Route>
     <Route path="/blog" element= {<BlogPage/>} ></Route>
     <Route path='/event' element={<Events/>}></Route>
    </Routes>
      <Footer/>
</BrowserRouter>
    </ThemeProvider>
    
    </>
  )
}

export default App



