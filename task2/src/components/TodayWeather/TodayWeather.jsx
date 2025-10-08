import React from "react";
import "./TodayWeather.css";
import Logo from "../Logo/Logo";

export default function TodayWeather() {
  return (
    <div className="todayWeather">
      <div className="logo-container">
        <Logo />
      </div>

      <div className="todayContent">
        <div className="weatherDetails">
          <div className="status">
            <h2>IT's Raining Now</h2>
            <span>Don't Forget Your Umbrella!</span>
          </div>
          <div className="daystats">
            <h2>15°C</h2>
            <div className="feelsLike">
              <span>Feels like</span>
              <span>15°C</span>
            </div>
            <div className="stats">
              <div className="wind">
                <span>9 km/h</span>
                <span>Wind</span>
              </div>
              |
              <div className="humidity">
                <span>70%</span>
                <span>Humidity</span>
              </div>
              |
              <div className="pressure">
                <span>1013 hPa</span>
                <span>Pressure</span>
              </div>
            </div>
          </div>
          <div className="todayCards">
            <div className="cardContainer">
              <div className="dayCard">
                <div className="cardHeading">
                  <h4>DAY</h4>
                  <span>Around noon</span>
                </div>
                <div className="cloud">
                  <div className="icon"></div>
                  <span>Few Clouds</span>
                </div>

                <div className="cardDetails">
                  <span>Temp: 20°C </span>
                  <span>Wind: 9 km/h</span>
                  <span>Humidity: 70%</span>
                  <span>Pressure: 1013 hPa</span>
                  <span>Clouds: 20%</span>
                </div>
              </div>
              <div className="nightCard">
                <div className="cardHeading">
                  <h4>NIGHT</h4>
                  <span>Around midnight</span>
                </div>
                <div className="cloud">
                  <div className="icon"></div>
                  <span>Few Clouds</span>
                </div>

                <div className="cardDetails">
                  <span>Temp: 20°C </span>
                  <span>Wind: 9 km/h</span>
                  <span>Humidity: 70%</span>
                  <span>Pressure: 1013 hPa</span>
                  <span>Clouds: 20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="forecast">
          <div className="forecastContainer">
            <h3>Lagos, Nigeria</h3>
            <div className="forecastContent">
              <div className="forecastTitle">
                <span>Day</span>
                <span>Temp</span>
                <span>Clouds</span>
                <span>Wind</span>
                <span>Humidity</span>
                <span>Note</span>
              </div>
              <div className="forecastCard">
                <span>Tuesday</span>
                <span>17°C</span>
                <span>20%</span>
                <span>9 km/h</span>
                <span>70%</span>
                <span>Cloudy</span>
              </div>
              <div className="forecastCard">
                <span>Wednesday</span>
                <span>17°C</span>
                <span>20%</span>
                <span>9 km/h</span>
                <span>70%</span>
                <span>Cloudy</span>
              </div>
              <div className="forecastCard">
                <span>Thursday</span>
                <span>17°C</span>
                <span>20%</span>
                <span>9 km/h</span>
                <span>70%</span>
                <span>Cloudy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
