import React from 'react';

const WeatherDetailCard = ({ label, value }) => {
  return (
    <div className="detail-card">
      <p className="detail-label">{label}</p>
      <p className="detail-value">{value}</p>
    </div>
  );
};

export default WeatherDetailCard;