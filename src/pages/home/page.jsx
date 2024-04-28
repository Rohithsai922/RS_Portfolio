import React from 'react'
import '../home/home.css'
import Cards from '../../components/Cards/cards'
import profile from '../../assets/Profile_img.png'
import Footer from '../../components/Footer/Footer'
import Timeline from '../../components/Timeline/Timeline'
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import php from '../../assets/php.png'
import cpp from '../../assets/cppbgless.png'
import c from '../../assets/c.png'
import mysql from '../../assets/mysql.png'
import resume from '../../assets/Rohith_sai_Resume.pdf'
import expimage from "../../assets/exp_man_bg.webp"
import bakeryimage from "../../assets/bakery_bg.jpg"
import blog from "../../assets/blog.png"
import aboutimg from "../../assets/aboutimg.png"
import { Button } from 'antd'
import {motion} from 'framer-motion'
import { useState } from 'react'
import { Fade, Zoom } from 'react-reveal';
import { AttentionSeeker, Bounce, Slide } from 'react-awesome-reveal'

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
      <Fade>
      <div className="intro">
        <h1>Penumajji Rohith sai</h1>

        <div class="typewriter">
        <h1>I am a <span className='typed'>Full Stack Developer </span>...</h1>

        </div>
        <h2>Computer Science Student</h2>
        <h2>Final Year at NIT SURAT </h2>
        <a href={resume} download="Rohith_Resume">
        <Button id="resume">Resume</Button>
        </a>
      </div>
      </Fade>
      </div>
     
        
     <AttentionSeeker effect="pulse" >
      <center><h2 className='heading'>About</h2></center> 
      </AttentionSeeker>
      <div className="Aboutcontainer">
      
      <div id="About">
        
         <Fade>
          <h3>   
              I am deeply passionate about web development and competitive programming.
          </h3>
          <h3>
              From crafting interactive web applications to solving  algorithmic problems, I find joy in the process
               of creating and innovating.
          </h3>
          <h3>
               Over time, 
              I've honed my skills in front-end and back-end development, exploring various technologies and frameworks to bring my ideas to life.
          </h3>
          </Fade>
      </div>
      
      <Fade>
      <div id="Aboutimage">
        
        <img alt="about" src={aboutimg} />
      
      </div>
      </Fade>

      </div>




      <AttentionSeeker effect="pulse" >
        <div id="projects">
      <center><h2 className='heading'>Projects</h2></center> 
      </div>
      </AttentionSeeker>
     


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
           descriptionn="" 
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
            <p className='knowmore'>
               This is an expense manager web application made using various technologies.
               It's objective is to store the day-to-day expenses of an user. It is user authenticated.
               It helps to analyse the expenses based on the category spent by the user.
               The data is well stored in the database using MYSQL.
            </p>
            <p className='knowmore'>
              Tech Stacks : HTML,CSS, JS, MYSQL, PHP
                 
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
            descriptionn=""
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
            <p className='knowmore'>
              A Frontend web application created in the "Google Winter of Code" Contest in my 1st year. 
              This is a group project of '4' and  it's objective is to create a front-end interface for a Bakery. 
              
            </p>
            <p className='knowmore'>
              Tech Stacks : HTML, CSS, JS , React
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
     <Cards titlee="Personal_Blog" 
           imagee={blog}
          descriptionn="" 
           github="https://github.com/Rohithsai922/Personal_Blog.git"
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
                 This is a Blog web application provided with many outstanding features. 
                 It is User-authenticated and it helps to find blogs based on the genres , most liked and most recent.
                Also, It can manage personal blogs as well as public blogs. This is well structured to have seamless experience to the users.
            </p>
            <p>
                 Tech Stacks : HTML, CSS, JS , React, NodeJS , MongoDB, ExpressJS .    
            </p>
          </motion.div>
        )}
      </motion.div>
      
     </div>

     <Timeline/>

     <div className='skill-container'>
      <AttentionSeeker effect='pulse'>
      <center><h2 className='heading'>Skills</h2></center>
      </AttentionSeeker>
      <div className='first_set'>
      <img className='skill1' src={html} alt="html" />
      <img className='skill1' src={css} alt="css" />
      <img className='skill1' src={js} alt="js" />
      <img className='skill1' src={react} alt="react" />
      
      <img className='skill1' src={c} alt="c" />
      <img className='skill1' src={mysql} alt="mysql" />
      
      <img className='skill1' src={cpp} alt="cpp" />
      <img className='skill1' src={php} alt="php" />
      </div>
      <br />
      <br />
    
     </div>




         
    <div id='contact'> 
     
     
    </div>
   
   
     
    
  
     <Footer/>
    </div>
  )
}

export default Home