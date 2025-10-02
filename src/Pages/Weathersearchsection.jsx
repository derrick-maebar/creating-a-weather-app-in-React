import React, { useState } from 'react';

// --- Styles (CSS-in-JS) ---
const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#0f101a', // Dark background matching your other sections
    minHeight: '200px', // Just to give it some space if rendered alone
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: '#E0E0E0', // Light text color
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center', // Center the text
    maxWidth: '600px', // Prevent it from getting too wide on large screens
  },
  searchBarContainer: {
    display: 'flex',
    gap: '15px', // Space between input and button
    width: '100%',
    maxWidth: '500px', // Max width for the search bar section
  },
  searchInput: {
    flexGrow: 1, // Allows input to take up available space
    padding: '12px 18px',
    paddingLeft: '45px', // Make space for the icon
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#303450', // Darker background for input
    color: '#E0E0E0',
    fontSize: '1em',
    outline: 'none', // Remove outline on focus
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    position: 'relative', // For the search icon positioning
  },
  searchIconWrapper: {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#A0A0A0', // Greyish icon color
    fontSize: '1.2em',
    pointerEvents: 'none', // Allow clicks to pass through to input
    zIndex: 2, // Ensure icon is above input
  },
  inputWrapper: {
    flexGrow: 1,
    position: 'relative', // Needed for absolute positioning of the icon
  },
  searchButton: {
    padding: '12px 25px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#6A5ACD', // Royal purple/blue button color
    color: '#FFFFFF',
    fontSize: '1em',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#5A4AAB', // Slightly darker on hover
    },
    outline: 'none',
  },
};

// --- Main Component ---
const WeatherSearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    // In a real application, you would perform an API call here
    // e.g., to fetch weather data for 'searchTerm'
    console.log('Searching for:', searchTerm);
    alert(`Searching for: ${searchTerm}`); // For demonstration
    // You might also clear the input: setSearchTerm('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>How's the sky looking today?</h1>
      <div style={styles.searchBarContainer}>
        <div style={styles.inputWrapper}>
          {/* Using a simple magnifying glass emoji for the icon */}
          <span style={styles.searchIconWrapper}>🔍</span>
          <input
            type="text"
            placeholder="Search for a place..."
            style={styles.searchInput}
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <button
          style={styles.searchButton}
          onClick={handleSearchSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default WeatherSearchSection;