import React from 'react'
import '../css/style.css'
import img from '../assets/p2.jpg'

function About() {
  return (
    <div className='about' id='about'>
        <span style={{fontSize:"40px", fontWeight:"700", top:"200px",left:"400px",position:"absolute", fontFamily:"Lora,serif"}}>Valina Mendonca</span>
        <span style={{fontSize:"20px", fontWeight:"700", top:"270px",left:"450px",position:"absolute"}}>Developer</span>
        <div ><img style={{fontSize:"20px", fontWeight:"700", top:"180px",right:"300px",position:"absolute",width:"300px",height:"300px",borderRadius:"300px"}} src={img} alt='alt'/></div>
    </div>
  )
}

export default About