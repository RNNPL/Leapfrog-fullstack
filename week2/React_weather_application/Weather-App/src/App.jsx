import { useState } from "react";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import StatusMessage from "./components/StatusMessage";
import './styles/App.css'

const API_KEY = import.meta.env.VITE_API;

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async (city) => {
    
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );
    const data = await response.json();
    
  setTimeout(() => {
    if (response.ok) {
      setWeather(data);
      setError("");
    } else {
      setWeather(null);
      setError(data.message);
    }
    setLoading(false);
  }, 700);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      setWeather(null)
      setLoading(true);
      getWeather(city);
    }
  };

  return (
    <div className="card-container">
      <SearchForm city={city} setCity={setCity} handleSubmit={handleSubmit} />
      <StatusMessage loading={loading} error={error} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
