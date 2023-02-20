import "./currentInfo.css";
import { useState, useEffect } from "react";
import { API_KEY } from "../../API";

const CurrentInfo = (props) => {
  const precipitations = props.precipitations;
  const humidity = props.humidity;
  const wind = props.wind;

  return (
    <div className="infoMargin">
      <div className="precipitationsBlock">
        <div className="statBlock">
          <p className="stat">precipitations</p>
        </div>
        <div className="statBlock">
          <p className="stat">{precipitations}%</p>
        </div>
      </div>
      <div className="humidityBlock">
        <div className="statBlock">
          <p className="stat">humidity</p>
        </div>
        <div className="statBlock">
          <p className="stat">{humidity}%</p>
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