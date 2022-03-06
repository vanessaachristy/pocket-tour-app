import React, {useEffect, useState} from 'react'
import "./tourpackage.css"
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import CarouselPage from '../destination/CarouselPage';
import {data as TourData} from "./TourItineraryData.js";
import {Link} from "react-router-dom";
import { PeopleAltOutlined } from '@material-ui/icons';
import { AttachMoney } from '@material-ui/icons';

export default function TourPackage() {

    const [itinerary, setItinerary] = useState([]);

    useEffect(()=>{
        const item1 = parseInt(Math.random()*8)
                        const item2 = parseInt(Math.random()*8)
                        const item3 = parseInt(Math.random()*8)

                        const selectedItinerary = [TourData[item1], TourData[item2], TourData[item3]]
                        setItinerary(selectedItinerary)
    }, [])
  return (
    <div className='tourpackage'>
        <div className='tourheader'>
            <div className="tourheader-left">
                <h2>3 Days 2 Night</h2>
                <h1>Luxury of Singapore</h1>
            </div>
            <div className='tourheader-right'>
            <h2>ADD TRIP</h2>
            <Link to="/homepage"><ControlPointIcon/></Link>
            </div>
        </div>
        <div className='tour-container'>
            <div className='carousel-wrapper'>
            <CarouselPage/>
            </div>
            <div className='overview'>
                <h1>Overview</h1>
                <h3>With this short getaway you get a chance to create unforgettable memories that you will cherish all your life. Here you traverse various places like Marina Bay Sands, the Trick Eye Museum, National Orchid Garden, Palawan Beach,  and numerous other sites which will leave you in awe with the place.</h3>
            </div>
            <div className='tour-itinerary'>
                <div className="tour-itinerary-left">
                    <select className="custom-select" onChange= {(e)=>{
                        const item1 = parseInt(Math.random()*8)
                        const item2 = parseInt(Math.random()*8)
                        const item3 = parseInt(Math.random()*8)

                        const selectedItinerary = [TourData[item1], TourData[item2], TourData[item3]]
                        console.log(TourData)
                        setItinerary(selectedItinerary)
                    }}
                    >
                        <option value="day1">Day 1</option>
                        <option value="day2">Day 2</option>
                        <option value="day3">Day 3</option>
                        
                    </select>
                </div>
                <div className='tour-itinerary-right'>
                    {itinerary.map((places)=><div className="recc-block">
                                <div className="block-upper">
                                  <img src={places.img} alt=""></img>
                                </div>
                                <div className='block-bottom'>
                                  <h2>{places.place}</h2>
                                  <div className="crowd" title="crowd info"><PeopleAltOutlined/><img src={places.crowd} alt=""></img></div>
                                  <div className="spending" title="estimated budget"><AttachMoney/><h3>{places.spending}</h3></div>
                                </div>
                              </div>)}
                </div>
            </div>
            <div className='traveladvisory-container'>
            <h1>Travel Advisory</h1>
            <div className='container-wrapper'>
            <div className='box-container'>
                <div className="box-topper">
                    <h3>COVID-19 Related</h3>
                </div>
                <div className='box-bottom'>
                    <h3>Covid Cases: 40,509</h3>
                    <h3>Quarantine order: 5 days</h3>
                    <h3>Maximum gathering: 5 people</h3>
                </div>
            </div>

            <div className='box-container'>
                <div className="box-topper">
                    <h3>Documents Needed</h3>
                </div>
                <div className='box-bottom'>
                    <h3>Vaccinated Travel Pass</h3>
                    <h3>Vaccination Certificate</h3>
                    <h3>Negative PCR Test</h3>
                    <h3>Quarantine hotel booking</h3>
                </div>
            </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}
