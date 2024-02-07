import React, { useState } from 'react';
import image from "../../assets/nav.jpg"
import { useEffect } from 'react';

import { Avatar, Button, Card , Skeleton } from 'antd';
import '../Cards/cards.css'
const { Meta } = Card;

const Cards = ({titlee,descriptionn}) => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching with setTimeout
    setTimeout(() => {
      setLoading(false); // After data fetching is done, set loading to false
    }, 2000); // Adjust the timeout duration as needed
  }, []);
  
  
  
  return (
    <div>
      
    <Card className='card' 
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={image}
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
    <Button className='button'>Click here</Button>
    </div>
  </Card>
  
  </div>
  )
}

export default Cards
