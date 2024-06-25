import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState(" ");
  const [data, showData] = useState(false);
  const [forecast, setForecast] = useState({});

  function showForecast(response) {
    showData(true);
    setForecast({
      temp: Math.round(response.data.main.temp - 273.15),
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      description: response.data.weather[0].description,
    });
    console.log(response.data.main);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a710bd8bd76400c9658ef649d9e81728";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(showForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city"
        id="search"
        onChange={updateCity}
      />
      <button type="submit" id="submit">
        Search
      </button>
      <div className="data">{city}</div>
    </form>
  );

  if (data) {
    return (
      <div className="result">
        {form}
        <ul>
          <li>The temperature is currently {forecast.temp}°C</li>
          <li>Humidity is at {forecast.humidity}%</li>
          <li>
            {" "}
            <img src={forecast.icon} />
          </li>
          <li> {forecast.description} expected throughout the day </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

export default App;
