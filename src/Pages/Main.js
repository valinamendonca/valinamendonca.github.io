import React from 'react'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Technologies from '../Components/Technologies'
import Navbar from '../Components/Navbar'

function Main() {
  return (
    <div>
        <Navbar/><About/><Technologies/><Projects/><Contact/>
    </div>
  )
}

export default Main