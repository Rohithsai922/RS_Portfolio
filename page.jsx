import React from 'react'
import '../home/home.css'
import Cards from '../../components/Cards/cards'
import profile from '../../assets/Profile_img.png'
const Home = () => {
  return (

    <div>
      
      
      <div className='hero-section'>
      <div class="blob">
      <img src={profile} alt="Profile" />;
      </div>

      </div>
     
     <h2>Projects</h2>
    <div className='container'>
     <Cards titlee="Expense Manager" descriptionn="Coming soon"/>
     <Cards titlee="A1_Bakery" descriptionn="Coming soon"/>
     <Cards titlee="Coming_soon" descriptionn="Coming soon"/>
     </div>








      


    </div>
  )
}

export default Home