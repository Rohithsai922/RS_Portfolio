import React from 'react'
import { useState } from 'react';
import '../Navbarr/Navbar.css'
import { FaUserGraduate } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import Contact from '../../pages/contact/page'

const Navbarr= () => {



  return (


    <>
      
    <ul>
 
   
    <FaUserGraduate className='logo'/>
    <li><Link to="/pages/contact">Contact</Link></li>
    <li><Link to="/pages/projects">Projects</Link></li>
    <li><Link to="/pages/gallery">Gallery</Link></li>
    <li><Link to="/">Home</Link></li>

  
  
   </ul>
    </>
  )
}

export default Navbarr