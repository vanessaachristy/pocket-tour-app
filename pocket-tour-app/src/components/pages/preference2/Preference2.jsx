import React from 'react'
import "./preference2.css"

export default function Preference2() {
  return (
    <div className='preference'>
        
        <div className='landingpage'>
            <h1>Choose your Most Preferable Destination!</h1>
            <div className="landingpage-container">
                    <a href="http://localhost:3000/" className="item-container">
                    <img src="assets/adventure.png" alt="beach" className = "item"/>
                        <h5>Playgrounds and Adventures</h5>
                    </a>

                    <a href="http://localhost:3000/" className="item-container">
                    <img src="assets/landmark.png" alt="mall" className = "item"/>
                        <h5>Landmarks, Attractions and Sightseeing</h5>
                    </a>

                    <a href="http://localhost:3000/" className="item-container">
                    <img src="assets/culture.png" alt="nature" className = "item"/>
                        <h5>Arts, Culture and Heritage</h5>
                    </a>
                  
            </div>
        </div>
    </div>
  )
}