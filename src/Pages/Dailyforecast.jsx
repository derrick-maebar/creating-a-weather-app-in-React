import React from "react";
import WeatherCard from "./WeatherCard";

const Dailyforecast = ({ dailyData, isMetric }) => {
  return (
    <div className="forecast-section">
      <h3>Daily Forecast</h3>
      <div className="forecast-grid">
        {dailyData.map((item) => (
          <WeatherCard
            key={item.dt}
            data={item}
            isMetric={isMetric}
            daily
          />
        ))}
      </div>
    </div>
  );
};

export default Dailyforecast;


