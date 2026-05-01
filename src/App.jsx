import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SnowParticles from './components/SnowParticles'
import './App.css'

function App() {
  return (
    <>
      <SnowParticles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
