import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {}

  const apiKey = "f1adaca67t6e03d488b4ca1d5710830o";
  let city = "Berlin";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <h1>{city}</h1>
            <ul>
              <li>Saturday, 28/09/2024, 10:15</li>
              <li>
                Humidity: <strong>56 %</strong>, Wind: <strong>15 km/h</strong>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="temperature-container d-flex justify-content-end">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                alt="Clear day"
              ></img>
              <span className="temperature">11 </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
