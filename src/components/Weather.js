import React from "react";
import Searchbar from "./Searchbar";
import { useState } from "react";
import Header from "./Header";

function Weather() {
  const apiKey = "196c3dd4704350b9a84bae44c3ff416a";

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="main">
      <Header />
      {!weather.main && (
        <div className="welcome">
          <p>
            Welcome to the Weather Now app! Please enter a city name to start.
          </p>
        </div>
      )}
      <Searchbar
        value={city}
        onChange={handleInputChange}
        onSubmit={handleSearch}
      />

      {weather.main && (
        <div className="weather-data">
          <div className="top-data">
            <h3>{weather.name}</h3>
            <h1>{Math.round(weather.main.temp)}°F</h1>
            <h2>{weather.weather[0].main}</h2>
          </div>

          <div className="bottom-data">
            <div className="data-row-1">
              <div>
                <p>Feels Like</p>
                <p>{weather.main.feels_like}°F</p>
              </div>

              <div>
                <p>Humidity</p>
                <p>{weather.main.humidity}%</p>
              </div>

              <div>
                <p>Wind Speed</p>
                <p>{weather.wind.speed}MPH</p>
              </div>
            </div>

            <div className="data-row-2">
              <div>
                <p>Min Temp</p>
                <p>{weather.main.temp_min}°F</p>
              </div>

              <div>
                <p>Max Temp</p>
                <p>{weather.main.temp_max}°F</p>
              </div>

              <div>
                <p>Country</p>
                <p>{weather.sys.country}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
