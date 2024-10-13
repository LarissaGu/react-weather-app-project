import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Saturday, 28/09/2024, 10:15",
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
      description: response.data.condition.description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <form>
            <div className="Search row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  autoFocus="on"
                  className="search-input"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>{weatherData.date}</li>
                <li>
                  Humidity: <strong>{weatherData.humidity} %</strong>, Wind:{" "}
                  <strong>{Math.round(weatherData.wind)} km/h</strong>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="temperature-container d-flex justify-content-end">
                <img src={weatherData.icon} alt={weatherData.description}></img>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f1adaca67t6e03d488b4ca1d5710830o";
    let city = "Berlin";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
