import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import Header from "./components/Header";
import AboutPage from "./pages/Aboutpage";
import ForecastPage from "./pages/Forecastpage";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const [isMetric, setIsMetric] = useState(true);
  const [weather, setWeather] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    setIsLoading(true);

    setTimeout(() => {
      setWeather({
        city: "Nairobi",
        country: "Kenya",
        date: new Date().toDateString(),
        currentTempC: 28,
        feelsLikeC: 30,
        humidity: 60,
        wind: 12,
        precipitation: 2,
        hourly: [
          { time: "10 AM", tempC: 26, icon: "/icons/sunny.png" },
          { time: "12 PM", tempC: 28, icon: "/icons/sunny.png" },
          { time: "2 PM", tempC: 29, icon: "/icons/sunny.png" },
        ],
        daily: [
          { day: "Mon", maxC: 29, minC: 19, icon: "/icons/sunny.png" },
          { day: "Tue", maxC: 27, minC: 18, icon: "/icons/cloudy.png" },
          { day: "Wed", maxC: 25, minC: 17, icon: "/icons/rain.png" },
        ],
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Router>
      <div className="app">
        <Header isMetric={isMetric} setIsMetric={setIsMetric} />

        <main className="container">
          {/* ✅ Navigation with Links */}
          <nav className="nav">
  <Link to="/homepage">Home</Link>
  <Link to="/forecast">Forecast</Link>
  <Link to="/about">About</Link>
</nav>


          <Routes>
            <Route
              path="/homepage"
              element={
                <HomePage
                  weather={weather}
                  isMetric={isMetric}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  handleSearch={handleSearch}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/forecast"
              element={
                <ForecastPage
                  weather={weather}
                  isMetric={isMetric}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
