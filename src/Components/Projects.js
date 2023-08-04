import React from 'react'
import eCom from '../assets/e-com.jpg'
import pms from  '../assets/pms.jpg'

function Projects() {
  return (
    <div id='projects' style={{fontFamily:"cursive"}}>
            <span style={{fontSize:"50px"}}>Projects</span><br/><br/>
            <div style={{height:"100vh" }}>
              <div style={{backgroundColor:"pink", margin:"50px 200px", display:"flex", alignItems:"flex-start", justifyContent:"between",padding:"50px 100px"}}>
                <div><img src={pms} width='350px'/></div>
                <div align='center' style={{marginLeft:"10%"}}><span style={{fontSize:"30px"}}>Project Management System</span>
                <br/><br/><br/>An automated system to track the progress of the ongoing projects. It consists of a user authentication system, through which the employee can log in and start the timer for the particular module within the project, hence making it easier to track its progress. Supports three types of users: Admin, Project Manager, Employee
                <br/><br/><b>Technologies used:</b> React, Node.js, Express, MySQL</div>
              </div>
            </div>
            <div style={{height:"100vh" }}>
              <div style={{backgroundColor:"pink", margin:"50px 200px", display:"flex", alignItems:"flex-start", justifyContent:"between",padding:"50px 100px"}}>
                  <div><img src={eCom} width='350px'/></div>
                  <div align='center' style={{marginLeft:"10%"}}><span style={{fontSize:"30px"}}>E-commerce System for Polytechnic Rollers</span>
                  <br/><br/><br/>Developed to provide an online system to make orders and purchase rubber/copper rollers. Customers can even log in and track their order delivery status. Quotations are sent by the admin when the customer requests for it and order can be placed once the payment is made.
                  <br/><br/><b>Technologies used:</b> React, Node.js, Express, MongoDB</div>
              </div>
            </div>
    </div>
  )
}

export default Projects