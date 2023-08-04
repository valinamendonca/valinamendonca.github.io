import React from 'react'

function Contact() {
  var email="valinamendonca@gmail.com";
  var phone=1234567890;
  return (
    <div style={{height:"100vh"}} id='contact'>
      <div style={{margin:"100px"}}>
        <br/><br/>
        <span style={{fontSize:"50px"}}>Get in Touch</span><br/><br/>
        <div align='center' style={{backgroundColor:"#FFEA00", width:"600px",margin:"5% 25%", height:"300px", borderRadius:"50px", padding:"50px"}}>
            <a href={`tel:${phone}`} target='_blank'><i class="fa-solid fa-phone" style={{marginRight:"20px"}}></i></a>
            <a href={`mailto:${email}`} target='_blank'><i class="fa-brands fa-google" style={{marginRight:"20px"}}></i></a>
            <a href='https://github.com/valinamendonca' target='_blank'><i class="fa-brands fa-github" style={{marginRight:"20px"}}></i></a>
            <a href='https://www.linkedin.com/in/valina-m/' target='_blank'><i class="fa-brands fa-linkedin" style={{marginRight:"20px"}}></i></a>
        </div>
      </div>
    </div>
  )
}

export default Contact