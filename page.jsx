import React from 'react'
import '../home/home.css'
import Cards from '../../components/Cards/cards'
import profile from '../../assets/Profile_img.png'

import html from "../../assets/html.jpg"
import css from "../../assets/css.jpg"
import js from "../../assets/js.jpg"
import react from "../../assets/react.png"
import php from '../../assets/php.png'
import cpp from '../../assets/cpp.png'
import c from '../../assets/c.png'
import mysql from '../../assets/mysql-logo.jpg'

const Home = () => {
  return (

    <div>
      
      
      <div className='hero-section'>
      <div class="blob">
      <img src={profile} alt="Profile" />;
      </div>
      <div className="intro">
        <h1>My Name is Rohith sai</h1>
        <p>I'm a Full Stack Web Developer</p>
      </div>

      </div>
     
     <h2>Projects</h2>
    <div className='container'>
     <Cards titlee="Expense Manager" descriptionn="Coming soon" className="card"/>
     <Cards titlee="A1_Bakery" descriptionn="Coming soon" className="card"/>
     <Cards titlee="Coming_soon" descriptionn="Coming soon" className="card"/>
     </div>

     <div className='skill-container'>
      <h2>Skills</h2>
      <div className='first_set'>
      <img className='skill1' src={html} alt="html" />
      <img className='skill1' src={css} alt="css" />
      <img className='skill1' src={js} alt="js" />
      <img className='skill1' src={cpp} alt="cpp" />
      <img className='skill1' src={c} alt="c" />
      
      </div>
      <br />
      <br />
      <div className='second_set'>
      <img className='skill2' src={mysql} alt="mysql" />
      <img className='skill2' src={php} alt="cpp" />
      <img className='skill2' src={react} alt="react" />
      </div>
     </div>








      


    </div>
  )
}

export default Home