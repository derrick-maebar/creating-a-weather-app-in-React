import iconSunny from "./assets/icon-sunny.webp";


const CurrentWeather = ({ weather, isMetric }) => (
  <div className="current-weather">
    <div className="weather-info">
      <h2>{weather.city}, {weather.country}</h2>
      <p className="date">{weather.date}</p>
    </div>
    <div className="weather-main">
      <img src={iconSunny} alt="Sunny" className="weather-icon" />
      <span className="temperature">
        {formatTemp(weather.currentTempC, isMetric)}
      </span>
    </div>
  </div>
);

export default CurrentWeather;


