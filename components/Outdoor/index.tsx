import React from 'react';
import Button from '../../components/Button';
import Spline from '@splinetool/react-spline';



export default function Outdoor() {
  return (
    <div className="attraction-container">
        <div className="icon"> 
        <img src="vanplanCloud.png" alt="" height="75" width="75"/>
        </div>
        
        <div style={{ width: '200px', height: '200px' }}>
        <Spline scene="https://prod.spline.design/RuRyWJV30hl6vtIO/scene.splinecode" />
      </div>
      
      <div style={{ textAlign: 'center' }}> 
        <h2>Outdoor</h2>
        <Button buttonName="Search for Activities" />
      </div>
    </div>
  );
}