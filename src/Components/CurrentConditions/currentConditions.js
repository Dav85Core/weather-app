import "./conditions.css";

const CurrentConditions = (props) => {
  const temp = props.temp;
  const conditions = props.conditions;
  const icon = props.icon;
  return (
    <div className="conditionsBlock">
      <div className="condition-icon">
        <img src={`https://openweathermap.org/img/w/${icon}.png`} />
      </div>
      <p className="degrees">{temp} &deg;</p>

      <p className="sky">{conditions}</p>
      <span>{}</span>
    </div>
  );
};

export default CurrentConditions;
