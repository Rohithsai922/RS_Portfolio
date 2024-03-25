import React from 'react'
import '../home/home.css'
import Cards from '../../components/Cards/cards'
import profile from '../../assets/profile_img.jpg'
import Footer from '../../components/Footer/Footer'

import html from "../../assets/html.jpg"
import css from "../../assets/css.jpg"
import js from "../../assets/js.jpg"
import react from "../../assets/react.png"
import php from '../../assets/php.png'
import cpp from '../../assets/cpp.png'
import c from '../../assets/c.jpg'
import mysql from '../../assets/mysql.jpg'

import expimage from "../../assets/exp_man_bg.webp"
import bakeryimage from "../../assets/bakery_bg.jpg"
import cmgsoon from "../../assets/cmgsoon.jpeg"
import aboutimg from "../../assets/aboutimg.png"


import {motion} from 'framer-motion'
import { useState } from 'react'
const Home = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const toggleIsOpen1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleIsOpen2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleIsOpen3 = () => {
    setIsOpen3(!isOpen3);
  };
  return (

    <div className='body'>
      
      
      <div className='hero-section'>
      <div class="blob">
      <img src={profile} alt="Profile" className='profileimg' />
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

      <div className="Aboutcontainer">
      <div id="About">
        

          <h3>  Hello, I'm [Your Name], currently in my third year pursuing Computer Science at NIT Surat.
             I am deeply passionate about web development and competitive programming.
              From crafting interactive web applications to solving  algorithmic problems, I find joy in the process of creating and innovating.
              My journey into the world of technology began with a fascination for the web. Over time, 
              I've honed my skills in front-end and back-end development, exploring various technologies and frameworks to bring my ideas to life.
              Beyond the realms of technology, I find solace in the pages of books, indulging in diverse genres and perspectives.
              As I continue my journey, I look forward to exploring new avenues, pushing boundaries, and making a meaningful impact through my work.</h3>
      </div>
      
      <div id="Aboutimage">
        <img alt="about" src={aboutimg}/>
      </div>


      </div>





     <div id="projects"></div>
     <center><h2>Projects</h2></center>
    <div className='container'>
    

    <motion.div 
        layout 
        className='carde'
        
        style={{borderRadius: '1rem'}}
        transition={{duration: .5}}
      >
      <motion.div 
          className="card-top" 
          layout="position"
        >


     <Cards titlee="Expense Manager"
            imagee={expimage}
           descriptionn="Coming soon" 
           github="https://github.com/Rohithsai922/Expense_Manager.git" 
           onClick={toggleIsOpen1}
           className="card"/>
           </motion.div>
           {isOpen1 && (
          <motion.div 
            className="card-content"
            initial={{clipPath: 'circle(0% at 0 0)'}}
            animate={{clipPath: 'circle(140.9% at 0 0)'}}
            transition={{duration: .5,delay: .25,type:'spring', damping:25,stiffness: 100}}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi, doloribus cum nesciunt alias harum molestias tempore,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi, doloribus cum nesciunt alias harum molestias tempore,
            </p>
          </motion.div>
        )}
      </motion.div>


      <motion.div 
        layout 
        className='carde'
        style={{borderRadius: '1rem'}}
        transition={{duration: .5}}
      >
      <motion.div 
          className="card-top" 
          layout="position"
        >     
     <Cards titlee="A1_Bakery" 
            imagee={bakeryimage}
            descriptionn="Coming soon"
            github="https://github.com/Rohithsai922/A1_BAKERY.git" 
            onClick={toggleIsOpen2}
            className="card"/>
      </motion.div>
           {isOpen2 && (
          <motion.div 
            className="card-content"
            initial={{clipPath: 'circle(0% at 0 0)'}}
            animate={{clipPath: 'circle(140.9% at 0 0)'}}
            transition={{duration: .5,delay: .25,type:'spring', damping:25,stiffness: 100}}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi, doloribus cum nesciunt alias harum molestias tempore,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi, doloribus cum nesciunt alias harum molestias tempore,
            </p>
          </motion.div>
        )}
      </motion.div>


      <motion.div 
        layout 
        className='carde'
      
        style={{borderRadius: '1rem'}}
        transition={{duration: .5}}
      >
      <motion.div 
          className="card-top" 
          layout="position"
        >     
     <Cards titlee="Coming_soon" 
           imagee={cmgsoon}
          descriptionn="Coming soon" 
          onClick={toggleIsOpen3}
          className="card"/>
      </motion.div>
           {isOpen3 && (
          <motion.div 
            className="card-content"
            initial={{clipPath: 'circle(0% at 0 0)'}}
            animate={{clipPath: 'circle(140.9% at 0 0)'}}
            transition={{duration: .5,delay: .25,type:'spring', damping:25,stiffness: 100}}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi, doloribus cum nesciunt alias harum molestias tempore,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi, doloribus cum nesciunt alias harum molestias tempore,
            </p>
          </motion.div>
        )}
      </motion.div>
     </div>

     <div className='skill-container'>
      <center><h2>Skills</h2></center>
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
   
   
     
    <a href="https://forms.visme.co/formsPlayer/jwowozq1-contact-form">Click to contact</a>
      
   
    </div>
  )
}

export default Home