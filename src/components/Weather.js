import React from "react";
import Searchbar from "./Searchbar";

function Weather() {
  return (
    <div>
      <Searchbar />

      <div>
        <div>
          <p>Charlotte</p>
          <p>70°F</p>
          <p>Cloudy</p>
        </div>

        <div>
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
  );
}

export default Weather;
