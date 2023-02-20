import Location from "../../Assets/img/Location.svg";
import "./current.css";

const CurrentData = (props) => {
  const city = props.city;
  const country = props.country;
  const date = props.date;
  const day = props.day;

  return (
    <div className="todayBlock">
      <p className="today">{day}</p>
      <p className="currentDate">{date}</p>
      <p className="location">
        <img src={Location} alt="" />
        {city}, {country}
      </p>
    </div>
  );
};

export default CurrentData;
