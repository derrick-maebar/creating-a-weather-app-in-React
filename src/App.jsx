import { useState } from "react";
import SearchBar from "./Components/Searchbar";
import axios from "axios";
import WeatherCard from "./Components/Weathercard";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const URL = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(URL);
      console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("City not found, please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <div className="bg-black/90 text-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center">Weather App</h1>
        <SearchBar fetchWeather={fetchWeather} />
      {weather && <WeatherCard weather =
      {weather} />}
        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-center text-red-400 mt-4">{error}</p>}
        {weather && (
          <div className="mt-4 text-center">
            <h2 className="text-xl">{weather.name}</h2>
            <p className="text-lg">{weather.main.temp} °C</p>
            <p>{weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

