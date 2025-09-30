import React from "react";


const HourlyForecast = ({ hourlyData, isMetric }) => (
  <div className="hourly-forecast">
    <h3>Hourly Forecast</h3>
    <div className="hourly-list">
      {hourlyData.map((item, idx) => (
        <WeatherCard key={idx} data={item} isMetric={isMetric} />
      ))}
    </div>
  </div>
);

export default HourlyForecast;

