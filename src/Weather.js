import React from "react";
import "./Weather.css";


    export default function Weather() {
        let weatherData = {
          city: "Sebastian",
          temperature: 78,
          date: "Sunday, 15:37",
          description: "Mostly Cloudy",
          src: "https://openweathermap.org/img/wn/02d@2x.png",
          humidity: 48,
          wind: 9,
        };
        return (
            <div className="container">
            <div className="weather">
            <form>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city.."
                    className="form-control"
                    id="city-input"
                    autoComplete="off"
                  />
                   <input  
                    type="submit"
                    value="search"
                    className="btn btn-primary w-300"
                  />
                  </div>
                </div>
              </form>
            </div>
            <div className="weatherInfo">
              <div className="row">
                <div className="col-6">
                  <h1>{weatherData.city}</h1>
                 
                  <ul>
                    <li>
                      <span className="date">{weatherData.date}</span>
                      <span>, {weatherData.description}</span>
                    </li>
                    <li>
                      Humidity <strong>{weatherData.humidity}</strong>, Wind
                      <strong> {weatherData.wind} </strong>
                      <strong> mph</strong>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="temperature-container">
                    <div className="currentTemp">
                      <span className="thunderStorms">
                        <img src={weatherData.src} alt={weatherData.description} />
                            <span className="units">
                        <strong className="dayTemp">{weatherData.temperature}</strong>
                         <small className="size-units">°F/°C</small>

                        </span>
                        </span>
                    </div>
                  </div>
                </div>
                
              </div>
              
              </div>
        
             </div>                        
                 
        );
      
}