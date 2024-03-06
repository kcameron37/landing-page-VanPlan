import React from 'react';
import Attraction from '../../components/Attraction';
import Spline from '@splinetool/react-spline';
import Card from '../../components/Card';
import Outdoor from '../../components/Outdoor';
import Indoor from '../../components/Indoor';
import Section from '../../components/Section';

export default function Home() {
  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="headerLeft">
            <div className="headerImage">
              <img src="/vanplan-logo.svg" alt="Van Plan Logo" height="400" width="400" />
            </div>
            
          </div>
          <div className="headerRight">
            <div className="signupButton">
              <button>Sign Up</button>
            </div>
            <div className="menuButton">
              <img src="menu.png" alt="menu" height="50" width="50"/>
            </div>
          </div>
        </div>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mainContainer">
          <div className="heroImage">
            <Spline scene="https://prod.spline.design/h8jSUduMKMZaFt3P/scene.splinecode" />
            <Card/> 
          </div>
           
          <div className="attractionContainer">
            <div className="text">
              <h1>Popular <br></br>Vancouver<br></br>Attractions</h1>
            </div>
            <div className='arrow'>
            <button className="buttonHover">
               <img src="arrowLeft.png" alt="" height="75" width="75" />
            </button>
            </div>
            <Attraction
              name="Aquarium"
              location="Vancouver, BC"
              price="$50.00"
              image="van1.jpg"
            />
            <Attraction
              name="Science World"
              location="Vancouver, BC"
              price="$20.00"
              image="van2.jpg"
            />
            <Attraction
              name="The SeaWall"
              location="Vancouver, BC"
              price="Free"
              image="van3.jpg"
            />
           <div className='arrow'>
           <button className="buttonHover">
               <img src="arrowRight.png" alt="" height="75" width="75" />
            </button>
            </div>
          </div>
          <Section/>
          <div className="actvityContainer">
          <div className="text">
              <h1>Indoor or <br></br>Outdoor?<br></br>Attractions</h1>
            </div>
            <div className='arrow'>
            <button className="buttonHover">
               <img src="arrowLeft.png" alt="" height="75" width="75" />
            </button>
            </div>

                        
            <Outdoor/>
          
            <Indoor/>
           <div className='arrow'>
           <button className="buttonHover">
               <img src="arrowRight.png" alt="" height="75" width="75" />
            </button>
            </div>
          </div>
        </div>

       

        <footer className="footer">
        <p>© Van Plan - Kaitlyn Cameron - <a href="https://github.com/Haydenleung/MDIA-3109-Final-Project">GitHub</a></p>
        </footer>
      </main>
    </>
  );
}