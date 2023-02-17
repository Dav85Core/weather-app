import "./forecast.css";
import React, { useState, useEffect } from "react";
import { API_FORECAST } from "../../API";

const Forecast = () => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetch(API_FORECAST)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.list);
        const forecast = data.list.filter((item, index) => index % 8 === 0);
        const days = forecast.map((item) => ({
          ...item,
          weekday: new Date(item.dt_txt).toLocaleDateString("en-US", {
            weekday: "long",
          }),
        }));
        const filterToDays = days.filter(
          (item, index) => index > 0 && index <= 4
        );
        setForecast(filterToDays);
      });
  }, []);

  return (
    <div className="forecast-container">
      {forecast.map((data) => (
        <div className="forecastBlock" key={data.dtx}>
          <div className="forecast-element">
            <div className="forecast-data">
              <p className="forecast-day">Date: {data.weekday}</p>
            </div>
            <div className="forecast-data">
              <p className="forecast-temp">Temperature: {data.main.temp}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Forecast;
