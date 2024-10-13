import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <div className="WeatherForecast-icon">
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" />
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
