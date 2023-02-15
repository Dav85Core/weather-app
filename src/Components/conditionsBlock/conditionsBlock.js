import "./conditions.css";
import {useState, useEffect} from "react";
import {API_URL} from "../../API";


const ConditionsBlock = () => {
  const [temperature, setTemperature] = useState(0);
  const [city, setCity] = useState("Krakow");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(`${API_URL}${city}`);
      const data = await response.json();

      const tempInCelsius = data.main.temp - 273.15;
      setTemperature(tempInCelsius);
      setWeather(data)
    }

    getWeather();
  }, [city]);

    return ( 
        <div className="conditionsBlock">
        <p className="degrees">{temperature.toFixed(2)}</p>
        <p className="sky">{weather.weather ? weather.weather[0].description : "Loading"}</p>
      </div>
     );
}
 
export default ConditionsBlock;