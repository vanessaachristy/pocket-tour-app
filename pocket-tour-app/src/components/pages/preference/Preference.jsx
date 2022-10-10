import React from 'react'
import "./preference.css"

export default function Preference() {
  return (
    <div className='preference'>
        
        <div className='landingpage'>
            <h1>Choose your Most Preferable Destination!</h1>
            <div className="landingpage-container">
                    <a href="http://localhost:3000/preference2" className="item-container">
                    <img src="assets/beach (1).png" alt="beach" className = "item"/>
                        <h5>Beach</h5>
                    </a>

                    <a href="http://localhost:3000/preference2" className="item-container">
                    <img src="assets/mall.jpeg" alt="mall" className = "item"/>
                        <h5>Mall</h5>
                    </a>

                    <a href="http://localhost:3000/preference2" className="item-container">
                    <img src="assets/nature.jpeg" alt="nature" className = "item"/>
                        <h5>Nature</h5>
                    </a>
                  
            </div>
        </div>
    </div>
  )
}