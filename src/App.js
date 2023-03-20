import Location from "./Assets/img/Location.svg";
import "./App.css";
import CurrentData from "./Components/CurrentData/currentData";
import CurrentConditions from "./Components/CurrentConditions/currentConditions";
import CurrentInfo from "./Components/CurrentInfo/currentInfo";
import Forecast from "./Components/Forecast/forecast";
import { useState } from "react";
import { API_KEY } from "./API";

function App() {
  const [city, setCity] = useState("- -");
  const [currentDate, setCurrentDate] = useState("- -");
  const [location, setLocation] = useState("- -");
  const [inputCity, setInputCity] = useState("- -");
  const [dayOfWeek, setDayOfWeek] = useState("- -");
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const [country, setCountry] = useState("- -");
  const [temp, setTemp] = useState("");
  const [conditions, setConditions] = useState("- -");
  const [precipitations, setPrecipitations] = useState("- -");
  const [humidity, setHumidity] = useState("- -");
  const [wind, setWind] = useState("- -");
  const [icon, setIcon] = useState("- -");
  const API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const API_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
  const [forecastData, setForecastData] = useState(["- -"]);

  const handleInput = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(API_WEATHER)
      .then((Response) => Response.json())
      .then((data) => {
        setCurrentDate(
          new Date(data.dt * 1000).toLocaleDateString("default", options)
        );
        setDayOfWeek(
          new Date(data.dt * 1000).toLocaleDateString("default", {
            weekday: "long",
          })
        );
        setCountry(data.sys.country);
        setLocation(city);
        setTemp((data.main.temp - 274.15).toFixed());
        setConditions(data.weather[0].main);
        const rain = data?.rain?.["1h"] || data?.snow?.["1h"] || 0;
        setPrecipitations(rain);
        setIcon(data.weather[0].icon);
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        console.log(data);
      });

    fetch(API_FORECAST)
      .then((response) => response.json())
      .then((data) => {
        const forecast = data.list
          .map((item) => ({
            date: new Date(item.dt * 1000).toLocaleDateString("default", {
              weekday: "short",
            }),
            temp: Math.round(item.main.temp - 274.15),
            icon: item.weather[0].icon,
            description: item.weather[0].description,
          }))
          .filter((item, index) => index % 8 === 0);

        setForecastData(forecast);
      })

      .catch((error) => {
        console.error("Error fetching weather forecast", error);
      });
  };

  return (
    <div className="main">
      <div className="weather">
        <CurrentData
          city={city}
          date={currentDate}
          day={dayOfWeek}
          country={country}
        />
        <CurrentConditions temp={temp} conditions={conditions} icon={icon} />
      </div>
      <div className="info">
        <CurrentInfo
          precipitations={precipitations}
          humidity={humidity}
          wind={wind}
        />

        <Forecast forecastData={forecastData} />

        <div className="location-Button">
          <input
            className="location-input"
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={handleInput}
          />
          <button className="btn" type="submit" onClick={handleSubmit}>
            <img src={Location} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
