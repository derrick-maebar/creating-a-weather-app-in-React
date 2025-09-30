import React from "react";

const HomePage = ({ weather, isMetric, searchTerm, setSearchTerm, handleSearch, isLoading }) => {
  return (
    <div className="homepage">
      <h2>Home</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading weather...</p>}

      {weather && (
        <div className="weather-info">
          <h3>
            {weather.city}, {weather.country}
          </h3>
          <p>Temperature: {weather.currentTempC}°{isMetric ? "C" : "F"}</p>
          <p>Feels Like: {weather.feelsLikeC}°{isMetric ? "C" : "F"}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
