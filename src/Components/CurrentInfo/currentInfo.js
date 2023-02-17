import "./currentInfo.css";
import { useState, useEffect } from "react";
import { API_WEATHER } from "../../API";

const CurrentInfo = () => {
  const [city, setCity] = useState("Krakow");
  const [rain, setRain] = useState(0);
  const [humid, setHumid] = useState(0);
  const [wind, setWind] = useState(0);
  useEffect(() => {
    async function getCurrentInfo() {
      const response = await fetch(`${API_WEATHER}`);
      const data = await response.json();
      const humidity = data.main.humidity;
      const currentWind = data.wind.speed;
      console.log(humidity);
      console.log(currentWind);

      if (data.rain && data.rain === undefined) {
        setRain(0);
      }

      setHumid(humidity);
      setWind(currentWind);
    }
    getCurrentInfo();
  }, []);

  return (
    <div className="infoMargin">
      <div className="precipitationsBlock">
        <div className="statBlock">
          <p className="stat">precipitations</p>
        </div>
        <div className="statBlock">
          <p className="stat">{rain}</p>
        </div>
      </div>
      <div className="humidityBlock">
        <div className="statBlock">
          <p className="stat">humidity</p>
        </div>
        <div className="statBlock">
          <p className="stat">{humid}%</p>
        </div>
      </div>
      <div className="windBlock">
        <div className="statBlock">
          <p className="stat">wind</p>
        </div>
        <div className="statBlock">
          <p className="stat">{wind}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentInfo;
