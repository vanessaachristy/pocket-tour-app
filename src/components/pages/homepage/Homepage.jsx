import React from "react";
import "./homepage.css";
import SimpleMap from "../gMap/map";
import { Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { ItineraryData, DayData } from "./ItineraryData";

export default function Homepage() {
  return (
    <div className="homepage">
      <SimpleMap />
      <div className="home-itinerary">
        <div className="my-itinerary">
          <h2>
            <a href="#next-day">My itinerary</a>
          </h2>
        </div>
        <div className="my-itinerary-container">
          <div className="my-itinerary-title">
            <h3>Trip 1: Luxury of Singapore</h3>
            <a href="/edittrip">
              <Link to="/edittrip">
                <Edit />
              </Link>
            </a>
          </div>

          <div className="current-day">
            {DayData.slice(0, 1).map((day) => (
              <div className="my-itinerary-item" key={day.id}>
                <div className="day-title">
                  <h1>{day.title}</h1>
                </div>
                <div className="my-itinerary-wrapper">
                  {ItineraryData.slice(0, 6).map((itinerary) => (
                    <div className="my-itinerary-block">
                      <img src={itinerary.img} alt="" />
                      <h2>{itinerary.title}</h2>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="next-day" id="next-day">
            {DayData.slice(1, 3).map((day) => (
              <div className="my-itinerary-item">
                <div className="day-title">
                  <h1>{day.title}</h1>
                </div>
                <div className="my-itinerary-wrapper">
                  {ItineraryData.slice(0, 6).map((itinerary) => (
                    <div className="my-itinerary-block">
                      <img src={itinerary.img} alt="" />
                      <h2>{itinerary.title}</h2>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
