import React from 'react'
import "./mydocuments.css"

export default function MyDocuments() {
  return (
    <div className='editprofile'>
        <div className='profile-container'>
            <h2 className="title" >My Document</h2>

            <h3 className="doc-group-title">General</h3>
            <div className="doc-container">
              <label className="main">Passport & Visa
                  <input type="checkbox" />
                  <span className="geekmark"></span>
              </label>
              <label className="main">Flight Ticket
                  <input type="checkbox"/>
                  <span className="geekmark"></span>
              </label>
              <label className="main">Boarding Pass
                  <input type="checkbox"/>
                  <span className="geekmark"></span>
              </label>
              <label className="main">Hard Cash
                  <input type="checkbox"/>
                  <span className="geekmark"></span>
              </label>
              <label className="main">Reservation
                  <input type="checkbox"/>
                  <span className="geekmark"></span>
              </label>
            </div>
            <h3 className="doc-group-title">COVID-19 Related</h3>
            <div className="doc-container">
              <label className="main">Vaccination Certificate
                  <input type="checkbox"/>
                  <span className="geekmark"></span>
              </label>
              <label className="main">Negative PCR Test
                  <input type="checkbox"/>
                  <span className="geekmark"></span>
              </label>
              <label className="main">Health Insurance
                  <input type="checkbox"/>
                  <span className="geekmark"></span>
              </label>
            </div>
        </div>
    </div>
  )
}