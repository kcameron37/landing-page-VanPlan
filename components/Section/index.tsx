import React from 'react';


export default function Section() {
    return (
        <div className="mainContentSection">
          <div className="sectionLeft">
            <h1>Van Plan is Here! </h1>
            <h3>Let's Explore Vancouver - Canada's top tourist city!</h3>
            <div className="para">
              <p>Planning travel and activities in Vancouver is made effortless with Van Plan! Locals and visitors alike can discover the perfect outing tailored to their preferences and the current weather conditions.</p> 
            </div>
            <button className="exploreButton">Search Outdoor</button>
            <button className="exploreButton">SearchOutdoor</button>
          </div>
          <div className="sectionRight">
            <div className="sectionImage">
              <img src="van1.jpg" alt="Vancouver" />
            </div>
          </div>
        </div>
    );
}