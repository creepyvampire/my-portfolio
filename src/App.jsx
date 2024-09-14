import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Tech from './components/Tech'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div class='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800'>
      <div class='fixed top-0 -z-10 h-full w-full'>
        <div class="absolute inset-0 -z-10  w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      </div>

      <div class='container mx-auto px-8'>
        <Navbar />
        <Intro />
        <About />
        <Tech />
        <Experience/>
        <Projects />
        <Contact />
      </div>

    </div>
  )
}

export default App