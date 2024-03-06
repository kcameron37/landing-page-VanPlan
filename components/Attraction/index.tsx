import React from 'react';
import Button from '../../components/Button';

interface AttractionProps {
  name: string;
  location: string;
  price: string;
  image: string;
}

export default function Attraction({ name, location, price, image }: AttractionProps) {
  return (
    <div className="attraction-container">
        <div className="icon"> 
        <img src="vanplanCloud.png" alt="" height="75" width="75"/>
        </div>
      <img src={image} alt={name} style={{ width: '200px', height: '150px' }} />
      <div style={{ textAlign: 'center' }}> 
        <h2>{name}</h2>
        <p>{location}</p>
        <p>{price}</p>
        <Button buttonName="Purchase Tickets" />
      </div>
    </div>
  );
}