import "./forecast.css";

const Forecast = ({ forecastData }) => {
  const nextFourDays = forecastData.slice(1, 5);

  return (
    <div>
      <div className="forecast-list">
        {nextFourDays.map((data, index) => (
          <div
            key={index}
            className={`forecast-item ${index === 0 ? "first-item" : ""}`}
          >
            <div className="forecast-icon">
              <img
                src={`https://openweathermap.org/img/w/${data.icon}.png`}
                alt={data.description}
              />
            </div>
            <div
              className={`forecast-date ${
                index === 0 ? "first-item-date" : ""
              }`}
            >
              {data.date}
            </div>
            <div
              className={`forecast-temp ${
                index === 0 ? "first-item-temp" : ""
              }`}
            >
              {data.temp} &#8451;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Forecast;
