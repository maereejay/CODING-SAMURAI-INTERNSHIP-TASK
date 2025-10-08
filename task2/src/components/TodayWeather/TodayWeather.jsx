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
                <span className="dayTitle">Day</span>
                <span className="tempTitle">Temp</span>

                <span className="windTitle">Wind</span>
                <span className="humidityTitle">Humidity</span>
                <span className="noteTitle">Note</span>
              </div>
              <div className="forecastCard">
                <span className="forecastday">Tuesday</span>
                <span className="forecastTemp">17°C</span>

                <span className="forecastWind">9 km/h</span>
                <span className="forecastHumidity">70%</span>
                <span className="forecastNote">Cloudy</span>
              </div>
              <div className="forecastCard">
                <span className="forecastday">Wednesday</span>
                <span className="forecastTemp">17°C</span>

                <span className="forecastWind">9 km/h</span>
                <span className="forecastHumidity">70%</span>
                <span className="forecastNote">Cloudy</span>
              </div>
              <div className="forecastCard">
                <span className="forecastday">Thursday</span>
                <span className="forecastTemp">17°C</span>

                <span className="forecastWind">9 km/h</span>
                <span className="forecastHumidity">70%</span>
                <span className="forecastNote">Cloudy</span>
              </div>
              <div className="forecastCard">
                <span className="forecastday">Friday</span>
                <span className="forecastTemp">17°C</span>

                <span className="forecastWind">9 km/h</span>
                <span className="forecastHumidity">70%</span>
                <span className="forecastNote">Cloudy</span>
              </div>
              <div className="forecastCard">
                <span className="forecastday">Saturday</span>
                <span className="forecastTemp">17°C</span>

                <span className="forecastWind">9 km/h</span>
                <span className="forecastHumidity">70%</span>
                <span className="forecastNote">Cloudy</span>
              </div>
              <div className="forecastCard">
                <span className="forecastday">Friday</span>
                <span className="forecastTemp">17°C</span>

                <span className="forecastWind">9 km/h</span>
                <span className="forecastHumidity">70%</span>
                <span className="forecastNote">Cloudy</span>
              </div>
              <div className="weekNote">
                <h4>Note</h4>
                <p>
                  This week is a cloudy week with only rainfall a bit on tuesday
                  and wednesday expect rains and bring umbrella. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Officia,
                  molestiae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
