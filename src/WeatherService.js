// WeatherService.js
import axios from 'axios';

const API_KEY = 'f79354c51d4c47c43879009c0d079c67';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${API_BASE_URL}?q=${city}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchWeather };
