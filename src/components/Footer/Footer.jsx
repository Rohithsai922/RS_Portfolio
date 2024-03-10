import React from 'react'
import insta from '../../assets/instagram.jpg'
import gmail from '../../assets/gmail.jpg'
import linkedin from '../../assets/linkedin.jpg'
import '../Footer/FooterStyles.css'
const Footer = () => {
  return (
    
         <footer class="footer">
          
            <div className="social-media-links">
            <center>
        <a href="https://www.twitter.com"><img src={gmail} alt="Gmail"/></a>
        <a href="https://www.instagram.com"><img src={insta} alt="Instagram"/></a>
        <a href="https://www.linkedin.com"><img src={linkedin} alt="LinkedIn"/></a>
        </center>
          </div>
         <center><p>&copy;2024 Rohith sai | All Rights Reserved</p></center>
         
  </footer>
    
  )
}

export default Footer
