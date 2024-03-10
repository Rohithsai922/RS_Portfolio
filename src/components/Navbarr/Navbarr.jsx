import React from 'react'
import { useState } from 'react';
import '../Navbarr/Navbar.css'
import { FaUserGraduate } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import image from '../../assets/nav.jpg'

const Navbarr= () => {



  return (


    <>
      
    <ul>
 
   
    <FaUserGraduate className='logo'/>
    
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/projects">Projects</Link></li>
    <li><Link to="/gallery">Gallery</Link></li>
    <li><Link to="/">Home</Link></li>
    
  
  
   </ul>
    </>
  )
}

export default Navbarr