import React from "react";
import WeatherCard from "./WeatherCard";

const Hourlyforecast = ({ hourlyData, isMetric }) => {
  return (
    <div className="forecast-section">
      <h3>Hourly Forecast</h3>
      <div className="forecast-grid">
        {hourlyData.map((item) => (
          <WeatherCard
            key={item.dt}
            data={item}
            isMetric={isMetric}
          />
        ))}
      </div>
    </div>
  );
};

export default Hourlyforecast;

