import React from 'react'
import { useState } from 'react';
import '../Navbarr/Navbar.css'
import { FaUserGraduate } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import image from '../../assets/nav.jpg'

const Navbarr= () => {



  return (


    <div className='nav-bar'>
      
    <ul>
 
   
    <FaUserGraduate className='logo'/>
    
    <li><a href="#contact">Contact</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#section2">Gallery</a></li>
    <li><Link to="/">Home</Link></li>
    
  
  
   </ul>
    </div>
  )
}

export default Navbarr