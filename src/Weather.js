// Weather.js
import React, { useState } from 'react';
import { fetchWeather } from './WeatherService';
import './Weather.css'; // Import the styles

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h1>Weather App</h1>
        <input type="text" placeholder="Enter city" onChange={(e) => setCity(e.target.value)} />
        <button onClick={getWeather}>Get Weather</button>
        {weatherData && (
          <div>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            {/* Add more weather information */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
