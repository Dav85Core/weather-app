import "./conditions.css";
import { useState, useEffect } from "react";
import { API_WEATHER } from "../../API";

const CurrentConditions = () => {
  const [temperature, setTemperature] = useState(0);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(`${API_WEATHER}`);
      const data = await response.json();

      const tempInCelsius = data.main.temp - 273.15;
      setTemperature(tempInCelsius);
      setWeather(data);
    }

    getWeather();
  }, []);

  return (
    <div className="conditionsBlock">
      <p className="degrees">{temperature.toFixed(2)}</p>
      <p className="sky">
        {weather.weather ? weather.weather[0].description : "Loading"}
      </p>
    </div>
  );
};

export default CurrentConditions;
