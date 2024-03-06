import React from 'react';
import styles from '../../card.module.css'; 

export default function Card() {
  return (
    <div className="mainContent">
      <h1>Welcome to Van Plan</h1>
      <h3>Let's Explore Vancouver - Canada's top tourist city!</h3>
      <div className="para">
      <p> Planning travel and activities in Vancouver is made effortless with Van Plan! Locals and visitors alike can discover the perfect outing tailored to their preferences and the current weather conditions. </p> 
      </div>
      <button className="exploreButton"> Let's Expolore Now </button>
    </div>
  );
}