import React from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Tuesday 10:00",
    description: "Partly Cloudy",
  };

  return (
    <div className="weathersample">
      <form id="search-form">
        <input type="search" placeholder="Type city..." />
        <input type="submit" value="Search" />
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>Last updated {weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div class="clearfix"></div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy icon"
            className="weather-icon float-left"
          />
          <div className="float-left">
            <span className="temperature"> 19</span>
            <span className="units"> &deg;C|&deg;F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 77%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
