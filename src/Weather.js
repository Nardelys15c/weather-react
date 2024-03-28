import React from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner';

export default function Weather(props){
    function displayForecast(response){
        alert(`The weather in Miami is ${response.data.main.temp} °F`);
    }
        let apiKey = "515c9ddbeb3cda9061acfab71031839e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayForecast);


      return  <Audio
      height="80"
      width="80"
      radius="9"
      color="Pink"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />;

}