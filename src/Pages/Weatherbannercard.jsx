import React from 'react';

// --- Styles (CSS-in-JS) ---
const styles = {
  bannerContainer: {
    // Gradient background matching the image
    background: 'linear-gradient(135deg, #4F70F0 0%, #2A56E0 100%)',
    color: '#FFFFFF',
    borderRadius: '16px',
    padding: '24px 30px',
    maxWidth: '500px', // Set a maximum width for the card effect
    width: '100%',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative', // For positioning the background "stars"
    overflow: 'hidden', // Ensures stars don't leak out
  },
  infoGroup: {
    textAlign: 'left',
    zIndex: 1, // Ensure text is above background elements
  },
  location: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '4px',
  },
  date: {
    fontSize: '0.9em',
    opacity: 0.8,
  },
  tempGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    zIndex: 1,
  },
  icon: {
    fontSize: '2.5em',
    filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1))',
  },
  temperature: {
    fontSize: '4em',
    fontWeight: 'bold',
    lineHeight: 1,
  },
  // Background "star" elements (using ::before and ::after for simplicity)
  starSmall: {
    position: 'absolute',
    content: '""',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
  },
  starLarge: {
    position: 'absolute',
    content: '""',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor: '#FFCC66', // Orange color for the large stars
    boxShadow: '0 0 8px #FFCC66',
  }
};

// Simple function to get a weather icon (using an emoji for the sun)
const getWeatherIcon = (condition) => {
  switch (condition) {
    case 'Sunny':
      // The sun with rays icon
      return <span style={styles.icon}>☀️</span>;
    case 'Cloudy':
      return <span style={styles.icon}>☁️</span>;
    // Add more cases as needed (Rain, Snow, etc.)
    default:
      return <span style={styles.icon}>❓</span>;
  }
};

// --- Main Component ---
const WeatherBanner = ({ location, date, temp, condition }) => {
  return (
    <div style={styles.bannerContainer}>
      {/* Background Star Elements (Manual Positioning to mimic image) */}
      <div style={{ ...styles.starSmall, top: '10%', left: '5%' }}></div>
      <div style={{ ...styles.starSmall, top: '75%', left: '10%' }}></div>
      <div style={{ ...styles.starSmall, top: '50%', right: '5%' }}></div>
      <div style={{ ...styles.starLarge, top: '15%', left: '45%', width: '12px', height: '12px' }}></div>
      <div style={{ ...styles.starLarge, top: '65%', right: '35%', width: '12px', height: '12px' }}></div>


      {/* Left-Side Information */}
      <div style={styles.infoGroup}>
        <div style={styles.location}>{location}</div>
        <div style={styles.date}>{date}</div>
      </div>

      {/* Right-Side Temperature and Icon */}
      <div style={styles.tempGroup}>
        {getWeatherIcon(condition)}
        <div style={styles.temperature}>{temp}°</div>
      </div>
    </div>
  );
};

// --- Example Usage ---
// In a real app, this data would come from state or props
const App = () => {
    const weatherData = {
        location: 'Berlin, Germany',
        date: 'Tuesday, Aug 5, 2025',
        temp: 20,
        condition: 'Sunny', // Or 'Cloudy', 'Rain', etc.
    };

    return (
        <div style={{ padding: '40px', backgroundColor: '#0f101a', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
            <WeatherBanner
                location={weatherData.location}
                date={weatherData.date}
                temp={weatherData.temp}
                condition={weatherData.condition}
            />
        </div>
    );
};

export default App;
// You would replace the 'export default App' with 'export default WeatherBanner' 
// if you are creating a dedicated component file.