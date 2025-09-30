

const DailyForecast = ({ dailyData, isMetric }) => (
  <div className="daily-forecast">
    <h3>Daily Forecast</h3>
    <div className="daily-grid">
      {dailyData.map((item, idx) => (
        <WeatherCard key={idx} data={item} isMetric={isMetric} daily />
      ))}
    </div>
  </div>
);

export default DailyForecast;

