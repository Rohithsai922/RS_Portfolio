import React, {useEffect} from 'react'
import '../home/home.css'
import Cards from '../../components/Cards/cards'
import profile from '../../assets/Profile_img.png'
import Footer from '../../components/Footer/Footer'
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import php from '../../assets/php.png'
import cpp from '../../assets/cppbgless.png'
import c from '../../assets/c.png'
import mysql from '../../assets/mysql.png'
import resume from '../../assets/Rohith_sai_Resume_SDE__.pdf'
import expimage from "../../assets/exp_man_bg.webp"
import bakeryimage from "../../assets/bakery_bg.jpg"
import blog from "../../assets/blog.png"
import aboutimg from "../../assets/aboutimg.png"
import Timeline from '../../components/Timeline/Timeline'
import iith from '../../assets/iith.png'
import barclays from '../../assets/barclays.jpg'
import { Button } from 'antd'
import {motion} from 'framer-motion'
import { useState } from 'react'
import { Fade } from 'react-reveal';
import { AttentionSeeker } from 'react-awesome-reveal'
import TalkingGuide from '../../components/Guide/Guide'
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

  const [activeSection, setActiveSection] = useState("hero-section");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero-section", "About","Current-Position", "projects","Timeline" ,"contact"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (

    <div className='body'>
      
      <TalkingGuide activeSection={activeSection} />
      <div className='hero-section' id="hero-section">
        
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
      <div className="Aboutcontainer" >
      
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
      <center><h2 className='heading'>Current Position</h2></center> 
      </AttentionSeeker>

      <div className="Aboutcontainer" id="Current-Position">


      <Fade>
      <div id="Aboutimage">
        
        <img alt="about" src={iith} />
      
      </div>
      </Fade>
      
      <div id="About">
        
         <Fade>
          <h3>   
              Research Intern at IIT Hyderabad
          </h3>
          <h3>
              Project Title: Content Generation in Indian Context  


          </h3>
          <h4 style={{ lineHeight: "2.0" }}>Developing a model that generates multimedia in Indian Context.
              <br /> 
              It will be able to generate animated videos with the help of story
              line in Indian style .</h4>
          
          </Fade>
      </div>
      
      

      </div>


      
    {/* Past Experience-nInternship 
     
      <AttentionSeeker effect="pulse" >
      <center><h2 className='heading'>Past Experience</h2></center> 
      </AttentionSeeker>

      <div className="Aboutcontainer">


    
      
      <div id="About">
        
         <Fade>
          <h3>   
             Summer Internship at Barclays
          </h3>
          <h3>
              May 2024 - July 2024


          </h3>
          <h3 style={{ lineHeight: "2.0" }}>
              
             </h3>
          
          </Fade>
      </div>
      
      <Fade>
      <div id="Aboutimage">
        
        <img alt="about" src={barclays} />
      
      </div>
      </Fade>
      

      </div>

      */}





      {/* Projects Section */}

      <AttentionSeeker effect="pulse" >
        <div id="projects">
      <center><h2 className='heading'>Projects</h2></center> 
      </div>
      </AttentionSeeker>
     


    <div className='container' id="projects">
     
    
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
              
             This expense manager web application, built using multiple technologies, 
             serves as a comprehensive tool for users to track their daily expenses.
             With user authentication in place, it securely stores expense data in a MYSQL database.
             The application facilitates expense analysis by category, offering users insights into their spending patterns.
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
     <Cards    titlee="A1_Bakery" 
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
             
          In my first year, I participated in the Google Winter of Code Contest with a team of four. 
          Our project involved creating a frontend web application for a bakery,
          which included a feature to link orders to WhatsApp and various filters based on theme, cost, and rating. . 
          This experience significantly improved our team and time management skills.
            </p>
            <p className='knowmore'>
              Tech Stacks : HTML, CSS, JS .
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
           github="https://github.com/Rohithsai922/RS_Public_Blog"
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
            <p className='knowmore'>
            This Blog web application boasts a range of exceptional features, 
            all geared towards enhancing user experience. 
            With robust user authentication, it enables users to explore blogs based on genres,
            popularity (most liked), and recency. Moreover, it offers the versatility to manage both personal
            and public blogs, 
            ensuring a seamless experience for all users.
            </p>
            <p className='knowmore'>
                 Tech Stacks : HTML, CSS, JS , React, NodeJS , MongoDB, ExpressJS .    
            </p>
          </motion.div>
        )}
      </motion.div>
      
     </div>

     {/*Timeline*/}
      <div id="Timeline">
     <Timeline />
      </div>

     <div className='skill-container' id="contact">
      <AttentionSeeker effect='pulse'>
      <center><h2 className='heading'>Skills</h2></center>
      </AttentionSeeker>
      <Fade>
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
      </Fade>
     </div>




         
    <div> 
     
     
    </div>
   
   
   
     
    
    <div id="contact"></div>
     <Footer/>
    </div>
  )
}

export default Home