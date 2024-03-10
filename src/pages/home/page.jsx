import React from 'react'
import '../home/home.css'
import Cards from '../../components/Cards/cards'
import profile from '../../assets/Profile_img.png'
import Footer from '../../components/Footer/Footer'

import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.jpg"
import react from "../../assets/react.png"
import php from '../../assets/php.png'
import cpp from '../../assets/cpp.png'
import c from '../../assets/c.png'
import mysql from '../../assets/mysql-logo.jpg'

import expimage from "../../assets/exp_man_bg.webp"
import bakeryimage from "../../assets/bakery_bg.jpg"
import cmgsoon from "../../assets/cmgsoon.jpeg"
const Home = () => {
  return (

    <div className='body'>
      
      
      <div className='hero-section'>
      <div class="blob">
      <img src={profile} alt="Profile" />
      </div>
      <div className="intro">
        <h1>Rohith sai</h1>

        <div class="typewriter">
        <h1>𝓘 𝓪𝓶 𝓕𝓾𝓵𝓵 𝓢𝓽𝓪𝓬𝓴 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻...</h1>

        </div>
        <h2>Computer Science Student</h2>
        <h2>Pre-final Year at NIT SURAT</h2>

      </div>

      </div>
     
     <h2>Projects</h2>
    <div className='container'>
     <Cards titlee="Expense Manager"
            imagee={expimage}
           descriptionn="Coming soon" 
           github="https://github.com/Rohithsai922/Expense_Manager.git" 
           className="card"/>

     <Cards titlee="A1_Bakery" 
            imagee={bakeryimage}
            descriptionn="Coming soon"
            github="https://github.com/Rohithsai922/A1_BAKERY.git" 
            className="card"/>

     <Cards titlee="Coming_soon" 
           imagee={cmgsoon}
          descriptionn="Coming soon" 
          className="card"/>
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


         
    <div id='contact'> 
     <p> These are the contact details</p>
    </div>





      
      
   
    </div>
  )
}

export default Home