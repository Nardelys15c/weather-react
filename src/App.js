import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      
        <Weather/>
        <p>
      This page was coded by Nardelys Caraballo and open-source code on 
      <a
        href="https://github.com/Nardelys15c/weather-react.git"
        target="_blank" rel="noreferrer"> Github
        </a>

      </p>
      </header>
    </div>
  );
}

export default App;
