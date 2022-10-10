import React from 'react'
import "./destination.css"
import CarouselPage from './CarouselPage'
import { DestinationData } from '../choosedestination/DestinationData'
import { Link } from 'react-router-dom'

export default function Destination() {
  return (
    <div className='destination'>
        <div className='destination-landing'>
            <h1>Explore Singapore</h1>
        </div>
        <div className='about-container'>
            <h2>The “Lion City” that offers big delights</h2>
            <h3>This tiny island city-state is a study of fusions and contrasts bursting with wonders waiting to be explored. Tranquil parks abut futuristic skyscrapers and luxe shopping malls. A thriving street food scene and world-class restaurants offer countless ways to taste and sip your way through Singapore’s culinary melting pot. Your first trip to Singapore will prove that sometimes the best things come in small packages.</h3>
        </div>

        <div className='mustvisit-container'>
            <h2>Must Visit</h2>
            <div className='carouselwrapper'><CarouselPage/></div>
        </div>

        <div className='traveladvisory-container'>
            <h2>Travel Advisory</h2>
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

        <div className='tripsforyou-container'>
            <h2>Trips For You</h2>
            <div className='tripsforyou-wrapper'>
                {DestinationData.slice(0,6).map((destination)=>(
                    <Link to="/tourpackage"><div className="tripsforyou-block">
                        <div className='img-wrapper'>
                            <img src={destination.img} alt=""/>
                        </div>

                        <div className='details-wrapper'>
                            <div className='details-duration'>
                                {destination.duration}
                            </div>

                            <div className='details-title'>
                                <div className='destination-title'>{destination.title}</div>
                                <div className='destination-location'>{destination.location}</div>
                            </div>
                        </div>
                    </div>
                    </Link>
                ))}
             </div>

        
        </div>

    </div>
  )
}
