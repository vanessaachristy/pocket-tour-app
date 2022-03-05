import React from 'react'
import "./addrecommendation.css"
import ReccsData from "./ReccsData.json"
import { Link } from 'react-router-dom'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

export const day = [
  {day: "Day 1"},
  {day: "Day 2"},
  {day: "Day 3"}
]

export default function AddRecommendation() {
  return (
    <div className="addreccs">
       <div className='addreccs-landing'>
            <h2>Add recommendation for</h2>
            <h1>Singapore</h1>
        </div>
        <div className='addreccs-itinerary'>

              <div className="rec-wrapper">
              {ReccsData.map(places => {
          return (
            <div className="rec-block">
              <div className="block-upper">
                <div className="plus"><Link to="/edittripreccs"><ControlPointIcon/></Link></div>
                <img src={places.img} alt=""></img>
              </div>
              <div className='block-bottom'>
                <h2>{places.place}</h2>
                <div className="crowd"><PeopleAltIcon/><img src={places.crowd} alt=""></img></div>
                <div className="spending" title="estimated budget"><AttachMoneyIcon/><h3>{places.spending}</h3></div>
              </div>
            </div>
            
          )
        })}
            </div>  
        </div>        
    </div>
  )
}
