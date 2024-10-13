import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response);
  }
  let city = "Berlin";
  let apiKey = "f1adaca67t6e03d488b4ca1d5710830o";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <div className="WeatherForecast-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="icon"
            />
          </div>
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">18°</span>
            <span className="WeatherForecast-temperature-min">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
