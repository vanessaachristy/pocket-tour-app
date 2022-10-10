import React from 'react'
import "./edittrip.css"
import PlacesDataAddReccs from "./PlacesDataAddReccs.json"
import { Link } from 'react-router-dom'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

export const day = [
  {day: "Day 1"},
  {day: "Day 2"},
  {day: "Day 3"}
]

export default function EditTripReccs() {
  return (
    <div className="edittrip">
       <div className='edittrip-landing'>
            <h2>3 days 2 night</h2>
            <h1>Taste of Singapore</h1>
            <h3>Singapore, Singapore</h3>
        </div>
        <div className='edittrip-itinerary'>
          <div className='itinerary-wrapper'>
            {day.map((day)=> (
              <><h1>{day.day}</h1>
              <div className="trip-wrapper">
              {PlacesDataAddReccs.slice(0,3).map(places => {
          return (
            <div className="big-trip-block">
            <div className="trip-block">
              <div className="block-upper">
                <img src={places.img} alt=""></img>
              </div>
              <div className='block-bottom'>
                <h2>{places.place}</h2>
                <div className="crowd" title="crowd info"><PeopleAltIcon/><img src={places.crowd} alt=""></img></div>
                <div className="spending" title="estimated budget"><AttachMoneyIcon/><h3>{places.spending}</h3></div>
              </div>
            </div>
            <div className='plus'>
            <Link to="/addrecommendation"><a><ControlPointIcon/></a></Link>
            </div>
            </div>
            
          )
        })}
              </div>
              </>
            
            ))}
         
            </div>
        
        </div>
        

        
    </div>
  )
}
