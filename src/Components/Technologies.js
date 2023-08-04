import React,{useState} from 'react'
import html from '../assets/html.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import css from '../assets/css.png'
import node from '../assets/nodejs.svg'
import express from '../assets/express.png'
import php from '../assets/php.png'
import mongo from '../assets/mongo.gif'
import mysql from '../assets/mysql.png'

function Technologies() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'frontEnd':
        return  <div className='flex-container'>
                  <div><div><img src={html} width='200px' height='200px' alt='alt'/></div><div>HTML</div></div>
                  <div><div><img src={css} width='200px' height='200px' alt='alt'/></div><div>CSS</div></div>
                  <div><div><img src={js} width='200px' alt='alt'/></div><div>JavaScript</div></div>
                  <div><div><img src={react} width='200px' alt='alt'/></div><div>React</div></div>
                </div>;
      case 'backEnd':
        return  <div className='flex-container'>
                  <div><div><img src={node} width='200px' height='200px' alt='alt'/></div><div>Node.js</div></div>
                  <div><div><img src={express} width='200px' height='200px' alt='alt'/></div><div>Express</div></div>
                  <div><div><img src={php} width='200px' height='200px' alt='alt'/></div><div>PHP</div></div>
                </div>;
      case 'dataBase':
        return  <div className='flex-container'>
                  <div><div><img src={mysql} width='200px' height='200px' alt='alt'/></div><div>MySQL</div></div>
                  <div><div><img src={mongo} width='200px' height='200px' alt='alt'/></div><div>MongoDB</div></div>
                </div>;
      default:
        return  <div className='flex-container'>
                  <div><div><img src={html} width='200px' height='200px' alt='alt'/></div><div>HTML</div></div>
                  <div><div><img src={css} width='200px' height='200px' alt='alt'/></div><div>CSS</div></div>
                  <div><div><img src={js} width='200px' alt='alt'/></div><div>JavaScript</div></div>
                  <div><div><img src={react} width='200px' alt='alt'/></div><div>React</div></div>
                </div>;
    }
  };
  return (
    <div id='tech' style={{fontFamily:"cursive",height:"100vh",padding:"10px"}}>
      <div style={{margin:"100px"}}>
        <span style={{fontSize:"50px"}}>Technologies</span><br/><br/>
        <select style={{fontSize:"20px"}} onChange={handleSelectChange}>
          <option value='frontEnd'>Front-End</option>
          <option value='backEnd'>Back-End</option>
          <option value='dataBase'>DataBase</option>
        </select>
        <div id='content' style={{margin:"10px",backgroundColor:"lightgray"}}>{renderContent()}</div>
      </div>
    </div>
  )
}

export default Technologies