import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Journey from '../components/sections/Journey'
import Projects from '../components/sections/Projects'
import Blog from '../components/sections/Blog'
import Contact from '../components/sections/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Blog />
      <Contact />
    </>
  )
}

export default Home