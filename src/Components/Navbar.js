import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div style={{position:"sticky", top:"0px"}}>
        <navbar style={{position:"sticky",top:"0px"}}>
                <div style={{textAlign:"left", position:"absolute"}}><img  style={{fontSize:"20px", fontWeight:"700",top:"10px", left:"20px",position:"absolute",height:"60px",borderRadius:"50px"}} src={logo} alt='alt'/></div>
                <ul style={{listStyleType:"none", margin: 0, padding: 0 }}>
                        <li className='nav'><a style={{color:"black",textDecoration:"none"}} href="#contact" >Contact</a></li>
                        <li className='nav'><a style={{color:"black",textDecoration:"none"}} href="#projects" >Projects</a></li>
                        <li className='nav'><a style={{color:"black",textDecoration:"none"}} href="#tech" >Technologies</a></li>
                        <li className='nav'><a style={{color:"black",textDecoration:"none"}} href="#about" >About</a></li>
                </ul>
        </navbar>
    </div>
  )
}

export default Navbar