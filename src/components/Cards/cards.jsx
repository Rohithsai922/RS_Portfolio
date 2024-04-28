import React, { useState } from 'react';

import { useEffect } from 'react';
import { FaGithub } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import {  Button, Card , Skeleton } from 'antd';
import '../Cards/cards.css'
const { Meta } = Card;

const Cards = ({titlee,descriptionn,github,imagee,onClick}) => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching with setTimeout
    setTimeout(() => {
      setLoading(false); // After data fetching is done, set loading to false
    }, 2000); // Adjust the timeout duration as needed
  }, []);
  
  const handleButtonClick = () => {
    // Call the function passed from parent component to toggle the state
    if (onClick) onClick();
  };
  
  return (
    <div className='card-container'>
      
    <Card className='card' 
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={imagee}
      />
    }
    
  >
    <Skeleton loading={loading} className='loading' paragraph={{ rows: 2, style: { backgroundColor: '#f0f0f0' }}}>
    <Meta
      
      title={titlee}
      description={descriptionn}
      
    />
    </Skeleton>
    <br />
    <div className='button_div'>
      <a href={github} target="_blank">
    <Button className='button'>Visit Project <FaGithub className='icon'/></Button>
    </a>
    <Button className='button' onClick={handleButtonClick}>Know more <CiLocationArrow1 className='icon'/></Button>
    </div>
  </Card>
  
  </div>
  )
}

export default Cards
