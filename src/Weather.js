import React from "react";
import axios from "axios";

export default function Weather(props){
    function displayForecast(response){
        alert(`The weather in Miami is ${response.data.main.temp} °F`);
    }
        let apiKey = "515c9ddbeb3cda9061acfab71031839e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayForecast);


      return  <h2>Hello from weather section</h2>;

}