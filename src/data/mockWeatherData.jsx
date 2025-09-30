import { SunIcon, CloudSunIcon, CloudRainIcon, CloudIcon } from "../components/Icons";

export const MOCK_WEATHER_DATA = {
  city: "Berlin",
  country: "Germany",
  date: "Tuesday, Aug 5, 2025",
  currentTempC: 20,
  feelsLikeC: 18,
  humidity: 46,
  wind: 14,
  precipitation: 0,
  condition: "Sunny",
  hourly: [
    { time: "3 PM", tempC: 20, icon: SunIcon },
    { time: "4 PM", tempC: 20, icon: SunIcon },
    { time: "5 PM", tempC: 20, icon: CloudSunIcon },
  ],
  daily: [
    { day: "Tue", maxC: 20, minC: 14, icon: CloudSunIcon },
    { day: "Wed", maxC: 21, minC: 15, icon: CloudRainIcon },
  ]
};
