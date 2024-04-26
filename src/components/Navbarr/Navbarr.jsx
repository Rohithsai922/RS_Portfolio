import React from 'react'
import { useState } from 'react';
import '../Navbarr/Navbar.css'
import { FaUserGraduate } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const Navbarr= () => {



  return (


    <div className='nav-bar'>
      
    <ul>
 
     
    <FaUserGraduate className='logo'/> 

  
    

    <li ><a  href="#contact" className='line'>Contact</a></li>
    <li ><a href="#projects">Projects</a></li>
    <li ><a href="#About">About</a></li>
    <li  ><Link to="/">Home</Link></li>
    
  
  
   </ul>
    </div>
  )
}

export default Navbarr