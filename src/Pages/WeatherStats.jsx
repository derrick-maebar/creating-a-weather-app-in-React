import React from "react";

const WeatherStats = ({ weather, isMetric }) => {
  const wind = isMetric
    ? `${weather.wind} km/h`
    : `${Math.round(weather.wind / 1.609)} mph`;
  const precipitation = isMetric
    ? `${weather.precipitation} mm`
    : `${(weather.precipitation / 25.4).toFixed(2)} in`;

  return (
    <div className="weather-stats">
      <div className="stat">
        <p>Feels Like</p>
        <h4>{weather.feelsLikeC}°{isMetric ? "C" : "F"}</h4>
      </div>
      <div className="stat">
        <p>Humidity</p>
        <h4>{weather.humidity}%</h4>
      </div>
      <div className="stat">
        <p>Wind</p>
        <h4>{wind}</h4>
      </div>
      <div className="stat">
        <p>Precipitation</p>
        <h4>{precipitation}</h4>
      </div>
    </div>
  );
};

export default WeatherStats;
