import React from 'react'
import "./editprofile.css"
import { Link } from 'react-router-dom'

export default function EditProfile() {
  return (
    <div className='editprofile'>
        <div className='profile-container'>
            <h2 className="title" >Edit Profile</h2>
            <img className="profile-img" src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="profile"></img><br/>

          <div className="detail-container">
              <h3 className="detail-group-title">General Details</h3>
              <div className="detail-form">
                <label for="fname">Name</label>
                <input className="form" type="text" id="fname" name="fname" value="Vanessa Kristanto Gunawan Erlando"/><br/><br/>
              </div>
              <div className="detail-form">
                <label for="fcitizenship">Nationality / Citizenship</label>
                <select className="select" id="fcitizenship" name="fcitizenship">
                  <option value="Singaporean">Singaporean</option>
                  <option value="Indonesian">Indonesian</option>
                  <option value="Thai">Thai</option>
                </select><br/>
              </div>
          

              <h3 className="detail-group-title">Address</h3>
              <div className="detail-form">
                <label for="fcountry">Country</label>
                <select className="select" id="fcountry" name="country">
                  <option value="Singaporea">Singaporea</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Thailand">Thailand</option>
                </select><br/>
              </div>
              <div className="detail-form">
                <label for="fcity">City</label>
                <select className="select" id="fcity" name="fcity">
                  <option value="Singapore">Singapore</option>
                </select><br/>
              </div>
              <div className="detail-form">
                <label for="fstreet">Street Address</label>
                <input className="form" type="text" id="fstreet" name="fstreet" value="22 Nanyang Ave"/><br/>
              </div>
              <div className="detail-form">
                <label for="fpostal">Postal Code</label>
                <input className="form" type="text" id="fpostal" name="fpostal" value="154234"/><br/>
              </div>


              <h3 className="detail-group-title">Health</h3>
              <div className="detail-form">
                <label for="fvacstatus">Vaccination Status</label>
                <select className="select" id="fvacstatus" name="fvacstatus">
                  <option value="1">Vaccinated with Booster</option>
                  <option value="2">Vaccinated</option>
                  <option value="3">Not Vaccinated</option>
                </select><br/>
              </div>
              <div className="detail-form">
                <label for="fcovidtest">Recent Covid Test</label>
                <select className="select" id="fcovidtest" name="fcovidtest">
                  <option value="1">Negative</option>
                  <option value="2">Positive</option>
                </select><br/>
              </div>
            </div>
            
            <Link to="/"><button className="button">Save</button></Link>
        </div>
    </div>
  )
}