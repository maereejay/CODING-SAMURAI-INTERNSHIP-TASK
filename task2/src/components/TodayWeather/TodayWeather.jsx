import React, { useEffect, useState } from "react";
import "./TodayWeather.css";
import Logo from "../Logo/Logo";
import { useAppContext } from "../../context/AppContext";

export default function TodayWeather() {
  const { location } = useAppContext();
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getWeatherMessages = (weather) => {
    if (!weather) return { title: "", subtitle: "" };
    const main = weather.main.toLowerCase();
    const desc = weather.description;

    if (main.includes("rain"))
      return {
        title: "It's raining now",
        subtitle: "Don't forget your umbrella!",
      };
    if (main.includes("clear"))
      return {
        title: "It's sunny out",
        subtitle: "Wear some sunscreen and enjoy the clear skies!",
      };
    if (main.includes("cloud"))
      return {
        title: "Cloudy skies",
        subtitle: "Expect some shade, but keep an umbrella close just in case.",
      };
    if (main.includes("thunderstorm"))
      return {
        title: "Thunderstorm alert!",
        subtitle: "Stay safe indoors until the storm passes.",
      };
    if (main.includes("snow"))
      return {
        title: "Snowy conditions",
        subtitle: "Bundle up and watch your step outside.",
      };
    if (main.includes("haze") || main.includes("mist") || main.includes("fog"))
      return {
        title: "It's hazy out",
        subtitle:
          "Visibility might be low, so drive carefully and stay hydrated.",
      };

    return {
      title: desc.charAt(0).toUpperCase() + desc.slice(1),
      subtitle: "Check the weather details",
    };
  };

  const getIconUrl = (icon) =>
    `https://openweathermap.org/img/wn/${icon}@2x.png`;

  useEffect(() => {
    if (!location) return;

    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);

      try {
        let coordParams = "";
        if (location.lat && location.lon) {
          coordParams = `lat=${location.lat}&lon=${location.lon}`;
        } else {
          coordParams = `q=${encodeURIComponent(location.label)}`;
        }

        const currentRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?${coordParams}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        );
        if (!currentRes.ok) throw new Error("City not found");
        const currentData = await currentRes.json();
        setCurrentWeather(currentData);

        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?${coordParams}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        );
        const forecastData = await forecastRes.json();

        const days = {};
        forecastData.list.forEach((entry) => {
          const date = new Date(entry.dt_txt).toLocaleDateString("en-US", {
            weekday: "long",
          });
          if (!days[date]) {
            days[date] = {
              temps: [],
              winds: [],
              humidities: [],
              weather: entry.weather[0],
            };
          }
          days[date].temps.push(entry.main.temp);
          days[date].winds.push(entry.wind.speed);
          days[date].humidities.push(entry.main.humidity);
        });

        const daily = Object.keys(days)
          .slice(0, 6)
          .map((day) => {
            const info = days[day];
            return {
              day,
              temp: (
                info.temps.reduce((a, b) => a + b, 0) / info.temps.length
              ).toFixed(1),
              wind: (
                info.winds.reduce((a, b) => a + b, 0) / info.winds.length
              ).toFixed(1),
              humidity: Math.round(
                info.humidities.reduce((a, b) => a + b, 0) /
                  info.humidities.length
              ),
              note: info.weather.description,
              icon: info.weather.icon,
            };
          });

        setForecast(daily);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location]);

  if (!location) return <p>Please select a location first</p>;
  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>{error}</p>;

  const { title, subtitle } = getWeatherMessages(currentWeather?.weather?.[0]);
  const icon = currentWeather?.weather?.[0]?.icon;

  return (
    <div className="todayWeather">
      <div className="logo-container">
        <Logo />
      </div>

      <div className="todayContent">
        <div className="weatherDetails">
          <div className="status">
            <h2>{title}</h2>
            <span>{subtitle}</span>
          </div>

          <div className="daystats">
            <h2>{Math.round(currentWeather?.main?.temp)}°C</h2>
            <div className="feelsLike">
              <span>Feels like</span>
              <span>{Math.round(currentWeather?.main?.feels_like)}°C</span>
            </div>
            <div className="stats">
              <div className="wind">
                <span>{currentWeather?.wind?.speed} km/h</span>
                <span>Wind</span>
              </div>
              |
              <div className="humidity">
                <span>{currentWeather?.main?.humidity}%</span>
                <span>Humidity</span>
              </div>
              |
              <div className="pressure">
                <span>{currentWeather?.main?.pressure} hPa</span>
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
                  <div className="icon">
                    <img src={getIconUrl(icon)} alt="day icon" />
                  </div>
                  <span>{currentWeather?.weather?.[0]?.description}</span>
                </div>
                <div className="cardDetails">
                  <span>Temp: {Math.round(currentWeather?.main?.temp)}°C </span>
                  <span>Wind: {currentWeather?.wind?.speed} km/h</span>
                  <span>Humidity: {currentWeather?.main?.humidity}%</span>
                  <span>Pressure: {currentWeather?.main?.pressure} hPa</span>
                  <span>Clouds: {currentWeather?.clouds?.all}%</span>
                </div>
              </div>

              <div className="nightCard">
                <div className="cardHeading">
                  <h4>NIGHT</h4>
                  <span>Around midnight</span>
                </div>
                <div className="cloud">
                  <div className="icon">
                    <img src={getIconUrl(icon)} alt="night icon" />
                  </div>
                  <span>{currentWeather?.weather?.[0]?.description}</span>
                </div>
                <div className="cardDetails">
                  <span>Temp: {Math.round(currentWeather?.main?.temp)}°C </span>
                  <span>Wind: {currentWeather?.wind?.speed} km/h</span>
                  <span>Humidity: {currentWeather?.main?.humidity}%</span>
                  <span>Pressure: {currentWeather?.main?.pressure} hPa</span>
                  <span>Clouds: {currentWeather?.clouds?.all}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="forecast">
          <div className="forecastContainer">
            <h3>
              {currentWeather?.name}, {currentWeather?.sys?.country}
            </h3>
            <div className="forecastContent">
              <div className="forecastTitle">
                <span className="dayTitle">Day</span>
                <span className="tempTitle">Temp</span>
                <span className="windTitle">Wind</span>
                <span className="humidityTitle">Humidity</span>
                <span className="noteTitle">Note</span>
              </div>

              {forecast.map((day, i) => (
                <div className="forecastCard" key={i}>
                  <span className="forecastday">{day.day}</span>
                  <span className="forecastTemp">{day.temp}°C</span>
                  <span className="forecastWind">{day.wind} km/h</span>
                  <span className="forecastHumidity">{day.humidity}%</span>
                  <span className="forecastNote">{day.note}</span>
                </div>
              ))}

              <div className="weekNote">
                <h4>Note</h4>
                <p>
                  The coming week shows a steady pattern of{" "}
                  {forecast[0]?.note || "mild weather"}. Expect temperatures to
                  hover around the mid-range with occasional wind shifts and
                  slight humidity changes. Ideal for outdoor plans on clearer
                  days but keep a light jacket handy for cooler evenings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
