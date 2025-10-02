import React from 'react';

// You would typically use a library for icons (like react-icons)
// but here we use simple text/emoji or placeholder functions for simplicity.

const getIcon = (condition) => {
  switch (condition) {
    case 'Cloudy':
      return '☁️';
    case 'Partly Sunny':
      return '🌤️';
    case 'Sunny':
      return '☀️';
    case 'Rain':
      return '🌧️';
    case 'Thunderstorm':
      return '⛈️'; // Representing lightning for thunderstorm
    case 'Windy':
      return '🌬️'; // Using a wind emoji for the waves icon
    default:
      return '❓';
  }
};

// --- Dummy Data ---
const weatherDetails = [
  { label: 'Feels Like', value: '18°' },
  { label: 'Humidity', value: '46%' },
  { label: 'Wind', value: '14 km/h' },
  { label: 'Precipitation', value: '0 mm' },
];

const dailyForecastData = [
  { day: 'Tue', high: 20, low: 14, condition: 'Cloudy' },
  { day: 'Wed', high: 21, low: 15, condition: 'Cloudy' },
  { day: 'Thu', high: 24, low: 14, condition: 'Sunny' },
  { day: 'Fri', high: 25, low: 13, condition: 'Partly Sunny' },
  { day: 'Sat', high: 21, low: 15, condition: 'Thunderstorm' }, // Using Thunderstorm for lightning
  { day: 'Sun', high: 25, low: 16, condition: 'Cloudy' },
  { day: 'Mon', high: 24, low: 15, condition: 'Windy' }, // Using Windy for wave icon
];

// --- Styles (CSS-in-JS for simplicity) ---
const styles = {
  container: {
    backgroundColor: '#1E213A', // Dark background similar to the image
    color: '#E0E0E0',
    borderRadius: '12px',
    padding: '16px',
    maxWidth: 'calc(100% - 32px)', // Max width to prevent overflow on small screens
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    margin: '20px 0', // Add some margin top/bottom
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', // Responsive grid
    gap: '12px',
    marginBottom: '30px',
  },
  detailCard: {
    backgroundColor: '#303450',
    borderRadius: '10px',
    padding: '12px',
    textAlign: 'left',
  },
  detailLabel: {
    fontSize: '0.9em',
    color: '#A0A0A0',
    marginBottom: '4px',
  },
  detailValue: {
    fontSize: '1.4em',
    fontWeight: 'bold',
  },
  dailyForecastHeader: {
    fontWeight: 'bold',
    fontSize: '1.2em',
    marginBottom: '16px',
  },
  dailyForecastList: {
    display: 'flex',
    overflowX: 'auto', // Enable horizontal scrolling
    gap: '10px',
    paddingBottom: '10px', // For scrollbar visibility
    // Hide scrollbar for Webkit browsers (Chrome, Safari)
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    // Hide scrollbar for IE, Edge and Firefox
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  },
  dailyForecastItem: {
    flexShrink: 0, // Prevent items from shrinking
    backgroundColor: '#303450',
    borderRadius: '10px',
    padding: '12px 8px',
    textAlign: 'center',
    width: '80px', // Fixed width for each item
  },
  dayText: {
    fontSize: '0.9em',
    marginBottom: '8px',
  },
  dailyIcon: {
    fontSize: '1.8em',
    marginBottom: '8px',
  },
  dailyTemps: {
    fontSize: '0.9em',
  },
  highTemp: {
    fontWeight: 'bold',
    marginRight: '4px',
  },
  lowTemp: {
    color: '#A0A0A0',
  },
};

// --- Weather Detail Card Component ---
const WeatherDetailCard = ({ label, value }) => (
  <div style={styles.detailCard}>
    <div style={styles.detailLabel}>{label}</div>
    <div style={styles.detailValue}>{value}</div>
  </div>
);

// --- Daily Forecast Item Component ---
const DailyForecastItem = ({ day, high, low, condition }) => (
  <div style={styles.dailyForecastItem}>
    <div style={styles.dayText}>{day}</div>
    <div style={styles.dailyIcon}>{getIcon(condition)}</div>
    <div style={styles.dailyTemps}>
      <span style={styles.highTemp}>{high}°</span>
      <span style={styles.lowTemp}>{low}°</span>
    </div>
  </div>
);

// --- Main Component ---
const WeatherSection = () => {
  return (
    <div style={styles.container}>
      {/* Weather Details Grid */}
      <div style={styles.detailsGrid}>
        {weatherDetails.map((detail, index) => (
          <WeatherDetailCard
            key={index}
            label={detail.label}
            value={detail.value}
          />
        ))}
      </div>

      {/* Daily Forecast Section */}
      <div style={styles.dailyForecastHeader}>Daily forecast</div>
      <div style={styles.dailyForecastList}>
        {dailyForecastData.map((forecast, index) => (
          <DailyForecastItem
            key={index}
            day={forecast.day}
            high={forecast.high}
            low={forecast.low}
            condition={forecast.condition}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherSection;