import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const API_KEY = '8d8f6b92c1e941631976abd511d7383c';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const getWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
      setWeatherData(null);
    }
  };

  useEffect(() => {
    if (city) {
      getWeatherData();
    }
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <input type="text" placeholder="Enter city name" value={city} onChange={handleCityChange} />
      {weatherData && (
        <div className="weather">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
