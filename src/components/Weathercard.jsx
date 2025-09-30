import React from "react";
import { formatTemp } from "../utils/conversions";

const WeatherCard = ({ data, isMetric, daily }) => (
  <div className="weather-card">
    <p className="label">{daily ? data.day : data.time}</p>
    <img src={data.icon} alt={data.condition || "weather"} className="card-icon" />
    <p className="temp">{formatTemp(data.tempC || data.maxC, isMetric)}</p>
    {daily && <p className="min-temp">{formatTemp(data.minC, isMetric)}</p>}
  </div>
);

export default WeatherCard;

