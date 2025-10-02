import React from "react";



const WeatherCard = ({ weather }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold tect-center">
        {weather.name},{weather.sys.country}
      </h2>
      <div className="flex justify-center items-center">
        <img src="" alt={weather.weather[0].description}
          className="w-16 h-16"
        />
        <p className="text-4x1 font-bold">
          {Math.round(weather.main.temp)}
        </p>
      </div>
      <p className="text-center text-gray-400 capitalize">
        {weather.weather[0].description}
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="text-center">
          <p className="text-gray-400">Humidity</p>
          <p className="font-bold">{weather.main.humidity}</p>
        </div>
      </div>
      <div className="text-center">
        <div>
          <p className="text-gray-400">wind</p>
          <p className="font-bold">{weather.wind.speed}</p>
        </div>
      </div>
      <div>
        <div>
          <p className="text-gray-400">pressure</p>
          <p className="font-bold">{weather.main.preasure}</p>
        </div>
      </div>
      <div>
        <div className="text-center">
          <p className="text-gray-400">feels like</p>
          <p className="font-bold">{Math.round(weather.main.feels_like)} </p>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;

