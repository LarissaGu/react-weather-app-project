import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1>Berlin</h1>
            <ul>
              <li>Saturday, 28/09/2024, 10:15</li>
              <li>Humidity: 56 %, Wind: 15 km/h</li>
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
