import React from "react";
import Searchbar from "./Searchbar";

function Weather() {
  return (
    <div className="main">
      <Searchbar />

      <div className="weather-data">
        <div className="top-data">
          <h3>Charlotte</h3>
          <h1>70°F</h1>
          <h2>Cloudy</h2>
        </div>

        <div className="bottom-data">
          <div className="data-row-1">
            <div>
              <p>Feels Like</p>
              <p>73°F</p>
            </div>

            <div>
              <p>Humidity</p>
              <p>32%</p>
            </div>

            <div>
              <p>Wind Speed</p>
              <p>8 MPH</p>
            </div>
          </div>

          <div className="data-row-2">
            <div>
              <p>Sunrise</p>
              <p>6:49am</p>
            </div>

            <div>
              <p>Sunset</p>
              <p> 7:19pm</p>
            </div>

            <div>
              <p>Precipitation</p>
              <p>7%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
