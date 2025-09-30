import React from "react";

const ForecastPage = ({ weather, isMetric }) => {
  return (
    <div className="forecastpage">
      <h2>Forecast</h2>
      {weather && weather.daily ? (
        <ul>
          {weather.daily.map((day, i) => (
            <li key={i}>
              {day.day}: {day.maxC}° / {day.minC}° {isMetric ? "C" : "F"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No forecast available. Search for a city first.</p>
      )}
    </div>
  );
};

export default ForecastPage;

