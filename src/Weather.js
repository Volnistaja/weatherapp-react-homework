import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      date: new Date(response.data.dt*1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weathersample">
        <form id="search-form">
          <input type="search" />
          <input type="submit" value="Search" />
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li><FormattedDate date={weatherData.date}/> </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units"> &deg;C|&deg;F</span>
            </div>
          </div>
          <div className="col-6 mt-3">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2b6fdad0cbd018949c50c70f72250726";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
